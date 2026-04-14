<script setup lang="ts">
import logoRondi from '~/assets/images/trasporti_rondi_logo.png'
import { translations } from '~/shared/translations'

const { t } = useLang()
const accountPage = computed(() => t.value.accountPage ?? translations.it.accountPage)
const cms = useCms()

useSeo({
  title: accountPage.value.hero.tag,
  description: accountPage.value.hero.subtitle,
  noindex: true,
})

// Ref top-level → auto-unwrap nel template
const cmsReady  = computed(() => cms.ready.value)
const isLoggedIn = computed(() => cms.isLoggedIn.value)
const isAdmin    = computed(() => cms.isAdmin.value)
const session    = computed(() => cms.session.value)

onMounted(() => cms.init())

// ── Login ─────────────────────────────────────────────────────────────────────
const loginEmail    = ref('')
const loginPassword = ref('')
const loginError    = ref('')
const loginLoading  = ref(false)
const showPass      = ref(false)

async function doLogin() {
  loginError.value   = ''
  loginLoading.value = true
  try {
    await cms.login(loginEmail.value, loginPassword.value)
    activeTab.value = 'media'
    refreshContentEdits()
  } catch (e: any) {
    loginError.value = e.message
  } finally {
    loginLoading.value = false
  }
}

function doLogout() {
  cms.logout()
  loginEmail.value    = ''
  loginPassword.value = ''
}

// ── Tabs ──────────────────────────────────────────────────────────────────────
const activeTab = ref<'media' | 'users' | 'content'>('media')

const tabs = computed(() => [
  { id: 'media' as const,   label: t.value.cms.tabMedia },
  ...(isAdmin.value ? [{ id: 'users' as const, label: t.value.cms.tabUsers }] : []),
  { id: 'content' as const, label: t.value.cms.tabContent },
])

// ── Media ─────────────────────────────────────────────────────────────────────
const fileInput     = ref<HTMLInputElement>()
const uploadLoading = ref(false)
const uploadError   = ref('')

async function handleFileChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  uploadError.value   = ''
  uploadLoading.value = true
  try {
    await cms.uploadMedia(file)
  } catch (err: any) {
    uploadError.value = err.message
  } finally {
    uploadLoading.value = false
    if (fileInput.value) fileInput.value.value = ''
  }
}

function downloadMedia(item: { dataUrl: string; originalName: string }) {
  const a = document.createElement('a')
  a.href = item.dataUrl
  a.download = item.originalName
  a.click()
}

function confirmDeleteMedia(id: string, name: string) {
  if (confirm(`Eliminare "${name}"?`)) cms.deleteMedia(id)
}

const totalMediaSize = computed(() =>
  cms.media.value.reduce((acc, m) => acc + m.size, 0),
)

// ── Users ─────────────────────────────────────────────────────────────────────
const newUser = reactive({ name: '', email: '', password: '', role: 'user' as 'user' | 'admin' })
const newUserError   = ref('')
const newUserLoading = ref(false)
const showNewPass    = ref(false)

async function handleCreateUser() {
  newUserError.value   = ''
  newUserLoading.value = true
  try {
    await cms.createUser({ ...newUser })
    newUser.name = newUser.email = newUser.password = ''
    newUser.role = 'user'
  } catch (e: any) {
    newUserError.value = e.message
  } finally {
    newUserLoading.value = false
  }
}

function confirmDeleteUser(id: string, name: string) {
  if (confirm(`Eliminare l'utente "${name}"?`)) {
    try { cms.deleteUser(id) } catch (e: any) { alert(e.message) }
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' })
}

// ── Content ───────────────────────────────────────────────────────────────────
const contentEdits  = ref<Record<string, string>>({})
const contentSaving = ref(false)
const contentSaved  = ref(false)

function refreshContentEdits() {
  contentEdits.value = Object.fromEntries(
    Object.entries(cms.contentStore.value).map(([k, v]) => [k, v.value]),
  )
}

watch(cms.ready, (val) => { if (val) refreshContentEdits() }, { immediate: true })

async function handleSaveContent() {
  contentSaving.value = true
  contentSaved.value  = false
  try {
    cms.saveContent(contentEdits.value)
    contentSaved.value = true
    setTimeout(() => { contentSaved.value = false }, 2500)
  } finally {
    contentSaving.value = false
  }
}

// ── Input style helpers ───────────────────────────────────────────────────────
const inputStyle = 'background:var(--input-bg);border:1px solid var(--input-border);color:var(--text-primary);caret-color:var(--text-primary)'
</script>

<template>
  <div>
    <div v-if="!cmsReady" class="flex min-h-[calc(100svh-92px)] items-center justify-center px-4 py-16" style="background-color:var(--bg)">
      <div class="h-8 w-8 animate-spin rounded-full" style="border:2px solid var(--border-strong);border-top-color:var(--brand)"></div>
    </div>

    <template v-else>
      <!-- ── LOGIN ────────────────────────────────────────────────────────────── -->
      <div
        v-if="!isLoggedIn"
        class="flex min-h-[calc(100svh-92px)] items-center justify-center px-4 py-16"
        style="background-color:var(--bg)"
      >
        <div class="w-full max-w-[420px]">
          <!-- Logo + titolo -->
          <div class="mb-10 text-center">
            <img :src="logoRondi" alt="Trasporti Rondi" class="mx-auto mb-6 h-10 w-auto opacity-90">
            <h1 class="text-2xl font-bold tracking-tight" style="color:var(--text-primary)">{{ t.cms.title }}</h1>
            <p class="mt-1.5 text-sm" style="color:var(--text-muted)">{{ t.cms.subtitle }}</p>
          </div>

          <!-- Card form -->
          <div class="rounded-2xl p-7"
            style="background:var(--surface);border:1px solid var(--border);box-shadow:var(--shadow-lg)">
            <form @submit.prevent="doLogin" class="space-y-5">

              <!-- Email -->
              <div>
                <label class="mb-1.5 block text-[0.72rem] font-bold uppercase tracking-widest"
                  style="color:var(--text-muted)">{{ t.cms.email }}</label>
                <input
                  v-model="loginEmail"
                  type="email" required autocomplete="email" placeholder="email@esempio.it"
                  class="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                  :style="inputStyle"
                >
              </div>

              <!-- Password -->
              <div>
                <label class="mb-1.5 block text-[0.72rem] font-bold uppercase tracking-widest"
                  style="color:var(--text-muted)">{{ t.cms.password }}</label>
                <div class="relative">
                  <input
                    v-model="loginPassword"
                    :type="showPass ? 'text' : 'password'"
                    required autocomplete="current-password" placeholder="••••••••"
                    class="w-full rounded-xl px-4 py-3 pr-11 text-sm outline-none transition-all"
                    :style="inputStyle"
                  >
                  <button type="button" @click="showPass = !showPass"
                    class="absolute right-3 top-1/2 -translate-y-1/2 p-1 transition"
                    style="color:var(--text-muted)">
                    <svg v-if="!showPass" xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Errore -->
              <p v-if="loginError" class="rounded-lg px-3.5 py-2.5 text-sm font-medium"
                style="background:var(--brand-subtle);color:var(--brand)">
                {{ loginError }}
              </p>

              <!-- Submit -->
              <button type="submit" :disabled="loginLoading"
                class="w-full rounded-xl py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition disabled:opacity-60"
                style="background:var(--brand)">
                {{ loginLoading ? t.cms.loginLoading : t.cms.loginBtn }}
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- ── DASHBOARD ──────────────────────────────────────────────────────────── -->
      <div v-if="isLoggedIn" class="min-h-[calc(100svh-92px)] pt-0" style="background:var(--bg)">

      <!-- Top bar -->
      <div class="sticky z-30 backdrop-blur-md" style="top:70px;background:var(--surface-glass);border-bottom:1px solid var(--border)">
        <div class="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div class="flex min-w-0 items-center gap-3">
            <img :src="logoRondi" alt="" class="h-6 w-auto shrink-0 opacity-80">
            <span class="text-sm font-bold tracking-tight sm:text-base" style="color:var(--text-primary)">
              {{ accountPage.hero.tag }}
            </span>
          </div>

          <div class="flex w-full shrink-0 items-center justify-between gap-3 sm:w-auto sm:justify-end">
            <div class="flex min-w-0 items-center gap-2">
              <p class="truncate text-sm font-semibold leading-tight" style="color:var(--text-primary)">
                {{ session?.name }}
              </p>
              <p class="text-[0.65rem] font-bold uppercase leading-tight tracking-wider whitespace-nowrap"
                :style="isAdmin ? 'color:var(--brand)' : 'color:var(--text-muted)'">
                {{ isAdmin ? t.cms.role_admin : t.cms.role_user }}
              </p>
            </div>
            <button @click="doLogout"
              class="shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition hover:opacity-80"
              style="border:1px solid var(--border-strong);color:var(--text-secondary)">
              {{ t.cms.logout }}
            </button>
          </div>
        </div>

        <!-- Tab bar -->
        <div class="mx-auto flex max-w-7xl overflow-x-auto px-4 sm:px-6 hide-scrollbar">
          <button
            v-for="tab in tabs" :key="tab.id"
            @click="activeTab = tab.id"
            class="relative shrink-0 px-5 py-3 text-sm font-semibold transition"
            :style="activeTab === tab.id ? 'color:var(--text-primary)' : 'color:var(--text-muted)'"
          >
            {{ tab.label }}
            <span v-if="tab.id === 'media' && cms.media.value.length"
              class="ml-1.5 rounded-full px-1.5 py-px text-[0.63rem]"
              style="background:var(--surface-hover);color:var(--text-muted)">
              {{ cms.media.value.length }}
            </span>
            <span v-if="tab.id === 'users'"
              class="ml-1.5 rounded-full px-1.5 py-px text-[0.63rem]"
              style="background:var(--surface-hover);color:var(--text-muted)">
              {{ cms.users.value.length }}
            </span>
            <!-- Indicatore tab attivo -->
            <span v-if="activeTab === tab.id"
              class="absolute bottom-0 left-0 right-0 h-[2px]"
              style="background:var(--brand)"></span>
          </button>
        </div>
      </div>

      <!-- Contenuto tab -->
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6">

        <!-- ═══ MEDIA ══════════════════════════════════════════════════════════ -->
        <div v-show="activeTab === 'media'">
          <!-- Toolbar -->
          <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 class="text-lg font-bold" style="color:var(--text-primary)">{{ t.cms.tabMedia }}</h2>
              <p v-if="cms.media.value.length" class="mt-0.5 text-xs" style="color:var(--text-muted)">
                {{ cms.media.value.length }} {{ cms.media.value.length === 1 ? t.cms.mediaImages : t.cms.mediaImagesPlural }}
                · {{ cms.formatBytes(totalMediaSize) }}
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <p v-if="uploadError" class="text-xs font-medium" style="color:var(--brand)">{{ uploadError }}</p>
              <label class="flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold uppercase tracking-[0.07em] text-white transition"
                style="background:var(--brand)"
                :style="uploadLoading ? 'opacity:.6;pointer-events:none' : ''">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                {{ uploadLoading ? t.cms.uploading : t.cms.uploadBtn }}
                <input ref="fileInput" type="file" accept="image/*" class="sr-only" @change="handleFileChange">
              </label>
            </div>
          </div>

          <!-- Empty state -->
          <div v-if="!cms.media.value.length"
            class="flex flex-col items-center justify-center rounded-2xl py-20 text-center"
            style="border:1px dashed var(--border-strong)">
            <svg xmlns="http://www.w3.org/2000/svg" class="mb-4 h-10 w-10" style="color:var(--border-strong)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.4">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
            <p class="text-sm font-semibold" style="color:var(--text-muted)">{{ t.cms.noMedia }}</p>
            <p class="mt-1 text-xs" style="color:var(--text-placeholder)">{{ t.cms.noMediaHint }}</p>
          </div>

          <!-- Griglia immagini -->
          <div v-else class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div v-for="item in cms.media.value" :key="item.id"
              class="group relative overflow-hidden rounded-xl"
              style="border:1px solid var(--border);background:var(--surface)">
              <div class="aspect-square overflow-hidden" style="background:var(--surface-alt)">
                <img :src="item.dataUrl" :alt="item.originalName"
                  class="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy">
              </div>
              <div class="px-3 py-2.5">
                <p class="truncate text-[0.74rem] font-semibold" style="color:var(--text-primary)" :title="item.originalName">
                  {{ item.originalName }}
                </p>
                <p class="mt-0.5 text-[0.63rem]" style="color:var(--text-muted)">{{ cms.formatBytes(item.size) }}</p>
              </div>
              <!-- Azioni al hover -->
              <div class="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition duration-200 group-hover:opacity-100"
                style="background:var(--surface-overlay)">
                <button @click="downloadMedia(item)" title="Scarica"
                  class="flex h-9 w-9 items-center justify-center rounded-lg text-white transition"
                  style="background:rgba(255,255,255,0.15)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </button>
                <button @click="confirmDeleteMedia(item.id, item.originalName)" title="Elimina"
                  class="flex h-9 w-9 items-center justify-center rounded-lg transition"
                  style="background:var(--brand-subtle);color:var(--brand)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                    <path d="M10 11v6M14 11v6M9 6V4h6v2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <p class="mt-6 text-[0.68rem]" style="color:var(--text-placeholder)">
            {{ t.cms.mediaSizeNote }}
          </p>
        </div>

        <!-- ═══ UTENTI ══════════════════════════════════════════════════════════ -->
        <div v-show="activeTab === 'users' && isAdmin">
          <h2 class="mb-6 text-lg font-bold" style="color:var(--text-primary)">{{ t.cms.usersTitle }}</h2>

          <!-- Form nuovo utente -->
          <div class="mb-8 rounded-2xl p-6" style="background:var(--surface);border:1px solid var(--border)">
            <h3 class="mb-5 text-[0.7rem] font-bold uppercase tracking-widest" style="color:var(--text-muted)">{{ t.cms.newUser }}</h3>
            <form @submit.prevent="handleCreateUser" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div v-for="field in [
                { key: 'name',  label: t.cms.fieldName,  type: 'text',  ph: 'Mario Rossi' },
                { key: 'email', label: t.cms.fieldEmail, type: 'email', ph: 'mario@esempio.it' },
              ]" :key="field.key">
                <label class="mb-1.5 block text-[0.68rem] font-bold uppercase tracking-wider" style="color:var(--text-muted)">{{ field.label }}</label>
                <input v-model="(newUser as any)[field.key]" :type="field.type" required :placeholder="field.ph"
                  class="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                  :style="inputStyle">
              </div>

              <!-- Password -->
              <div>
                <label class="mb-1.5 block text-[0.68rem] font-bold uppercase tracking-wider" style="color:var(--text-muted)">{{ t.cms.fieldPassword }}</label>
                <div class="relative">
                  <input v-model="newUser.password" :type="showNewPass ? 'text' : 'password'" required placeholder="••••••••"
                    class="w-full rounded-xl px-4 py-2.5 pr-10 text-sm outline-none"
                    :style="inputStyle">
                  <button type="button" @click="showNewPass = !showNewPass"
                    class="absolute right-3 top-1/2 -translate-y-1/2 transition" style="color:var(--text-muted)">
                    <svg v-if="!showNewPass" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  </button>
                </div>
              </div>

              <!-- Ruolo -->
              <div>
                <label class="mb-1.5 block text-[0.68rem] font-bold uppercase tracking-wider" style="color:var(--text-muted)">{{ t.cms.fieldRole }}</label>
                <select v-model="newUser.role" class="w-full rounded-xl px-4 py-2.5 text-sm outline-none appearance-none"
                  :style="inputStyle">
                  <option value="user">{{ t.cms.role_user }}</option>
                  <option value="admin">{{ t.cms.role_admin }}</option>
                </select>
              </div>

              <div class="flex flex-wrap items-center gap-3 sm:col-span-2 lg:col-span-4">
                <button type="submit" :disabled="newUserLoading"
                  class="rounded-xl px-6 py-2.5 text-sm font-bold uppercase tracking-[0.07em] text-white transition disabled:opacity-60"
                  style="background:var(--brand)">
                  {{ newUserLoading ? t.cms.creating : t.cms.createBtn }}
                </button>
                <p v-if="newUserError" class="text-sm" style="color:var(--brand)">{{ newUserError }}</p>
              </div>
            </form>
          </div>

          <!-- Tabella utenti -->
          <div class="overflow-hidden rounded-2xl" style="border:1px solid var(--border)">
            <div class="overflow-x-auto">
              <table class="w-full min-w-[600px] text-sm">
                <thead>
                  <tr style="border-bottom:1px solid var(--border);background:var(--surface-alt)">
                    <th v-for="h in [t.cms.fieldName, t.cms.fieldEmail, t.cms.tableRole, t.cms.tableCreated, t.cms.tableAction]" :key="h"
                      class="px-5 py-3.5 text-[0.68rem] font-bold uppercase tracking-widest"
                      :class="h === t.cms.tableAction ? 'text-right' : 'text-left'"
                      style="color:var(--text-muted)">{{ h }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in cms.users.value" :key="user.id"
                    class="transition" style="border-bottom:1px solid var(--border)">
                    <td class="px-5 py-4 font-semibold" style="color:var(--text-primary)">
                      {{ user.name }}
                      <span v-if="session?.userId === user.id" class="ml-2 text-[0.63rem]" style="color:var(--text-placeholder)">{{ t.cms.tableYou }}</span>
                    </td>
                    <td class="px-5 py-4" style="color:var(--text-secondary)">{{ user.email }}</td>
                    <td class="px-5 py-4">
                      <span class="rounded-full px-2.5 py-0.5 text-[0.66rem] font-bold uppercase tracking-wider"
                        :style="user.role === 'admin'
                          ? 'background:var(--brand-subtle);color:var(--brand)'
                          : 'background:var(--surface-hover);color:var(--text-muted)'">
                        {{ user.role === 'admin' ? t.cms.role_admin : t.cms.role_user }}
                      </span>
                    </td>
                    <td class="px-5 py-4 text-xs" style="color:var(--text-muted)">{{ formatDate(user.createdAt) }}</td>
                    <td class="px-5 py-4 text-right">
                      <button v-if="session?.userId !== user.id"
                        @click="confirmDeleteUser(user.id, user.name)"
                        class="rounded-lg px-3 py-1.5 text-xs font-semibold transition"
                        style="color:var(--text-muted);border:1px solid var(--border)">
                        {{ t.cms.deleteBtn }}
                      </button>
                      <span v-else class="text-xs" style="color:var(--text-placeholder)">—</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- ═══ CONTENUTI ══════════════════════════════════════════════════════ -->
        <div v-show="activeTab === 'content'">
          <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 class="text-lg font-bold" style="color:var(--text-primary)">{{ t.cms.contentTitle }}</h2>
              <p class="mt-0.5 text-xs" style="color:var(--text-muted)">{{ t.cms.contentNote }}</p>
            </div>
            <button @click="handleSaveContent" :disabled="contentSaving"
              class="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold uppercase tracking-[0.07em] text-white transition disabled:opacity-60"
              :style="contentSaved ? 'background:#16a34a' : 'background:var(--brand)'">
              <svg v-if="contentSaved" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {{ contentSaved ? t.cms.saved : contentSaving ? t.cms.saving : t.cms.saveBtn }}
            </button>
          </div>

          <div class="space-y-4">
            <div v-for="(item, key) in cms.contentStore.value" :key="key"
              class="rounded-2xl p-5" style="background:var(--surface);border:1px solid var(--border)">
              <label :for="`c-${key}`" class="mb-2 block text-[0.68rem] font-bold uppercase tracking-widest"
                style="color:var(--text-muted)">{{ item.label }}</label>
              <textarea v-if="item.value.length > 80" :id="`c-${key}`" v-model="contentEdits[key]" rows="3"
                class="w-full resize-y rounded-xl px-4 py-3 text-sm outline-none transition"
                :style="inputStyle"></textarea>
              <input v-else :id="`c-${key}`" v-model="contentEdits[key]" type="text"
                class="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition"
                :style="inputStyle">
            </div>
          </div>
        </div>

      </div>
    </div>
    </template>
  </div>
</template>

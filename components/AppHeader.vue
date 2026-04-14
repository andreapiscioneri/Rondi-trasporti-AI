<script setup lang="ts">
import { Mail, Menu, Phone, Plus, UserRound, X } from 'lucide-vue-next'
import logoRondi from '~/assets/images/trasporti_rondi_logo.png'

const { lang, t, toggleLang } = useLang()
const localePath = useLocalePath()
const route = useRoute()

// ── CMS auth ──────────────────────────────────────────────────────────────────
const cms          = useCms()
const cmsLoggedIn  = computed(() => cms.isLoggedIn.value)
const cmsSession   = computed(() => cms.session.value)

function cmsLogout() {
  cms.logout()
  mobileOpen.value = false
}

const mobileOpen = ref(false)
const scrolled    = ref(false)

const desktopTransportLinks = computed(() => {
  if (lang.value === 'en') {
    return [
      { label: 'National Transport', href: '/trasporto-nazionale' },
      { label: 'International', href: '/trasporto-internazionale' },
      { label: 'Exceptional', href: '/trasporto-eccezionale' },
      { label: 'Crane & Handling', href: '/gru-e-movimentazioni' },
      { label: 'Logistics', href: '/soluzioni-logistiche' },
    ]
  }

  return [
    { label: 'Trasporto Nazionale', href: '/trasporto-nazionale' },
    { label: 'Internazionale', href: '/trasporto-internazionale' },
    { label: 'Eccezionale', href: '/trasporto-eccezionale' },
    { label: 'Gru e Movimentazioni', href: '/gru-e-movimentazioni' },
    { label: 'Logistica', href: '/soluzioni-logistiche' },
  ]
})

const mobileMenuLinks = computed(() => [
  { label: t.value.nav.servizi,       href: '/servizi' },
  { label: t.value.nav.sostenibilita, href: '/sostenibilita' },
  { label: t.value.nav.storia,        href: '/storia' },
  { label: t.value.nav.media,         href: '/media' },
  { label: t.value.nav.account,      href: '/account' },
  { label: t.value.nav.lavora,        href: '/lavora-con-noi' },
  { label: t.value.nav.contatti,      href: '/contatti' },
])

const mobileTransportLinks = computed(() => desktopTransportLinks.value)

const isActive = (href: string) => {
  const cleanHref = href.split('#')[0] || href
  const localizedHref = localePath(cleanHref)
  return localizedHref === '/' ? route.path === '/' : route.path.startsWith(localizedHref)
}

function handleNavClick(href: string) {
  if (!import.meta.client) return
  const cleanHref = href.split('#')[0] || href
  if (route.path === localePath(cleanHref)) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Close drawer on route change
watch(() => route.path, () => { mobileOpen.value = false })

// Lock body scroll when mobile drawer is open
watch(mobileOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

// Scroll detection for header glass effect
onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 18 }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50"
    style="font-family:'DM Sans',sans-serif"
  >
    <!-- ── Top info bar (desktop only) ── -->
    <div class="hidden lg:block bg-[#090909] border-b border-white/8">
      <div class="max-w-[1440px] mx-auto px-6 xl:px-10 h-10 flex items-center justify-between text-[0.68rem] tracking-[0.14em] uppercase">
        <div class="flex items-center gap-5">
          <a
            href="tel:+390301234567"
            class="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <Phone :size="12" />
            +39 030 123 4567
          </a>
          <a
            href="mailto:info@trasportirondi.it"
            class="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <Mail :size="12" />
            info@trasportirondi.it
          </a>
        </div>
        <span class="text-white/40 tracking-[0.1em]">Trasporto Industriale e Logistica Integrata</span>
      </div>
    </div>

    <!-- ── Main nav bar ── -->
    <div
      class="border-b transition-[background-color,border-color,box-shadow] duration-300"
      :class="scrolled
        ? 'bg-[#080808]/96 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.30)] backdrop-blur-xl'
        : 'bg-[#0B0B0B]/94 border-transparent backdrop-blur-lg'"
    >
      <div class="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10 h-[72px] sm:h-[82px] flex min-w-0 items-center justify-between gap-2 sm:gap-4 text-white">

        <!-- Logo -->
        <NuxtLink to="/" class="flex min-w-0 flex-shrink items-center gap-2 sm:gap-3">
          <img
            :src="logoRondi"
            alt="Trasporti Rondi"
            data-no-dim
            class="h-8 sm:h-12 w-auto max-w-[132px] sm:max-w-[220px] object-contain transition-transform duration-500 hover:scale-[1.02]"
          >
        </NuxtLink>

        <!-- Desktop navigation -->
        <nav class="hidden lg:flex flex-1 items-center justify-center gap-1">
          <NuxtLink
            v-for="link in desktopTransportLinks"
            :key="link.href"
            :to="localePath(link.href)"
            @click="handleNavClick(link.href)"
            class="relative rounded-full px-4 py-2 text-[0.73rem] font-semibold tracking-[0.1em] uppercase transition-all duration-200"
            :class="isActive(link.href)
              ? 'text-white bg-[#E5322D]'
              : 'text-white/72 hover:text-white hover:bg-white/10'"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Actions -->
        <div class="flex flex-shrink-0 items-center gap-2 sm:gap-3">

          <!-- Language toggle -->
          <button
            class="hidden sm:flex items-center gap-1 px-3 py-1.5 border border-white/14 hover:border-white/30 text-[0.67rem] font-bold tracking-[0.1em] uppercase text-white/75 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200 rounded-sm"
            @click="toggleLang"
          >
            {{ t.nav.langSwitch }}
          </button>

          <!-- ── Premium theme toggle ── -->
          <UiThemeToggle variant="on-dark" />

          <!-- CTA -->
          <NuxtLink
            to="/preventivo"
            class="cta-premium hidden lg:inline-flex items-center gap-2 rounded-sm border border-transparent bg-[#E5322D] px-5 py-3 text-[0.72rem] font-bold tracking-[0.1em] uppercase text-white transition-colors duration-200 hover:border-[#E5322D] hover:bg-black hover:text-[#E5322D]"
          >
            <Plus :size="14" />
            {{ lang === 'it' ? 'Richiedi quotazione' : 'Request Quote' }}
          </NuxtLink>

          <!-- Hamburger -->
          <button
            class="w-10 h-10 flex items-center justify-center border border-white/18 bg-white/5 text-white hover:text-white/85 hover:bg-white/10 transition-colors rounded-sm"
            aria-label="Toggle menu"
            @click="mobileOpen = !mobileOpen"
          >
            <X v-if="mobileOpen" :size="20" />
            <Menu v-else :size="20" />
          </button>
        </div>
      </div>
    </div>

    <!-- ── Mobile overlay ── -->
    <div
      class="fixed inset-0 z-40 transition-opacity duration-300"
      style="background:rgba(0,0,0,0.58)"
      :class="mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      @click="mobileOpen = false"
    />

    <!-- ── Mobile drawer ── -->
    <aside
      class="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-80 max-w-full bg-[#090909] text-white flex flex-col border-l border-white/10 transition-transform duration-300"
      :style="{ transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)' }"
    >
      <!-- Drawer header -->
      <div class="h-[82px] px-6 flex items-center justify-between border-b border-white/10 flex-shrink-0">
        <img :src="logoRondi" alt="Trasporti Rondi" data-no-dim class="h-10 w-auto">
        <button class="text-white/70 hover:text-white transition-colors" @click="mobileOpen = false">
          <X :size="20" />
        </button>
      </div>

      <!-- Drawer nav -->
      <nav class="flex-1 overflow-y-auto p-6 flex flex-col">
        <p class="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/45">
          {{ lang === 'it' ? 'Trasporti' : 'Transport' }}
        </p>
        <NuxtLink
          v-for="link in mobileTransportLinks"
          :key="`m-transport-${link.href}`"
          :to="localePath(link.href)"
          @click="handleNavClick(link.href)"
          class="py-3.5 border-b border-white/8 text-[0.95rem] transition-colors duration-200"
          :class="isActive(link.href)
            ? 'font-bold text-[#E5322D]'
            : 'text-white/78 hover:text-white'"
        >
          {{ link.label }}
        </NuxtLink>

        <div class="mt-4 mb-2 h-px w-full bg-white/10" />
        <p class="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/45">
          {{ lang === 'it' ? 'Menu' : 'Menu' }}
        </p>
        <NuxtLink
          v-for="link in mobileMenuLinks"
          :key="link.href"
          :to="localePath(link.href)"
          @click="handleNavClick(link.href)"
          class="py-3.5 border-b border-white/8 text-[0.95rem] transition-colors duration-200"
          :class="isActive(link.href)
            ? 'font-bold text-[#E5322D]'
            : 'text-white/78 hover:text-white'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Drawer footer: lang + theme -->
      <div class="p-6 border-t border-white/10 flex flex-col gap-3 flex-shrink-0">

        <!-- Utente loggato -->
        <ClientOnly>
          <template #default>
            <!-- Loggato: nome + logout -->
            <div v-if="cmsLoggedIn" class="flex items-center justify-between gap-3 rounded-sm border border-white/15 bg-white/5 px-4 py-3">
              <NuxtLink
                :to="localePath('/account')"
                class="flex min-w-0 items-center gap-2"
                @click="handleNavClick('/account')"
              >
                <UserRound :size="14" class="shrink-0 text-white/70" />
                <span class="truncate text-[0.78rem] font-bold text-white">{{ cmsSession?.name }}</span>
              </NuxtLink>
              <button
                @click="cmsLogout"
                class="shrink-0 text-[0.68rem] font-bold uppercase tracking-wider text-white/45 transition hover:text-white"
              >
                {{ t.cms.logout }}
              </button>
            </div>

            <!-- Non loggato: link area riservata -->
            <NuxtLink
              v-else
              :to="localePath('/account')"
              @click="handleNavClick('/account')"
              class="inline-flex items-center justify-center gap-2 rounded-sm border border-[#E5322D]/35 bg-white/5 px-4 py-3 text-[0.72rem] font-bold tracking-[0.08em] uppercase text-white transition-colors hover:bg-[#E5322D] hover:text-white"
            >
              <UserRound :size="14" />
              {{ t.nav.account }}
            </NuxtLink>
          </template>

          <!-- Fallback SSR -->
          <template #fallback>
            <NuxtLink
              :to="localePath('/account')"
              class="inline-flex items-center justify-center gap-2 rounded-sm border border-[#E5322D]/35 bg-white/5 px-4 py-3 text-[0.72rem] font-bold tracking-[0.08em] uppercase text-white transition-colors hover:bg-[#E5322D] hover:text-white"
            >
              <UserRound :size="14" />
              {{ t.nav.account }}
            </NuxtLink>
          </template>
        </ClientOnly>

        <div class="flex items-center justify-between gap-3">
          <button
            class="flex-1 py-2 border border-white/14 text-[0.72rem] font-bold tracking-[0.08em] uppercase bg-white/5 hover:bg-white/10 transition-colors rounded-sm"
            @click="toggleLang"
          >
            {{ t.nav.langSwitch }}
          </button>

          <!-- ThemeToggle in drawer — same pill component -->
          <UiThemeToggle variant="on-dark" />
        </div>
      </div>
    </aside>
  </header>
</template>

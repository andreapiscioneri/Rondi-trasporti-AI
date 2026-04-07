<script setup lang="ts">
import { Menu, Moon, Sun, X } from 'lucide-vue-next'
import logoRondi from '~/src/assets/trasporti_rondi_logo.png'

const RED = '#E5322D'

const { theme, toggleTheme } = useTheme()
const { lang, t, toggleLang } = useLang()

const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)

const navLinks = computed(() => [
  { label: t.value.nav.home, href: '/' },
  { label: t.value.nav.servizi, href: '/servizi' },
  { label: t.value.nav.sostenibilita, href: '/sostenibilita' },
  { label: t.value.nav.storia, href: '/storia' },
  { label: t.value.nav.lavora, href: '/lavora-con-noi' },
  { label: t.value.nav.contatti, href: '/contatti' },
])

const isActive = (href: string) =>
  href === '/' ? route.path === '/' : route.path.startsWith(href)

const bgClass = computed(() =>
  scrolled.value
    ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md shadow-sm'
    : 'bg-white dark:bg-[#0A0A0A]',
)

watch(
  () => route.path,
  () => {
    mobileOpen.value = false
  },
)

watch(mobileOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header
    :class="`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/10 dark:border-white/10 ${bgClass}`"
    style="font-family: 'Roboto', sans-serif"
  >
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[72px] flex items-center justify-between gap-6">
      <NuxtLink to="/" class="flex items-center flex-shrink-0 group">
        <img
          :src="logoRondi"
          alt="Trasporti Rondi"
          class="h-10 sm:h-11 w-auto object-contain"
        >
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-1">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="relative px-3 py-2 transition-colors duration-200 group"
          :style="{
            fontSize: '0.8125rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: isActive(link.href) ? RED : undefined,
          }"
        >
          <span
            :class="isActive(link.href)
              ? ''
              : 'text-[#333333] dark:text-[#CCCCCC] group-hover:text-[#111111] dark:group-hover:text-white transition-colors'"
          >
            {{ link.label }}
          </span>
          <span
            v-if="isActive(link.href)"
            class="absolute bottom-0 left-3 right-3 h-[2px]"
            :style="{ background: RED }"
          />
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <button
          class="hidden sm:flex items-center gap-1 px-3 py-1.5 border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 transition-colors"
          style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: #333333"
          @click="toggleLang"
        >
          <span class="dark:text-white">{{ t.nav.langSwitch }}</span>
        </button>

        <button
          class="w-9 h-9 flex items-center justify-center border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 transition-colors text-[#333333] dark:text-white"
          aria-label="Toggle theme"
          @click="toggleTheme"
        >
          <Moon v-if="theme === 'light'" :size="16" />
          <Sun v-else :size="16" />
        </button>

        <NuxtLink
          to="/contatti"
          class="hidden md:flex items-center px-4 py-2 text-white transition-opacity hover:opacity-90"
          style="background: #E5322D; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase"
        >
          {{ lang === 'it' ? 'Preventivo' : 'Get a Quote' }}
        </NuxtLink>

        <button
          class="lg:hidden w-9 h-9 flex items-center justify-center text-[#333333] dark:text-white"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <X v-if="mobileOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </div>

    <div
      :class="`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`"
      style="background: rgba(0,0,0,0.5)"
      @click="mobileOpen = false"
    />

    <div
      class="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-white dark:bg-[#0A0A0A] lg:hidden transition-transform duration-300 flex flex-col"
      :style="{ transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)', fontFamily: '\'Roboto\', sans-serif' }"
    >
      <div class="flex items-center justify-between px-6 h-[72px] border-b border-black/10 dark:border-white/10">
        <img :src="logoRondi" alt="Trasporti Rondi" class="h-9 w-auto object-contain">
        <button class="text-[#333333] dark:text-white" @click="mobileOpen = false">
          <X :size="20" />
        </button>
      </div>
      <nav class="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-1">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="flex items-center py-3 border-b border-black/5 dark:border-white/5 transition-colors"
          :style="{ fontSize: '1rem', fontWeight: isActive(link.href) ? 700 : 400, color: isActive(link.href) ? RED : undefined }"
        >
          <span :class="isActive(link.href) ? '' : 'text-[#333333] dark:text-[#CCCCCC]'">
            {{ link.label }}
          </span>
        </NuxtLink>
        <NuxtLink
          to="/whistleblowing"
          class="flex items-center py-3 border-b border-black/5 dark:border-white/5"
          style="font-size: 1rem; font-weight: 400"
        >
          <span
            :class="isActive('/whistleblowing') ? '' : 'text-[#333333] dark:text-[#CCCCCC]'"
            :style="{ color: isActive('/whistleblowing') ? RED : undefined }"
          >
            {{ t.nav.whistleblowing }}
          </span>
        </NuxtLink>
      </nav>
      <div class="p-6 border-t border-black/10 dark:border-white/10 flex gap-3">
        <button
          class="flex-1 py-2 border border-black/20 dark:border-white/20 text-[#333333] dark:text-white"
          style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em"
          @click="toggleLang"
        >
          {{ t.nav.langSwitch }}
        </button>
        <button
          class="flex-1 py-2 border border-black/20 dark:border-white/20 text-[#333333] dark:text-white flex items-center justify-center gap-2"
          style="font-size: 0.75rem; font-weight: 700"
          @click="toggleTheme"
        >
          <Moon v-if="theme === 'light'" :size="14" />
          <Sun v-else :size="14" />
          {{ theme === 'light' ? 'Dark' : 'Light' }}
        </button>
      </div>
    </div>
  </header>
</template>

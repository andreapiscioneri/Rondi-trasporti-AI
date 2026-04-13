<script setup lang="ts">
import { Mail, Menu, Moon, Phone, Sun, X } from 'lucide-vue-next'
import logoRondi from '~/assets/images/trasporti_rondi_logo.png'

const { theme, toggleTheme } = useTheme()
const { lang, t, toggleLang } = useLang()
const route = useRoute()

const mobileOpen = ref(false)
const scrolled = ref(false)
const RED = '#E5322D'

const navLinks = computed(() => [
  { label: t.value.nav.home, href: '/' },
  { label: t.value.nav.servizi, href: '/servizi' },
  { label: t.value.nav.sostenibilita, href: '/sostenibilita' },
  { label: t.value.nav.storia, href: '/storia' },
  { label: t.value.nav.lavora, href: '/lavora-con-noi' },
  { label: t.value.nav.contatti, href: '/contatti' },
])

const isActive = (href: string) => (href === '/' ? route.path === '/' : route.path.startsWith(href))

const headerClass = computed(() =>
  scrolled.value
    ? 'bg-white/80 dark:bg-black/72 border-black/10 dark:border-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl'
    : 'bg-white/58 dark:bg-black/55 border-transparent backdrop-blur-md',
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
    scrolled.value = window.scrollY > 18
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50" style="font-family:'DM Sans',sans-serif">
    <div class="hidden lg:block text-white bg-[#090909] border-b border-white/10">
      <div class="max-w-[1440px] mx-auto px-6 xl:px-10 h-10 flex items-center justify-between text-[0.7rem] tracking-[0.14em] uppercase">
        <div class="flex items-center gap-5">
          <a href="tel:+390301234567" class="inline-flex items-center gap-2 text-white/75 hover:text-white transition-colors"><Phone :size="12" /> +39 030 123 4567</a>
          <a href="mailto:info@trasportirondi.it" class="inline-flex items-center gap-2 text-white/75 hover:text-white transition-colors"><Mail :size="12" /> info@trasportirondi.it</a>
        </div>
        <span class="text-white/52">Trasporto Industriale e Logistica Integrata</span>
      </div>
    </div>

    <div class="border-b border-white/10 bg-[#0B0B0B]/96 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[82px] flex items-center justify-between gap-6 text-white">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img :src="logoRondi" alt="Trasporti Rondi" class="h-11 sm:h-12 w-auto object-contain transition-transform duration-500 hover:scale-[1.02]">
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-0 border border-white/10 bg-white/5 backdrop-blur-md">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="relative px-4 py-3 text-[0.74rem] font-semibold tracking-[0.12em] uppercase border-r border-white/10 transition-all duration-300 last:border-r-0"
            :class="isActive(link.href)
              ? 'text-white bg-[#E5322D]'
              : 'text-white/72 hover:text-white hover:bg-white/8'"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <button
            class="interactive-control hidden sm:flex items-center gap-1 px-3 py-2 border border-white/15 hover:border-white/30 text-[0.68rem] font-bold tracking-[0.1em] uppercase text-white/80 hover:text-white bg-white/5"
            @click="toggleLang"
          >
            {{ t.nav.langSwitch }}
          </button>

          <button
            class="interactive-control w-9 h-9 flex items-center justify-center rounded-full border border-white/15 hover:border-white/30 text-white/80 hover:text-white bg-white/5"
            aria-label="Toggle theme"
            @click="toggleTheme"
          >
            <Moon v-if="theme === 'light'" :size="16" />
            <Sun v-else :size="16" />
          </button>

          <NuxtLink
            to="/contatti"
            data-magnetic
            class="cta-premium hidden md:inline-flex items-center px-5 py-2.5 text-white text-[0.72rem] font-bold tracking-[0.1em] uppercase hover:opacity-95 transition-all duration-300"
            :style="{ background: RED }"
          >
            {{ lang === 'it' ? 'Richiedi Preventivo' : 'Request Quote' }}
          </NuxtLink>

          <button
            class="lg:hidden w-9 h-9 flex items-center justify-center text-black dark:text-white"
            aria-label="Toggle menu"
            @click="mobileOpen = !mobileOpen"
          >
            <X v-if="mobileOpen" :size="20" />
            <Menu v-else :size="20" />
          </button>
        </div>
      </div>
    </div>

    <div
      :class="`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`"
      style="background:rgba(0,0,0,0.55)"
      @click="mobileOpen = false"
    />

    <aside
      class="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-[#090909] text-white lg:hidden transition-transform duration-300 flex flex-col border-l border-white/10"
      :style="{ transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)' }"
    >
      <div class="h-[82px] px-6 flex items-center justify-between border-b border-white/10">
        <img :src="logoRondi" alt="Trasporti Rondi" class="h-10 w-auto">
        <button class="text-white" @click="mobileOpen = false"><X :size="20" /></button>
      </div>

      <nav class="flex-1 overflow-y-auto p-6 flex flex-col gap-1">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="py-3 border-b border-white/10 text-[0.95rem]"
          :class="isActive(link.href) ? 'font-bold text-[#E5322D]' : 'text-white/82'"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/whistleblowing"
          class="py-3 border-b border-white/10 text-[0.95rem]"
          :class="isActive('/whistleblowing') ? 'font-bold text-[#E5322D]' : 'text-white/82'"
        >
          {{ t.nav.whistleblowing }}
        </NuxtLink>
      </nav>

      <div class="p-6 border-t border-white/10 grid grid-cols-2 gap-3">
        <button class="py-2 rounded-full border border-white/15 text-[0.72rem] font-bold tracking-[0.08em] uppercase bg-white/5" @click="toggleLang">{{ t.nav.langSwitch }}</button>
        <button class="py-2 rounded-full border border-white/15 text-[0.72rem] font-bold tracking-[0.08em] uppercase bg-white/5" @click="toggleTheme">{{ theme === 'light' ? 'Dark' : 'Light' }}</button>
      </div>
    </aside>
  </header>
</template>

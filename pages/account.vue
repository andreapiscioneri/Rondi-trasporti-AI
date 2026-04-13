<script setup lang="ts">
import { ArrowRight, Images, KeyRound, RefreshCcw, ShieldCheck, Users } from 'lucide-vue-next'

const RED = '#E5322D'
const { t } = useLang()
const pg = computed(() => t.value.accountPage)

useSeo({
  title: 'Area Riservata',
  description: 'Accesso area riservata per gestione media, utenti, ruoli e sostituzione immagini del sito.',
  path: '/account',
  noindex: true,
  jsonLd: buildBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Area Riservata', href: '/account' }]),
})

const heroData = computed(() => ({
  image: 'https://images.pexels.com/photos/30037629/pexels-photo-30037629.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200',
  alt: pg.value.hero.title,
  tag: pg.value.hero.tag,
  title: pg.value.hero.title,
  subtitle: pg.value.hero.subtitle,
}))

const loginEmail = ref('')
const loginPassword = ref('')
const resetEmail = ref('')
const remembered = ref(true)
const loginSubmitted = ref(false)
const resetSubmitted = ref(false)

const onLogin = (event: Event) => {
  event.preventDefault()
  loginSubmitted.value = true
}

const onReset = (event: Event) => {
  event.preventDefault()
  resetSubmitted.value = true
}

const accessCards = [
  { title: 'Media library', desc: 'Carica, sostituisci e organizza le immagini del sito.', icon: Images },
  { title: 'Users & roles', desc: 'Gestisci account, ruoli e permessi operativi.', icon: Users },
  { title: 'Password reset', desc: 'Invio link di reset e controllo accessi sicuri.', icon: KeyRound },
  { title: 'Site-wide replacement', desc: 'Aggiorna le immagini utilizzate in home, servizi e pagine istituzionali.', icon: RefreshCcw },
]
</script>

<template>
  <div>
    <PageHeroBanner :hero="heroData" />

    <section class="page-section page-section--light">
      <div class="section-shell grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <AnimateOnScroll variant="fadeLeft">
          <div class="rounded-[1.75rem] border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111] p-7 sm:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-11 h-11 rounded-full flex items-center justify-center" :style="{ background: RED }">
                <ShieldCheck :size="20" class="text-white" />
              </div>
              <div>
                <p class="text-[#111111] dark:text-white" style="font-size:1rem;font-weight:800">{{ pg.login.title }}</p>
                <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.85rem">Accesso amministrativo e media management</p>
              </div>
            </div>

            <form class="flex flex-col gap-5" @submit="onLogin">
              <label class="flex flex-col gap-2">
                <span class="text-[#444444] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.login.email }}</span>
                <input v-model="loginEmail" type="email" required class="rounded-xl border border-black/10 dark:border-white/10 bg-[#F7F7F7] dark:bg-[#181818] px-4 py-3 text-[#111111] dark:text-white focus:border-[#E5322D] focus:outline-none">
              </label>

              <label class="flex flex-col gap-2">
                <span class="text-[#444444] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.login.password }}</span>
                <input v-model="loginPassword" type="password" required class="rounded-xl border border-black/10 dark:border-white/10 bg-[#F7F7F7] dark:bg-[#181818] px-4 py-3 text-[#111111] dark:text-white focus:border-[#E5322D] focus:outline-none">
              </label>

              <label class="flex items-center gap-3 text-[#555555] dark:text-[#AAAAAA]" style="font-size:0.875rem">
                <input v-model="remembered" type="checkbox" class="h-4 w-4 rounded border-black/20 text-[#E5322D] focus:ring-[#E5322D]">
                {{ pg.login.remember }}
              </label>

              <button type="submit" class="cta-premium inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-white" :style="{ background: RED, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }">
                {{ pg.login.submit }} <ArrowRight :size="16" />
              </button>

              <p v-if="loginSubmitted" class="rounded-xl border border-[#E5322D]/25 bg-[#E5322D]/8 px-4 py-3 text-[#111111] dark:text-white" style="font-size:0.875rem;line-height:1.7">
                Login UI pronta. Il collegamento all'autenticazione server va agganciato nel backend CMS.
              </p>
            </form>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeRight" :delay="0.08">
          <div class="rounded-[1.75rem] border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111] p-7 sm:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-11 h-11 rounded-full flex items-center justify-center" :style="{ background: RED }">
                <RefreshCcw :size="20" class="text-white" />
              </div>
              <div>
                <p class="text-[#111111] dark:text-white" style="font-size:1rem;font-weight:800">{{ pg.reset.title }}</p>
                <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.85rem">{{ pg.reset.desc }}</p>
              </div>
            </div>

            <form class="flex flex-col gap-5" @submit="onReset">
              <label class="flex flex-col gap-2">
                <span class="text-[#444444] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.login.email }}</span>
                <input v-model="resetEmail" type="email" required class="rounded-xl border border-black/10 dark:border-white/10 bg-[#F7F7F7] dark:bg-[#181818] px-4 py-3 text-[#111111] dark:text-white focus:border-[#E5322D] focus:outline-none">
              </label>

              <button type="submit" class="cta-premium inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-white" :style="{ background: RED, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }">
                {{ pg.reset.submit }} <ArrowRight :size="16" />
              </button>

              <p v-if="resetSubmitted" class="rounded-xl border border-[#E5322D]/25 bg-[#E5322D]/8 px-4 py-3 text-[#111111] dark:text-white" style="font-size:0.875rem;line-height:1.7">
                Reset UI pronta. Il link email va generato dal backend autenticato.
              </p>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    <section class="page-section page-section--soft">
      <div class="section-shell">
        <AnimateOnScroll variant="fadeUp" class="mb-10">
          <span class="block mb-3" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">CMS</span>
          <h2 class="text-[#111111] dark:text-white headline-balance" style="font-size:clamp(1.75rem,3vw,2.45rem);font-weight:800">{{ pg.access.title }}</h2>
        </AnimateOnScroll>

        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <AnimateOnScroll v-for="(card, i) in accessCards" :key="card.title" variant="fadeUp" :delay="i * 0.06">
            <article class="h-full rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111] p-6 flex flex-col gap-4">
              <div class="w-11 h-11 rounded-full flex items-center justify-center" :style="{ background: RED }">
                <component :is="card.icon" :size="18" class="text-white" />
              </div>
              <div>
                <h3 class="text-[#111111] dark:text-white mb-2" style="font-size:1rem;font-weight:800">{{ card.title }}</h3>
                <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.9rem;line-height:1.72">{{ card.desc }}</p>
              </div>
            </article>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  </div>
</template>

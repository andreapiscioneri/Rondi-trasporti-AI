<script setup lang="ts">
import { ArrowRight, BriefcaseBusiness, ChevronDown, MapPin, Rocket, Star, Users } from 'lucide-vue-next'

const RED = '#E5322D'
const { t } = useLang()
const pg = computed(() => t.value.lavoraPage)

const HERO_IMG = 'https://images.unsplash.com/photo-1768554058655-ffc14e476826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'
const OFFICE_IMG = 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900'

const TEAM_STATS = [
  { label: 'Posizioni aperte', value: '12+' },
  { label: 'Tempo medio risposta', value: '48h' },
  { label: 'Percorsi di crescita', value: '100%' },
]

const submitted = ref(false)
const openCards = ref<Record<string, boolean>>({})

const toggleCard = (title: string) => {
  openCards.value[title] = !openCards.value[title]
}

const onSubmit = (e: Event) => {
  e.preventDefault()
  submitted.value = true
}
</script>

<template>
  <div>
    <section class="relative overflow-hidden" style="min-height:560px">
      <div class="absolute inset-0">
        <img :src="HERO_IMG" alt="Careers" class="w-full h-full object-cover" style="filter:brightness(0.3)">
        <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent" />
      </div>
      <div class="absolute left-0 top-0 bottom-0 w-1" :style="{ background: RED }" />
      <div class="relative z-10 flex flex-col justify-end py-24 lg:py-36 px-6 sm:px-10 lg:px-16">
        <div class="max-w-[1440px] mx-auto w-full">
          <AnimateOnScroll variant="fadeUp">
            <span class="block mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ pg.hero.tag }}</span>
            <h1 class="text-white mb-4 max-w-2xl" style="font-size:clamp(2.5rem,5vw,4rem);font-weight:900;line-height:1.05">{{ pg.hero.title }}</h1>
            <p class="text-white/60 max-w-lg" style="font-size:clamp(1rem,1.5vw,1.125rem);line-height:1.65">{{ pg.hero.subtitle }}</p>
          </AnimateOnScroll>
          <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            <AnimateOnScroll v-for="(stat, i) in TEAM_STATS" :key="stat.label" variant="fadeUp" :delay="i * 0.08">
              <div class="px-4 py-4 bg-white/10 backdrop-blur border border-white/15">
                <p class="text-white" style="font-size:1.25rem;font-weight:900">{{ stat.value }}</p>
                <p class="text-white/70" style="font-size:0.8rem;font-weight:500">{{ stat.label }}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
      <div class="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimateOnScroll v-for="(perk, i) in pg.perks" :key="perk.title" variant="fadeUp" :delay="i * 0.08">
          <div class="p-6 border border-black/10 dark:border-white/10 flex flex-col gap-4 hover:border-[#E5322D]/30 transition-colors h-full group">
            <div class="w-10 h-10 flex items-center justify-center" :style="{ background: RED }"><Star :size="18" class="text-white" /></div>
            <h3 class="text-[#111111] dark:text-white" style="font-size:1rem;font-weight:700">{{ perk.title }}</h3>
            <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.875rem;line-height:1.7">{{ perk.desc }}</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    <section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#F5F5F5] dark:bg-[#111111]">
      <div class="max-w-[1440px] mx-auto">
        <AnimateOnScroll class="mb-12" variant="fadeUp">
          <span class="block mb-3" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ pg.positions.title }}</span>
          <h2 class="text-[#111111] dark:text-white" style="font-size:clamp(2rem,3.5vw,2.5rem);font-weight:900">{{ pg.positions.title }}</h2>
        </AnimateOnScroll>
        <div class="flex flex-col gap-3">
          <div v-for="item in pg.positions.items" :key="item.title" class="border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111]">
            <button class="w-full flex items-start gap-4 p-6 text-left" @click="toggleCard(item.title)">
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-3 mb-2">
                  <span class="px-2 py-0.5 text-white" :style="{ background: RED, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }">{{ item.type }}</span>
                  <span class="flex items-center gap-1 text-[#666666] dark:text-[#999999]" style="font-size:0.75rem"><MapPin :size="12" :style="{ color: RED }" /> {{ item.location }}</span>
                </div>
                <h3 class="text-[#111111] dark:text-white" style="font-size:1rem;font-weight:700">{{ item.title }}</h3>
              </div>
              <ChevronDown :size="18" class="transition-transform" :style="{ transform: openCards[item.title] ? 'rotate(180deg)' : 'rotate(0)' }" />
            </button>
            <div v-if="openCards[item.title]" class="px-6 pb-6 flex flex-col gap-4">
              <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.9375rem;line-height:1.65">{{ item.desc }}</p>
              <button class="self-start inline-flex items-center gap-2 px-5 py-2.5 text-white" :style="{ background: RED, fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }">{{ pg.positions.apply }} <ArrowRight :size="14" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-[#FDF3F2] dark:bg-[#151010]">
      <div class="max-w-[1440px] mx-auto">
        <h2 class="text-[#111111] dark:text-white mb-10" style="font-size:clamp(1.5rem,3vw,2.15rem);font-weight:900">Processo di selezione rapido e trasparente</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="relative p-6 bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10">
            <span class="absolute top-4 right-4 text-[#E5322D]/20" style="font-size:2rem;font-weight:900">01</span>
            <div class="w-10 h-10 mb-4 flex items-center justify-center text-white" :style="{ background: RED }"><BriefcaseBusiness :size="18" /></div>
            <h3 class="text-[#111111] dark:text-white mb-2" style="font-size:1rem;font-weight:800">Candidatura</h3>
            <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.9rem;line-height:1.65">Invii il CV e ci racconti il tuo profilo in pochi minuti.</p>
          </div>
          <div class="relative p-6 bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10">
            <span class="absolute top-4 right-4 text-[#E5322D]/20" style="font-size:2rem;font-weight:900">02</span>
            <div class="w-10 h-10 mb-4 flex items-center justify-center text-white" :style="{ background: RED }"><Users :size="18" /></div>
            <h3 class="text-[#111111] dark:text-white mb-2" style="font-size:1rem;font-weight:800">Colloquio</h3>
            <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.9rem;line-height:1.65">Confronto diretto con HR e responsabile di funzione.</p>
          </div>
          <div class="relative p-6 bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10">
            <span class="absolute top-4 right-4 text-[#E5322D]/20" style="font-size:2rem;font-weight:900">03</span>
            <div class="w-10 h-10 mb-4 flex items-center justify-center text-white" :style="{ background: RED }"><Rocket :size="18" /></div>
            <h3 class="text-[#111111] dark:text-white mb-2" style="font-size:1rem;font-weight:800">Onboarding</h3>
            <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.9rem;line-height:1.65">Ingresso strutturato con tutor e piano di crescita.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
      <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <AnimateOnScroll variant="fadeLeft">
          <span class="block mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ pg.form.title }}</span>
          <h2 class="text-[#111111] dark:text-white mb-4" style="font-size:clamp(1.75rem,3vw,2.25rem);font-weight:900">{{ pg.form.title }}</h2>
          <p class="text-[#666666] dark:text-[#999999] mb-8">{{ pg.form.subtitle }}</p>
          <div class="overflow-hidden" style="aspect-ratio:4/3"><img :src="OFFICE_IMG" alt="Office" class="w-full h-full object-cover"></div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeRight" :delay="0.1">
          <div v-if="submitted" class="flex flex-col items-start gap-4 py-12">
            <div class="w-12 h-12 flex items-center justify-center" :style="{ background: RED }"><ArrowRight :size="24" class="text-white" /></div>
            <h3 class="text-[#111111] dark:text-white" style="font-size:1.5rem;font-weight:900">Candidatura inviata!</h3>
            <p class="text-[#666666] dark:text-[#999999]">Ti risponderemo il prima possibile. Grazie per il tuo interesse.</p>
          </div>
          <form v-else class="flex flex-col gap-5" @submit="onSubmit">
            <div v-for="field in ['name', 'email', 'phone', 'position']" :key="field" class="flex flex-col gap-1.5">
              <label class="text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.form[field as keyof typeof pg.form] }}</label>
              <input :type="field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'" :required="field !== 'phone'" class="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 focus:border-[#E5322D] focus:outline-none">
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.form.message }}</label>
              <textarea rows="4" class="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 focus:border-[#E5322D] focus:outline-none resize-none" />
            </div>
            <label class="flex items-start gap-3 cursor-pointer"><input type="checkbox" required class="mt-1 accent-[#E5322D]"><span class="text-[#666666] dark:text-[#999999]" style="font-size:0.8125rem">{{ pg.form.privacy }}</span></label>
            <button type="submit" class="inline-flex items-center gap-2 px-6 py-3.5 text-white self-start" :style="{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }">{{ pg.form.submit }} <ArrowRight :size="16" /></button>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  </div>
</template>

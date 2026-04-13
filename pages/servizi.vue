<script setup lang="ts">
import { ArrowRight, CheckCircle2, Globe, Maximize2, Package, Truck, Wrench } from 'lucide-vue-next'
import { buildGeoLocalPath, GEO_CITIES } from '~/shared/local-seo'

const { t } = useLang()

useSeo({
  title: 'Servizi di Trasporto e Logistica',
  description: 'Trasporto nazionale e internazionale, carichi eccezionali, gru fino a 1000t e logistica integrata. Scopri tutti i servizi Trasporti Rondi.',
  path: '/servizi',
  jsonLd: [
    buildServiceSchema('Trasporto Nazionale', 'Servizi di trasporto merci su tutto il territorio italiano con flotta moderna e tracciamento in tempo reale.'),
    buildServiceSchema('Trasporto Internazionale', 'Rotte consolidate verso 30+ paesi europei con gestione interna della documentazione doganale.'),
    buildFaqSchema([
      {
        question: 'Quali servizi offre Trasporti Rondi?',
        answer: 'Offriamo trasporti nazionali e internazionali, trasporti eccezionali, gru e movimentazioni, logistica e dogana.',
      },
      {
        question: 'In quali aree operate?',
        answer: 'Operiamo in tutta Italia e su tratte internazionali europee, con pagine locali dedicate per le principali aree operative.',
      },
      {
        question: 'Come posso richiedere un preventivo?',
        answer: 'Puoi usare la pagina Preventivo: il team commerciale prende in carico la richiesta con piano operativo dedicato.',
      },
    ]),
    buildBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Servizi', href: '/servizi' }]),
  ],
})

const serviceIcons = [Truck, Globe, Maximize2, Wrench, Package]

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
]

const GEO_SERVICE_SLUGS = [
  'trasporti-nazionali',
  'trasporti-internazionali',
  'trasporti-eccezionali',
  'gru-movimentazioni',
  'logistica-dogana',
]

const SERVICE_DETAIL_PATHS = [
  '/trasporto-standard',
  '/trasporto-internazionale',
  '/trasporto-eccezionale',
  '/noleggio-mezzi-gruati',
  '/soluzioni-logistiche',
]

function serviceDetailPathByIndex(index: number) {
  return SERVICE_DETAIL_PATHS[index] || '/servizi'
}

function geoServicePathByIndex(index: number, citySlug: string) {
  const serviceSlug = GEO_SERVICE_SLUGS[index] || GEO_SERVICE_SLUGS[0]
  return buildGeoLocalPath(serviceSlug, citySlug)
}

const heroData = computed(() => ({
  image: 'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400',
  alt: t.value.serviziPage.hero.title,
  tag: t.value.serviziPage.hero.tag,
  title: t.value.serviziPage.hero.title,
  subtitle: t.value.serviziPage.hero.subtitle,
}))

const pageFaqItems = [
  {
    question: 'Quali servizi offre Trasporti Rondi?',
    answer: 'Offriamo trasporti nazionali e internazionali, trasporti eccezionali, gru e movimentazioni, logistica e dogana.',
  },
  {
    question: 'In quali aree operate?',
    answer: 'Operiamo in tutta Italia e su tratte internazionali europee, con pagine locali dedicate per le principali aree operative.',
  },
  {
    question: 'Come posso richiedere un preventivo?',
    answer: 'Puoi usare la pagina Preventivo: il team commerciale prende in carico la richiesta con piano operativo dedicato.',
  },
]
</script>

<template>
  <div>
    <PageHeroBanner :hero="heroData" />

    <div class="sticky top-[82px] z-30 bg-white/80 dark:bg-black/70 border-b border-black/10 dark:border-white/10 overflow-x-auto backdrop-blur-xl">
      <div class="section-shell px-4 sm:px-6 lg:px-10 flex gap-2 py-3 whitespace-nowrap">
        <a
          v-for="(item, i) in t.serviziPage.items"
          :key="item.id"
          :href="`#${item.id}`"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[#555555] dark:text-[#999999] hover:text-[#111111] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 transition-all"
          style="font-size: 0.79rem; font-weight: 600"
        >
          <component :is="serviceIcons[i]" :size="14" style="color: #E5322D" />
          {{ item.tag }}
        </a>
      </div>
    </div>

    <section
      v-for="(item, i) in t.serviziPage.items"
      :id="item.id"
      :key="item.id"
      :class="`page-section ${i % 2 === 0 ? 'page-section--light' : 'page-section--soft'}`"
    >
      <div class="section-shell">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="relative overflow-hidden group" :class="i % 2 === 1 ? 'lg:order-2' : ''">
            <div class="overflow-hidden rounded-[2rem] shadow-[0_28px_70px_rgba(0,0,0,0.14)]" style="aspect-ratio: 4/3">
              <img
                :src="SERVICE_IMAGES[i]"
                :alt="item.tag"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
            </div>
            <div class="absolute -bottom-4 left-6 hidden lg:block px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/80 border border-black/10 dark:border-white/10 text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#E5322D] backdrop-blur-md">
              {{ item.tag }}
            </div>
          </div>

          <div :class="i % 2 === 1 ? 'lg:order-1' : ''">
            <span
              class="block mb-3"
              style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #E5322D"
            >
              {{ item.tag }}
            </span>
            <h2
              class="text-[#111111] dark:text-white mb-4 headline-balance"
              style="font-size: clamp(1.75rem, 3vw, 2.65rem); font-weight: 800; line-height: 1.08"
            >
              {{ item.title }}
            </h2>
            <p
              class="text-[#666666] dark:text-[#999999] mb-8"
              style="font-size: clamp(1rem, 1.2vw, 1.0625rem); font-weight: 500; line-height: 1.78"
            >
              {{ item.desc }}
            </p>
            <div class="flex flex-col gap-3 mb-8">
              <div v-for="feat in item.features" :key="feat" class="flex items-start gap-3">
                <CheckCircle2 :size="18" style="color: #E5322D; flex-shrink: 0; margin-top: 2px" />
                <span class="text-[#444444] dark:text-[#CCCCCC]" style="font-size: 0.9375rem; font-weight: 500; line-height: 1.55">
                  {{ feat }}
                </span>
              </div>
            </div>
            <div class="flex flex-wrap gap-3">
              <NuxtLink
                :to="serviceDetailPathByIndex(i)"
                class="inline-flex items-center gap-2 px-6 py-3 border border-black/15 dark:border-white/20 text-[#111111] dark:text-white transition-all hover:border-[#E5322D]/40 hover:text-[#E5322D] rounded-full"
                style="font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase"
              >
                Scopri servizio
                <ArrowRight :size="16" />
              </NuxtLink>
              <NuxtLink
                to="/preventivo"
                class="cta-premium inline-flex items-center gap-2 px-6 py-3 text-white transition-all hover:gap-3 rounded-full"
                style="background: #E5322D; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase"
              >
                {{ t.serviziPage.cta }}
                <ArrowRight :size="16" />
              </NuxtLink>
            </div>

            <div class="mt-6 flex flex-wrap gap-2">
              <NuxtLink
                v-for="city in GEO_CITIES"
                :key="`${item.id}-${city.slug}`"
                :to="geoServicePathByIndex(i, city.slug)"
                class="rounded-full border border-black/15 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#444444] transition-colors hover:border-[#E5322D]/40 hover:text-[#E5322D] dark:border-white/20 dark:text-[#cccccc]"
              >
                {{ item.tag }} · {{ city.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section page-section--light border-t border-black/10 dark:border-white/10">
      <div class="section-shell max-w-4xl">
        <AnimateOnScroll variant="fadeUp" class="mb-8">
          <span class="block mb-3 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#E5322D]">FAQ</span>
          <h2 class="headline-balance text-[#111111] dark:text-white" style="font-size:clamp(1.7rem,3vw,2.35rem);font-weight:800">Domande frequenti sui servizi</h2>
        </AnimateOnScroll>
        <div class="space-y-3">
          <AnimateOnScroll v-for="(item, i) in pageFaqItems" :key="item.question" variant="fadeUp" :delay="i * 0.05">
            <div class="rounded-[1.1rem] border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#111111]">
              <h3 class="mb-2 text-[0.95rem] font-bold text-[#111111] dark:text-white">{{ item.question }}</h3>
              <p class="text-[0.88rem] leading-7 text-[#666666] dark:text-[#b3b3b3]">{{ item.answer }}</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  </div>
</template>

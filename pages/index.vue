<script setup lang="ts">
import { ArrowRight, Building2, Factory, Globe, Maximize2, Package, Train, Truck, Wrench } from 'lucide-vue-next'

const { lang, t } = useLang()
const localePath = useLocalePath()

useSeo({
  title: 'Trasporti Rondi — Logistica Industriale dal 1998',
  description: 'Trasporti Rondi: soluzioni logistiche nazionali, internazionali ed eccezionali per l\'industria italiana. Gru fino a 1000t, ADR, ISO 9001.',
  path: '/',
  jsonLd: [buildOrganizationSchema(), buildWebSiteSchema()],
})

const HERO_SLIDES_IT = [
  {
    image: 'https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Dal 1998 · Trasporto Industriale',
    title: 'La Forza del\nTrasporto.',
    subtitle: "Soluzioni logistiche nazionali, internazionali ed eccezionali per l'industria italiana.",
    cta: 'Richiedi Preventivo',
    ctaHref: '/preventivo',
    ctaSecondary: 'Scopri i Servizi',
    ctaSecondaryHref: '/servizi',
  },
  {
    image: 'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Trasporti Internazionali · 30+ Paesi',
    title: 'Oltre i Confini,\ncon Precisione.',
    subtitle: 'Rotte consolidate verso oltre 30 paesi con gestione interna della documentazione doganale.',
    cta: 'Scopri il Servizio',
    ctaHref: '/trasporto-internazionale',
  },
  {
    image: 'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Gru & Movimentazioni · fino a 1000t',
    title: 'Potenza di\nSollevamento.',
    subtitle: 'Gru fino a 1000 tonnellate, operatori certificati e pianificazione tecnica per ogni intervento.',
    cta: 'Scopri il Servizio',
    ctaHref: '/gru-e-movimentazioni',
  },
  {
    image: 'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Logistica Integrata · Supply Chain',
    title: 'La Tua Supply\nChain, Ottimizzata.',
    subtitle: 'Magazzini certificati, distribuzione last-mile e sdoganamento completo in un unico partner.',
    cta: 'Scopri il Servizio',
    ctaHref: '/soluzioni-logistiche',
  },
]

const HERO_SLIDES_EN = [
  {
    image: 'https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Since 1998 · Industrial Transport',
    title: 'The Power of\nTransport.',
    subtitle: 'National, international and exceptional logistics for Italian industry.',
    cta: 'Get a Quote',
    ctaHref: '/preventivo',
    ctaSecondary: 'Our Services',
    ctaSecondaryHref: '/servizi',
  },
  {
    image: 'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'International Transport · 30+ Countries',
    title: 'Beyond Borders,\nPrecisely.',
    subtitle: 'Established routes to 30+ countries with full in-house customs documentation.',
    cta: 'Discover',
    ctaHref: '/trasporto-internazionale',
  },
  {
    image: 'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Crane & Handling · up to 1000t',
    title: 'Lifting\nPower.',
    subtitle: 'Cranes up to 1000 tonnes, certified operators and technical planning for every operation.',
    cta: 'Discover',
    ctaHref: '/gru-e-movimentazioni',
  },
  {
    image: 'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Integrated Logistics · Supply Chain',
    title: 'Your Supply\nChain, Optimized.',
    subtitle: 'Certified warehouses, last-mile distribution and full customs clearance. One partner.',
    cta: 'Discover',
    ctaHref: '/soluzioni-logistiche',
  },
]

const RED = '#E5322D'
const serviceIcons = [Truck, Globe, Maximize2, Wrench, Package]

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
]

const SUSTAIN_IMG = 'https://images.unsplash.com/photo-1638636206910-49cdd0af6d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900'
const SUSTAIN_SOLAR = 'https://images.unsplash.com/photo-1655300256620-680cb0f1cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
const SUSTAIN_ROAD = 'https://images.unsplash.com/photo-1768323555231-5497afb0b6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
const SUSTAIN_PORT = 'https://images.unsplash.com/photo-1614571272828-2d8289ff8fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'

const INDUSTRY_ITEMS_IT = [
  {
    icon: Building2,
    title: 'Edilizia',
    desc: 'Trasporto e movimentazione di prefabbricati, macchinari e componenti strutturali per cantieri complessi.',
  },
  {
    icon: Factory,
    title: 'Siderurgico',
    desc: 'Gestione operativa di coils, carpenterie e carichi ad alta massa per impianti e acciaierie.',
  },
  {
    icon: Train,
    title: 'Ferroviario',
    desc: 'Supporto a manutenzioni e cantieri ferroviari con mezzi speciali e finestre operative pianificate.',
  },
]

const INDUSTRY_ITEMS_EN = [
  {
    icon: Building2,
    title: 'Construction',
    desc: 'Transport and handling of prefabricated elements, machinery and structural components for complex sites.',
  },
  {
    icon: Factory,
    title: 'Steel Industry',
    desc: 'Operational management for coils, steel structures and high-mass loads for industrial plants.',
  },
  {
    icon: Train,
    title: 'Railway',
    desc: 'Support for rail maintenance and infrastructure projects with dedicated heavy transport operations.',
  },
]

const industrySection = computed(() => ({
  tag: lang.value === 'it' ? 'I settori con cui lavoriamo' : 'Industries we serve',
  title: lang.value === 'it' ? 'Competenze Verticali ad Alta Intensita Operativa' : 'Vertical Expertise for High-Intensity Operations',
  subtitle: lang.value === 'it'
    ? 'Esperienza specializzata nei comparti dove precisione, tempi e sicurezza fanno la differenza.'
    : 'Specialized execution where precision, timing and safety are mission-critical.',
  items: lang.value === 'it' ? INDUSTRY_ITEMS_IT : INDUSTRY_ITEMS_EN,
}))

const slides = computed(() => (lang.value === 'it' ? HERO_SLIDES_IT : HERO_SLIDES_EN))

const statsSectionRef = ref<HTMLElement | null>(null)
const statsParallaxY = ref(0)

onMounted(() => {
  const onScroll = () => {
    if (!statsSectionRef.value) return
    const rect = statsSectionRef.value.getBoundingClientRect()
    const viewport = window.innerHeight || 1
    const progress = (viewport - rect.top) / (viewport + rect.height)
    statsParallaxY.value = Math.max(-24, Math.min(46, progress * 70 - 22))
  }

  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <div>
    <HeroSlideshow :slides="slides" />

    <section class="page-section page-section--light">
      <div class="section-shell">
        <AnimateOnScroll class="mb-12" variant="fadeUp">
          <span class="block mb-3" style="font-size:0.75rem;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#E5322D">{{ t.services.tag }}</span>
          <h2 class="text-[#111111] dark:text-white mb-4 max-w-2xl headline-balance" style="font-size:clamp(2rem,3.5vw,2.6rem);font-weight:800;line-height:1.08">{{ t.services.title }}</h2>
          <p class="text-[#666666] dark:text-[#999999] max-w-xl" style="font-size:clamp(1rem,1.2vw,1.125rem);line-height:1.75">{{ t.services.subtitle }}</p>
        </AnimateOnScroll>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          <AnimateOnScroll
            v-for="(item, i) in t.services.items"
            :key="item.title"
            variant="fadeUp"
            :delay="i * 0.06"
          >
            <div class="hover-lift group flex flex-col rounded-[1.75rem] border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111] overflow-hidden h-full">
              <div class="relative overflow-hidden rounded-t-[1.75rem]" style="aspect-ratio:4/3">
                <img :src="SERVICE_IMAGES[i]" :alt="item.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div class="absolute bottom-3 left-3 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md" style="background:#E5322D">
                  <component :is="serviceIcons[i]" :size="18" class="text-white" />
                </div>
              </div>
              <div class="p-5 flex flex-col gap-3 flex-1">
                <h3 class="text-[#111111] dark:text-white" style="font-size:0.95rem;font-weight:700;line-height:1.35">{{ item.title }}</h3>
                <p class="text-[#666666] dark:text-[#999999] flex-1" style="font-size:0.84rem;line-height:1.7">{{ item.desc }}</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll variant="fadeUp" :delay="0.2" class="mt-10 flex justify-center sm:justify-start">
          <NuxtLink :to="localePath('/servizi')" class="cta-premium inline-flex items-center gap-2 px-6 py-3 border border-black/10 dark:border-white/10 text-[#111111] dark:text-white rounded-full hover:bg-[#E5322D] hover:text-white hover:border-[#E5322D] transition-all duration-300" style="font-size:0.82rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">
            {{ t.services.cta }}
            <ArrowRight :size="16" />
          </NuxtLink>
        </AnimateOnScroll>
      </div>
    </section>

    <section class="page-section page-section--soft">
      <div class="section-shell">
        <AnimateOnScroll variant="fadeUp" class="text-center mb-12">
          <span class="block mb-3" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ industrySection.tag }}</span>
          <h2 class="text-[#111111] dark:text-white mb-4 headline-balance" style="font-size:clamp(2rem,3.4vw,2.6rem);font-weight:800;line-height:1.08">{{ industrySection.title }}</h2>
          <p class="mx-auto max-w-3xl text-[#666666] dark:text-[#999999]" style="font-size:clamp(1rem,1.1vw,1.0625rem);line-height:1.78">{{ industrySection.subtitle }}</p>
        </AnimateOnScroll>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          <AnimateOnScroll
            v-for="(item, i) in industrySection.items"
            :key="item.title"
            variant="fadeUp"
            :delay="i * 0.06"
          >
            <article class="h-full rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111] p-6 lg:p-7 text-center">
              <div class="mx-auto mb-4 h-12 w-12 rounded-full border border-[#E5322D]/25 flex items-center justify-center">
                <component :is="item.icon" :size="24" class="text-[#E5322D]" />
              </div>
              <h3 class="mb-3 text-[#111111] dark:text-white" style="font-size:1.05rem;font-weight:800;line-height:1.25">{{ item.title }}</h3>
              <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.9rem;line-height:1.74">{{ item.desc }}</p>
            </article>
          </AnimateOnScroll>
        </div>
      </div>
    </section>

    <section class="page-section page-section--soft">
      <div class="section-shell grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <AnimateOnScroll variant="fadeLeft">
          <div class="relative flex gap-3">
            <div class="flex-1 overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.18)]" style="aspect-ratio:4/5"><img :src="SUSTAIN_IMG" alt="Green Fleet" class="w-full h-full object-cover"></div>
            <div class="flex flex-col gap-3 w-28 flex-shrink-0 self-end">
              <div class="overflow-hidden rounded-2xl" style="aspect-ratio:3/2"><img :src="SUSTAIN_SOLAR" alt="" class="w-full h-full object-cover"></div>
              <div class="overflow-hidden rounded-2xl" style="aspect-ratio:3/2"><img :src="SUSTAIN_ROAD" alt="" class="w-full h-full object-cover"></div>
              <div class="overflow-hidden rounded-2xl" style="aspect-ratio:3/2"><img :src="SUSTAIN_PORT" alt="" class="w-full h-full object-cover"></div>
            </div>
            <div class="absolute -bottom-4 -left-4 w-20 h-20 hidden lg:block rounded-full" style="background:#E5322D;opacity:0.15" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeRight" :delay="0.15">
          <span class="block mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ t.sustainability.tag }}</span>
          <h2 class="text-[#111111] dark:text-white mb-6 headline-balance" style="font-size:clamp(2rem,3.5vw,2.65rem);font-weight:800;line-height:1.08">{{ t.sustainability.title }}</h2>
          <p class="text-[#555555] dark:text-[#AAAAAA] mb-4" style="font-size:0.875rem;font-weight:700;letter-spacing:0.04em;text-transform:uppercase">{{ t.sustainability.subtitle }}</p>
          <p class="text-[#666666] dark:text-[#999999] mb-8" style="font-size:clamp(1rem,1.2vw,1.0625rem);line-height:1.8">{{ t.sustainability.desc }}</p>
          <p class="text-[#333333] dark:text-[#CCCCCC] mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase">{{ t.sustainability.certTitle }}</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span v-for="cert in t.sustainability.certs" :key="cert" class="px-3 py-1.5 rounded-full border border-black/20 dark:border-white/20 text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700">{{ cert }}</span>
          </div>
          <NuxtLink :to="localePath('/sostenibilita')" class="cta-premium inline-flex items-center gap-2 px-6 py-3 text-white transition-all hover:gap-3 rounded-full" style="background:#E5322D;font-size:0.82rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ t.sustainability.cta }} <ArrowRight :size="16" /></NuxtLink>
        </AnimateOnScroll>
      </div>
    </section>

    <section ref="statsSectionRef" class="page-section page-section--dark relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2200"
          alt=""
          class="h-full w-full object-cover"
          :style="{ transform: `translate3d(0, ${statsParallaxY}px, 0) scale(1.14)`, filter: 'brightness(0.28)' }"
        >
      </div>
      <div class="absolute inset-0 pointer-events-none" style="background:linear-gradient(145deg, rgba(6,6,6,0.86) 0%, rgba(20,20,20,0.62) 45%, rgba(229,50,45,0.38) 100%)" />
      <div class="absolute inset-0 pointer-events-none" style="background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 12.5%)" />
      <div class="section-shell relative z-10">
        <AnimateOnScroll variant="fadeUp" class="text-center mb-14">
          <span class="block mb-3 text-white/30" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase">{{ t.stats.tag }}</span>
          <h2 class="text-white headline-balance" style="font-size:clamp(2rem,3.5vw,2.55rem);font-weight:800;line-height:1.08">{{ t.stats.title }}</h2>
          <div class="mt-4 mx-auto w-12 h-0.5" :style="{ background: RED }" />
        </AnimateOnScroll>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          <StatCounter v-for="item in t.stats.items" :key="item.label" :value="item.value" :label="item.label" />
        </div>
      </div>
    </section>

    <section class="relative page-section overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" alt="" class="w-full h-full object-cover" style="filter:brightness(0.2)">
      </div>
      <div class="absolute inset-0" style="background:linear-gradient(135deg,rgba(229,50,45,0.85) 0%, rgba(0,0,0,0.7) 100%)" />
      <AnimateOnScroll variant="fadeUp" class="relative z-10 section-shell flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h2 class="text-white mb-3 headline-balance" style="font-size:clamp(1.75rem,3vw,2.55rem);font-weight:800;line-height:1.08">{{ t.ctaBanner.title }}</h2>
          <p class="text-white/72" style="font-size:clamp(1rem,1.2vw,1.0625rem);line-height:1.75">{{ t.ctaBanner.subtitle }}</p>
        </div>
        <NuxtLink to="/contatti" class="cta-premium flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#111111] hover:bg-[#F5F5F5] transition-all whitespace-nowrap rounded-full" style="font-size:0.82rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">
          {{ t.ctaBanner.cta }}
          <ArrowRight :size="16" />
        </NuxtLink>
      </AnimateOnScroll>
    </section>
  </div>
</template>

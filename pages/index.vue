<script setup lang="ts">
import { ArrowRight, Globe, Maximize2, Package, Truck, Wrench } from 'lucide-vue-next'

const { lang, t } = useLang()

const HERO_SLIDES_IT = [
  {
    image: 'https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Dal 1998 · Trasporto Industriale',
    title: 'La Forza del\nTrasporto.',
    subtitle: "Soluzioni logistiche nazionali, internazionali ed eccezionali per l'industria italiana.",
    cta: 'Richiedi Preventivo',
    ctaHref: '/contatti',
    ctaSecondary: 'Scopri i Servizi',
    ctaSecondaryHref: '/servizi',
  },
  {
    image: 'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Trasporti Internazionali · 30+ Paesi',
    title: 'Oltre i Confini,\ncon Precisione.',
    subtitle: 'Rotte consolidate verso oltre 30 paesi con gestione interna della documentazione doganale.',
    cta: 'Scopri il Servizio',
    ctaHref: '/servizi#internazionali',
  },
]

const HERO_SLIDES_EN = [
  {
    image: 'https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Since 1998 · Industrial Transport',
    title: 'The Power of\nTransport.',
    subtitle: 'National, international and exceptional logistics for Italian industry.',
    cta: 'Get a Quote',
    ctaHref: '/contatti',
    ctaSecondary: 'Our Services',
    ctaSecondaryHref: '/servizi',
  },
  {
    image: 'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'International Transport · 30+ Countries',
    title: 'Beyond Borders,\nPrecisely.',
    subtitle: 'Established routes to 30+ countries with full in-house customs documentation.',
    cta: 'Discover',
    ctaHref: '/servizi#internazionali',
  },
]

const serviceIcons = [Truck, Globe, Maximize2, Wrench, Package]

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
]

const slides = computed(() => (lang.value === 'it' ? HERO_SLIDES_IT : HERO_SLIDES_EN))
</script>

<template>
  <div>
    <HeroSlideshow :slides="slides" />

    <section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
      <div class="max-w-[1440px] mx-auto">
        <span
          class="block mb-3"
          style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #E5322D"
        >
          {{ t.services.tag }}
        </span>
        <h2
          class="text-[#111111] dark:text-white mb-4 max-w-2xl"
          style="font-size: clamp(2rem, 3.5vw, 2.5rem); font-weight: 900; line-height: 1.15"
        >
          {{ t.services.title }}
        </h2>
        <p
          class="text-[#666666] dark:text-[#999999] max-w-xl mb-12"
          style="font-size: clamp(1rem, 1.2vw, 1.125rem); font-weight: 400; line-height: 1.7"
        >
          {{ t.services.subtitle }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          <div
            v-for="(item, i) in t.services.items"
            :key="item.title"
            class="group flex flex-col border border-black/10 dark:border-white/10 hover:border-[#E5322D]/50 transition-all duration-300 bg-white dark:bg-[#111111] overflow-hidden h-full"
          >
            <div class="relative overflow-hidden" style="aspect-ratio: 4/3">
              <img
                :src="SERVICE_IMAGES[i]"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div class="absolute bottom-3 left-3 w-9 h-9 flex items-center justify-center" style="background: #E5322D">
                <component :is="serviceIcons[i]" :size="18" class="text-white" />
              </div>
            </div>
            <div class="p-5 flex flex-col gap-3 flex-1">
              <h3 class="text-[#111111] dark:text-white" style="font-size: 0.9375rem; font-weight: 700; line-height: 1.3">
                {{ item.title }}
              </h3>
              <p class="text-[#666666] dark:text-[#999999] flex-1" style="font-size: 0.8125rem; font-weight: 400; line-height: 1.65">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-10 flex justify-center sm:justify-start">
          <NuxtLink
            to="/servizi"
            class="inline-flex items-center gap-2 px-6 py-3 border-2 text-[#111111] dark:text-white hover:bg-[#E5322D] hover:text-white hover:border-[#E5322D] transition-all duration-300"
            style="border-color: #111111; font-size: 0.875rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase"
          >
            {{ t.services.cta }}
            <ArrowRight :size="16" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

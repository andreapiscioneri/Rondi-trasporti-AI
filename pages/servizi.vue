<script setup lang="ts">
import { ArrowRight, CheckCircle2, Globe, Maximize2, Package, Truck, Wrench } from 'lucide-vue-next'

const { t } = useLang()

useSeo({
  title: 'Servizi di Trasporto e Logistica',
  description: 'Trasporto nazionale e internazionale, carichi eccezionali, gru fino a 1000t e logistica integrata. Scopri tutti i servizi Trasporti Rondi.',
  path: '/servizi',
  jsonLd: [
    buildServiceSchema('Trasporto Nazionale', 'Servizi di trasporto merci su tutto il territorio italiano con flotta moderna e tracciamento in tempo reale.'),
    buildServiceSchema('Trasporto Internazionale', 'Rotte consolidate verso 30+ paesi europei con gestione interna della documentazione doganale.'),
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
</script>

<template>
  <div>
    <section class="relative page-section page-section--dark overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt=""
          class="w-full h-full object-cover opacity-20 scale-105"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-transparent" />
      </div>
      <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#E5322D]" />
      <div class="section-shell relative z-10">
        <span
          class="block mb-4"
          style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #E5322D"
        >
          {{ t.serviziPage.hero.tag }}
        </span>
        <h1
          class="text-white mb-4 max-w-2xl headline-balance"
          style="font-size: clamp(2.5rem, 5vw, 4.2rem); font-weight: 800; line-height: 1.04; letter-spacing: -0.03em"
        >
          {{ t.serviziPage.hero.title }}
        </h1>
        <p
          class="text-white/60 max-w-lg"
          style="font-size: clamp(1rem, 1.5vw, 1.125rem); font-weight: 500; line-height: 1.72"
        >
          {{ t.serviziPage.hero.subtitle }}
        </p>
      </div>
    </section>

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
          <div class="relative overflow-hidden group">
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

          <div>
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
            <NuxtLink
              to="/contatti"
              class="cta-premium inline-flex items-center gap-2 px-6 py-3 text-white transition-all hover:gap-3 rounded-full"
              style="background: #E5322D; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase"
            >
              {{ t.serviziPage.cta }}
              <ArrowRight :size="16" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

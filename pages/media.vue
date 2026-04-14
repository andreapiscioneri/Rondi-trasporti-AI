<script setup lang="ts">
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next'

const RED = '#E5322D'
const { t } = useLang()
const localePath = useLocalePath()
const pg = computed(() => t.value.mediaPage)

useSeo({
  title: pg.value.seo.title,
  description: pg.value.seo.description,
  path: '/media',
  jsonLd: buildBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Media', href: '/media' }]),
})

const SITE_MEDIA = [
  { title: 'Hero home', source: 'Home', image: 'https://images.pexels.com/photos/30037629/pexels-photo-30037629.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200', alt: 'Hero principale home Trasporti Rondi' },
  { title: 'Hero servizi', source: 'Servizi', image: 'https://images.pexels.com/photos/31723807/pexels-photo-31723807.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200', alt: 'Hero servizi trasporto internazionale' },
  { title: 'Hero gru', source: 'Servizi', image: 'https://images.pexels.com/photos/31049388/pexels-photo-31049388.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200', alt: 'Hero gru e movimentazioni' },
  { title: 'Hero logistica', source: 'Servizi', image: 'https://images.pexels.com/photos/30341205/pexels-photo-30341205.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200', alt: 'Hero logistica integrata' },
  { title: 'Sostenibilità', source: 'Sostenibilità', image: 'https://images.pexels.com/photos/35691079/pexels-photo-35691079.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200', alt: 'Immagine sostenibilità' },
  { title: 'Solar', source: 'Sostenibilità', image: 'https://images.pexels.com/photos/29206500/pexels-photo-29206500.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Impianto fotovoltaico' },
  { title: 'Road', source: 'Sostenibilità', image: 'https://images.pexels.com/photos/5410923/pexels-photo-5410923.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Rete stradale e trasporto' },
  { title: 'Port', source: 'Sostenibilità', image: 'https://images.pexels.com/photos/8783541/pexels-photo-8783541.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Operazioni logistiche portuali' },
  { title: 'Storia 1', source: 'Storia', image: 'https://images.pexels.com/photos/35501717/pexels-photo-35501717.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200', alt: 'Immagine storia aziendale' },
  { title: 'Storia 2', source: 'Storia', image: 'https://images.pexels.com/photos/18468412/pexels-photo-18468412.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Immagine storia 2' },
  { title: 'Storia 3', source: 'Storia', image: 'https://images.pexels.com/photos/13961751/pexels-photo-13961751.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Immagine storia 3' },
  { title: 'Storia 4', source: 'Storia', image: 'https://images.pexels.com/photos/27732803/pexels-photo-27732803.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Immagine storia 4' },
  { title: 'Timeline 1', source: 'Storia', image: 'https://images.pexels.com/photos/31723807/pexels-photo-31723807.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=900', alt: 'Timeline immagine 1' },
  { title: 'Timeline 2', source: 'Storia', image: 'https://images.pexels.com/photos/31049388/pexels-photo-31049388.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=900', alt: 'Timeline immagine 2' },
  { title: 'Timeline 3', source: 'Storia', image: 'https://images.pexels.com/photos/29206500/pexels-photo-29206500.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=900', alt: 'Timeline immagine 3' },
  { title: 'Timeline 4', source: 'Storia', image: 'https://images.pexels.com/photos/30341205/pexels-photo-30341205.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=900', alt: 'Timeline immagine 4' },
  { title: 'Timeline 5', source: 'Storia', image: 'https://images.pexels.com/photos/35691079/pexels-photo-35691079.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=900', alt: 'Timeline immagine 5' },
  { title: 'International 1', source: 'Trasporto internazionale', image: 'https://images.pexels.com/photos/34646235/pexels-photo-34646235.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Trasporto internazionale 1' },
  { title: 'International 2', source: 'Trasporto internazionale', image: 'https://images.pexels.com/photos/28520996/pexels-photo-28520996.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Trasporto internazionale 2' },
  { title: 'International 3', source: 'Trasporto internazionale', image: 'https://images.pexels.com/photos/36878025/pexels-photo-36878025.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Trasporto internazionale 3' },
  { title: 'International intro', source: 'Trasporto internazionale', image: 'https://images.pexels.com/photos/30824313/pexels-photo-30824313.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800', alt: 'Intro trasporto internazionale' },
  { title: 'National 1', source: 'Trasporto nazionale', image: 'https://images.pexels.com/photos/34646235/pexels-photo-34646235.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Trasporto nazionale 1' },
  { title: 'National 2', source: 'Trasporto nazionale', image: 'https://images.pexels.com/photos/12756876/pexels-photo-12756876.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Trasporto nazionale 2' },
  { title: 'National 3', source: 'Trasporto nazionale', image: 'https://images.pexels.com/photos/29399463/pexels-photo-29399463.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Trasporto nazionale 3' },
  { title: 'National 4', source: 'Trasporto nazionale', image: 'https://images.pexels.com/photos/36878025/pexels-photo-36878025.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Trasporto nazionale 4' },
  { title: 'National intro', source: 'Trasporto nazionale', image: 'https://images.pexels.com/photos/31723807/pexels-photo-31723807.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800', alt: 'Intro trasporto nazionale' },
  { title: 'Exception 1', source: 'Trasporto eccezionale', image: 'https://images.pexels.com/photos/28264507/pexels-photo-28264507.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Trasporto eccezionale 1' },
  { title: 'Exception 2', source: 'Trasporto eccezionale', image: 'https://images.pexels.com/photos/34106714/pexels-photo-34106714.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Trasporto eccezionale 2' },
  { title: 'Exception 3', source: 'Trasporto eccezionale', image: 'https://images.pexels.com/photos/27732803/pexels-photo-27732803.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Trasporto eccezionale 3' },
  { title: 'Exception 4', source: 'Trasporto eccezionale', image: 'https://images.pexels.com/photos/18468412/pexels-photo-18468412.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Trasporto eccezionale 4' },
  { title: 'Exception intro', source: 'Trasporto eccezionale', image: 'https://images.pexels.com/photos/13961751/pexels-photo-13961751.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800', alt: 'Intro trasporto eccezionale' },
  { title: 'Handling 1', source: 'Gru e movimentazioni', image: 'https://images.pexels.com/photos/34106714/pexels-photo-34106714.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Gru e movimentazioni 1' },
  { title: 'Handling 2', source: 'Gru e movimentazioni', image: 'https://images.pexels.com/photos/30341205/pexels-photo-30341205.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Gru e movimentazioni 2' },
  { title: 'Handling 3', source: 'Gru e movimentazioni', image: 'https://images.pexels.com/photos/18468412/pexels-photo-18468412.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Gru e movimentazioni 3' },
  { title: 'Handling 4', source: 'Gru e movimentazioni', image: 'https://images.pexels.com/photos/12706241/pexels-photo-12706241.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Gru e movimentazioni 4' },
  { title: 'Handling intro', source: 'Gru e movimentazioni', image: 'https://images.pexels.com/photos/31049388/pexels-photo-31049388.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800', alt: 'Intro gru e movimentazioni' },
  { title: 'Logistics 1', source: 'Soluzioni logistiche', image: 'https://images.pexels.com/photos/27732803/pexels-photo-27732803.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Soluzioni logistiche 1' },
  { title: 'Logistics 2', source: 'Soluzioni logistiche', image: 'https://images.pexels.com/photos/15016531/pexels-photo-15016531.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Soluzioni logistiche 2' },
  { title: 'Logistics 3', source: 'Soluzioni logistiche', image: 'https://images.pexels.com/photos/36878025/pexels-photo-36878025.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Soluzioni logistiche 3' },
  { title: 'Logistics 4', source: 'Soluzioni logistiche', image: 'https://images.pexels.com/photos/30341205/pexels-photo-30341205.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200', alt: 'Soluzioni logistiche 4' },
  { title: 'Logistics intro', source: 'Soluzioni logistiche', image: 'https://images.pexels.com/photos/5860937/pexels-photo-5860937.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800', alt: 'Intro soluzioni logistiche' },
  { title: 'Warehouse', source: 'Contatti', image: 'https://images.pexels.com/photos/12418935/pexels-photo-12418935.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1400', alt: 'Sede e contatti' },
  { title: 'Contacts 1', source: 'Contatti', image: 'https://images.pexels.com/photos/35691079/pexels-photo-35691079.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=900', alt: 'Contatti immagine 1' },
  { title: 'Contacts 2', source: 'Contatti', image: 'https://images.pexels.com/photos/5860937/pexels-photo-5860937.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=900', alt: 'Contatti immagine 2' },
  { title: 'Contacts 3', source: 'Contatti', image: 'https://images.pexels.com/photos/12418935/pexels-photo-12418935.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=900', alt: 'Contatti immagine 3' },
  { title: 'Quote', source: 'Preventivo', image: 'https://images.pexels.com/photos/31723807/pexels-photo-31723807.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200', alt: 'Hero preventivo' },
  { title: 'Careers', source: 'Lavora con noi', image: 'https://images.pexels.com/photos/7019213/pexels-photo-7019213.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200', alt: 'Hero lavora con noi' },
  { title: 'Office', source: 'Lavora con noi', image: 'https://images.pexels.com/photos/4481256/pexels-photo-4481256.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1400', alt: 'Office lavora con noi' },
]

const heroData = computed(() => ({
  image: SITE_MEDIA[0].image,
  alt: SITE_MEDIA[0].alt,
  tag: pg.value.hero.tag,
  title: pg.value.hero.title,
  subtitle: pg.value.hero.subtitle,
}))

const galleryItems = SITE_MEDIA.map(item => ({
  image: item.image,
  alt: item.alt,
  title: item.title,
}))

const { activeIndex, open } = useLightbox()
</script>

<template>
  <div>
    <PageHeroBanner :hero="heroData" />

    <section class="page-section page-section--light">
      <div class="section-shell grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <AnimateOnScroll variant="fadeRight" class="lg:col-span-8">
          <span class="inline-flex items-center gap-2 mb-4 text-[#E5322D]" style="font-size:0.74rem;font-weight:700;letter-spacing:0.18em;text-transform:uppercase">
            <span class="h-px w-7 bg-[#E5322D]" />
            {{ pg.hero.tag }}
          </span>
          <h2 class="headline-balance text-[#111111] dark:text-white mb-5" style="font-size:clamp(1.8rem,3vw,2.7rem);font-weight:800;line-height:1.08">
            {{ pg.intro.title }}
          </h2>
          <p class="text-[#666666] dark:text-[#A3A3A3] max-w-4xl" style="font-size:clamp(1rem,1.2vw,1.08rem);line-height:1.82">
            {{ pg.intro.desc }}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeLeft" class="lg:col-span-4">
          <div class="rounded-[1.5rem] bg-[#FAFAFA] dark:bg-[#111111] p-6">
            <p class="text-[#111111] dark:text-white mb-4" style="font-size:0.74rem;font-weight:800;letter-spacing:0.14em;text-transform:uppercase">{{ pg.focusLabel }}</p>
            <ul class="space-y-3">
              <li v-for="item in pg.highlights" :key="item" class="flex items-start gap-2 text-[#555555] dark:text-[#B5B5B5]" style="font-size:0.9rem;line-height:1.6">
                <CheckCircle2 :size="16" class="mt-0.5 flex-shrink-0" :style="{ color: RED }" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    <section class="mt-10 px-4 pb-16 pt-4 sm:mt-10 sm:px-6 sm:pt-6 lg:px-10">
      <div class="mx-auto w-full max-w-[1600px]">
        <div class="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div class="max-w-3xl space-y-4">
            <p class="inline-flex items-center gap-2 text-[#E5322D]" style="font-size:0.72rem;font-weight:800;letter-spacing:0.18em;text-transform:uppercase">
              <span class="h-px w-7 bg-[#E5322D]" />
              {{ pg.archive.eyebrow }}
            </p>
            <h3 class="headline-balance text-[#111111] dark:text-white" style="font-size:clamp(1.4rem,2.6vw,2rem);font-weight:800">{{ pg.archive.title }}</h3>
          </div>
          <NuxtLink :to="localePath('/account')" class="inline-flex items-center gap-2 rounded-full border border-[#E5322D]/25 px-5 py-2.5 text-[#E5322D] transition-colors hover:bg-[#E5322D] hover:text-white" style="font-size:0.78rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase">
            {{ pg.archive.cta }}
            <ArrowRight :size="14" />
          </NuxtLink>
        </div>

        <div class="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 [column-fill:_balance]">
          <button
            v-for="(item, index) in SITE_MEDIA"
            :key="`${item.title}-${index}`"
            class="group mb-4 inline-block w-full overflow-hidden rounded-[1.25rem] bg-transparent text-left outline-none focus-visible:ring-2 focus-visible:ring-[#E5322D]"
            @click="open(index)"
          >
            <div class="relative overflow-hidden rounded-[1.25rem]">
              <img
                :src="item.image"
                :alt="item.alt"
                class="block w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <p class="mb-1 text-white" style="font-size:1rem;font-weight:800;line-height:1.15">{{ item.title }}</p>
                <p class="text-white/68" style="font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase">{{ item.source }}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>

    <section class="page-section page-section--light">
      <AnimateOnScroll variant="fadeUp" class="section-shell flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h2 class="text-[#111111] dark:text-white mb-2 headline-balance" style="font-size:clamp(1.75rem,3vw,2.3rem);font-weight:800">
            {{ pg.closing.title }}
          </h2>
          <p class="text-[#666666] dark:text-[#999999]" style="font-size:1rem;line-height:1.75">
            {{ pg.closing.desc }}
          </p>
        </div>
        <NuxtLink
          :to="localePath('/contatti')"
          class="cta-premium inline-flex items-center gap-2 px-8 py-4 text-white rounded-full"
          :style="{ background: RED, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }"
        >
          {{ pg.closing.cta }}
          <ArrowRight :size="16" />
        </NuxtLink>
      </AnimateOnScroll>
    </section>

    <ImageLightbox v-model="activeIndex" :items="galleryItems" />
  </div>
</template>

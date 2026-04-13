<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const RED = '#E5322D'
const { t } = useLang()

useSeo({
  title: 'La Nostra Storia — Dal 1998',
  description: 'Oltre 25 anni di trasporto industriale. Scopri la storia di Trasporti Rondi: dalle origini fino a diventare leader nella logistica eccezionale italiana.',
  path: '/storia',
  jsonLd: buildBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Storia', href: '/storia' }]),
})
const pg = computed(() => t.value.storiaPage)

const STORIA_IMG_1 = 'https://images.unsplash.com/photo-1614571272828-2d8289ff8fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
const STORIA_IMG_2 = 'https://images.unsplash.com/photo-1638636206910-49cdd0af6d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
const STORIA_IMG_3 = 'https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
const STORIA_IMG_4 = 'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'

const STORIA_GALLERY = [
  { src: STORIA_IMG_3, alt: '25 anni di crescita operativa' },
  { src: STORIA_IMG_1, alt: 'Flotta storica' },
  { src: STORIA_IMG_2, alt: 'Logistica moderna' },
  { src: STORIA_IMG_4, alt: 'Crescita operativa' },
]

const selectedStoryImage = ref(0)

const TIMELINE_IMAGES = [
  'https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1655300256620-680cb0f1cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1638636206910-49cdd0af6d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1614571272828-2d8289ff8fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
]

const heroData = computed(() => ({
  image: 'https://images.unsplash.com/photo-1614571272828-2d8289ff8fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2400',
  alt: pg.value.hero.title,
  tag: pg.value.hero.tag,
  title: pg.value.hero.title,
  subtitle: pg.value.hero.subtitle,
}))

</script>

<template>
  <div>
    <PageHeroBanner :hero="heroData" />

    <section class="page-section page-section--light border-b border-black/10 dark:border-white/10 overflow-hidden">
      <div class="section-shell grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <AnimateOnScroll variant="fadeLeft">
          <div class="relative flex gap-3">
            <div class="flex-1 overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.18)]" style="aspect-ratio:4/5">
              <Transition
                mode="out-in"
                enter-active-class="transition-all duration-500 ease-out"
                leave-active-class="transition-all duration-350 ease-in"
                enter-from-class="opacity-0 scale-[1.02]"
                leave-to-class="opacity-0 scale-[0.985]"
              >
                <img
                  :key="STORIA_GALLERY[selectedStoryImage].src"
                  :src="STORIA_GALLERY[selectedStoryImage].src"
                  :alt="STORIA_GALLERY[selectedStoryImage].alt"
                  class="w-full h-full object-cover"
                >
              </Transition>
            </div>
            <div class="flex flex-col gap-3 w-28 flex-shrink-0 self-end">
              <button
                v-for="(thumb, index) in STORIA_GALLERY"
                :key="thumb.src"
                class="group overflow-hidden rounded-2xl border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5322D]"
                :class="selectedStoryImage === index
                  ? 'border-[#E5322D] ring-2 ring-[#E5322D]/35 shadow-[0_12px_24px_rgba(229,50,45,0.2)]'
                  : 'border-black/10 dark:border-white/10 opacity-85 hover:opacity-100'"
                style="aspect-ratio:3/2"
                :aria-label="`Mostra immagine storia ${index + 1}`"
                :aria-pressed="selectedStoryImage === index"
                @click="selectedStoryImage = index"
              >
                <img :src="thumb.src" :alt="thumb.alt" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              </button>
            </div>
            <div class="absolute -bottom-4 -left-4 w-20 h-20 hidden lg:block rounded-full" style="background:#E5322D;opacity:0.15" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeRight" :delay="0.15">
          <span class="block mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">Dal 1998</span>
          <h2 class="text-[#111111] dark:text-white mb-6 headline-balance" style="font-size:clamp(2rem,3.5vw,2.65rem);font-weight:800;line-height:1.08">25 anni di crescita operativa</h2>
          <p class="text-[#555555] dark:text-[#AAAAAA] mb-4" style="font-size:0.875rem;font-weight:700;letter-spacing:0.04em;text-transform:uppercase">Una storia costruita su continuita, specializzazione e sviluppo progressivo.</p>
          <p class="text-[#666666] dark:text-[#999999] mb-8" style="font-size:clamp(1rem,1.2vw,1.0625rem);line-height:1.8">Dalle prime tratte nazionali fino alle operazioni eccezionali internazionali: immagini e tappe che raccontano l'evoluzione di Trasporti Rondi.</p>
          <p class="text-[#333333] dark:text-[#CCCCCC] mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase">Le tappe chiave</p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span class="px-3 py-1.5 rounded-full border border-black/20 dark:border-white/20 text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700">Espansione Italia -> Europa</span>
            <span class="px-3 py-1.5 rounded-full border border-black/20 dark:border-white/20 text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700">Flotta specializzata</span>
            <span class="px-3 py-1.5 rounded-full border border-black/20 dark:border-white/20 text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700">Team operativo certificato</span>
          </div>
          <NuxtLink to="#timeline" class="cta-premium inline-flex items-center gap-2 px-6 py-3 text-white transition-all hover:gap-3 rounded-full" style="background:#E5322D;font-size:0.82rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">Scopri la timeline <ArrowRight :size="16" /></NuxtLink>
        </AnimateOnScroll>
      </div>
    </section>

    <section class="page-section page-section--soft relative overflow-hidden">
      <div id="timeline" class="section-shell">
        <AnimateOnScroll variant="fadeUp" class="mb-12 text-center">
          <h2 class="text-[#111111] dark:text-white headline-balance" style="font-size:clamp(1.7rem,3vw,2.6rem);font-weight:800">Timeline <span class="ml-2" :style="{ color: RED }">1998 -> 2024</span></h2>
        </AnimateOnScroll>

        <div class="relative">
          <div class="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-black/12 dark:bg-white/14" />
          <div class="md:hidden absolute left-[0.62rem] top-2 bottom-2 w-px bg-black/12 dark:bg-white/14" />

          <div class="space-y-8 md:space-y-10">
            <AnimateOnScroll
              v-for="(item, i) in pg.timeline"
              :key="item.year"
              variant="fadeUp"
              :delay="i * 0.03"
            >
              <article class="relative grid grid-cols-1 md:grid-cols-2 md:gap-14">
                <div
                  class="hidden md:block"
                  :class="i % 2 === 0 ? '' : 'md:invisible'"
                >
                  <div class="overflow-hidden rounded-[1.35rem] border border-black/10 bg-white dark:border-white/10 dark:bg-[#111111]">
                    <div class="overflow-hidden" style="aspect-ratio:16/10"><img :src="TIMELINE_IMAGES[i]" :alt="item.year" class="w-full h-full object-cover"></div>
                    <div class="p-5">
                      <p class="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.14em]" :style="{ color: RED }">{{ item.year }}</p>
                      <h3 class="mb-2 text-[#111111] dark:text-white" style="font-size:1.02rem;font-weight:800;line-height:1.2">{{ item.title }}</h3>
                      <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.86rem;line-height:1.72">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>

                <div
                  class="hidden md:block"
                  :class="i % 2 === 1 ? '' : 'md:invisible'"
                >
                  <div class="overflow-hidden rounded-[1.35rem] border border-black/10 bg-white dark:border-white/10 dark:bg-[#111111]">
                    <div class="overflow-hidden" style="aspect-ratio:16/10"><img :src="TIMELINE_IMAGES[i]" :alt="item.year" class="w-full h-full object-cover"></div>
                    <div class="p-5">
                      <p class="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.14em]" :style="{ color: RED }">{{ item.year }}</p>
                      <h3 class="mb-2 text-[#111111] dark:text-white" style="font-size:1.02rem;font-weight:800;line-height:1.2">{{ item.title }}</h3>
                      <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.86rem;line-height:1.72">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>

                <div class="md:hidden pl-8">
                  <div class="overflow-hidden rounded-[1.1rem] border border-black/10 bg-white dark:border-white/10 dark:bg-[#111111]">
                    <div class="overflow-hidden" style="aspect-ratio:16/9"><img :src="TIMELINE_IMAGES[i]" :alt="item.year" class="w-full h-full object-cover"></div>
                    <div class="p-4">
                      <p class="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.14em]" :style="{ color: RED }">{{ item.year }}</p>
                      <h3 class="mb-2 text-[#111111] dark:text-white" style="font-size:0.98rem;font-weight:800;line-height:1.2">{{ item.title }}</h3>
                      <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.84rem;line-height:1.68">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>

                <div class="absolute top-6 left-[0.62rem] -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                  <div class="h-3.5 w-3.5 rounded-full border-2 border-white shadow-sm dark:border-[#111111]" :style="{ background: RED }" />
                </div>
              </article>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>

    <section class="relative page-section overflow-hidden">
      <div class="absolute inset-0"><img :src="STORIA_IMG_3" alt="" class="w-full h-full object-cover" style="filter:brightness(0.15)"></div>
      <div class="absolute inset-0 bg-[#0A0A0A]/70" />
      <AnimateOnScroll variant="fadeUp" class="relative z-10 section-shell flex flex-col lg:flex-row items-center justify-between gap-8">
        <h2 class="text-white headline-balance" style="font-size:clamp(1.75rem,3vw,2.55rem);font-weight:800;line-height:1.08">{{ pg.cta }}</h2>
        <NuxtLink to="/lavora-con-noi" class="cta-premium flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 text-white hover:opacity-90 transition-opacity rounded-full" :style="{ background: RED, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }">
          {{ t.nav.lavora }} <ArrowRight :size="16" />
        </NuxtLink>
      </AnimateOnScroll>
    </section>
  </div>
</template>

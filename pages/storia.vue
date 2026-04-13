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
      <div class="section-shell grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        <AnimateOnScroll variant="fadeRight" class="lg:col-span-5">
          <div class="relative overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10" style="aspect-ratio:4/5">
            <img :src="STORIA_IMG_3" alt="Evoluzione della flotta" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/78 via-black/22 to-transparent" />
            <div class="absolute inset-x-0 bottom-0 p-6">
              <p class="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/68">Dal 1998</p>
              <h2 class="headline-balance text-white" style="font-size:clamp(1.5rem,2.3vw,2.2rem);font-weight:800;line-height:1.08">25 anni di crescita operativa</h2>
            </div>
          </div>
        </AnimateOnScroll>

        <div class="grid grid-cols-1 gap-4 lg:col-span-7">
          <AnimateOnScroll variant="fadeLeft" class="rounded-[1.6rem] border border-black/10 dark:border-white/10 bg-white/70 p-6 dark:bg-[#111111]/70">
            <p class="text-[#666666] dark:text-[#999999]" style="font-size:clamp(0.98rem,1.15vw,1.08rem);line-height:1.85">Dalle prime tratte nazionali fino alle operazioni eccezionali internazionali: immagini e tappe che raccontano l'evoluzione di Trasporti Rondi.</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span class="rounded-full border border-black/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#333333] dark:border-white/20 dark:text-[#cccccc]">Espansione Italia -> Europa</span>
              <span class="rounded-full border border-black/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#333333] dark:border-white/20 dark:text-[#cccccc]">Flotta specializzata</span>
              <span class="rounded-full border border-black/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#333333] dark:border-white/20 dark:text-[#cccccc]">Team operativo certificato</span>
            </div>
          </AnimateOnScroll>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AnimateOnScroll variant="fadeUp" :delay="0.06">
              <div class="overflow-hidden rounded-[1.45rem] border border-black/10 dark:border-white/10" style="aspect-ratio:4/3">
                <img :src="STORIA_IMG_1" alt="Flotta storica" class="w-full h-full object-cover">
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" :delay="0.1">
              <div class="overflow-hidden rounded-[1.45rem] border border-black/10 dark:border-white/10" style="aspect-ratio:4/3">
                <img :src="STORIA_IMG_2" alt="Logistica moderna" class="w-full h-full object-cover">
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section page-section--soft relative overflow-hidden">
      <div class="section-shell">
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

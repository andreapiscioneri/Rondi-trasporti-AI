<script setup lang="ts">
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next'

const RED = '#E5322D'
const { t } = useLang()
const localePath = useLocalePath()
const pg = computed(() => t.value.mediaPage)

useSeo({
  title: 'Media',
  description: 'Galleria immagini Trasporti Rondi: trasporti industriali, logistica integrata, sicurezza e operazioni speciali sul campo.',
  path: '/media',
  jsonLd: buildBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Media', href: '/media' }]),
})

const heroData = computed(() => ({
  image: pg.value.gallery[0]?.image || '',
  alt: pg.value.gallery[0]?.alt || 'Media Trasporti Rondi',
  tag: pg.value.hero.tag,
  title: pg.value.hero.title,
  subtitle: pg.value.hero.subtitle,
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
          <div class="rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-[#FAFAFA] dark:bg-[#111111] p-6">
            <p class="text-[#111111] dark:text-white mb-4" style="font-size:0.74rem;font-weight:800;letter-spacing:0.14em;text-transform:uppercase">Focus</p>
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

    <GalleryGrid :items="pg.gallery" @open="open" />

    <section class="page-section page-section--soft">
      <div class="section-shell grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <AnimateOnScroll v-for="(item, index) in pg.gallery" :key="item.title" variant="fadeUp" :delay="index * 0.06">
          <article class="h-full rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111] p-6">
            <p class="text-[#111111] dark:text-white mb-2" style="font-size:1rem;font-weight:700">{{ item.title }}</p>
            <p class="text-[#666666] dark:text-[#A3A3A3]" style="font-size:0.9rem;line-height:1.7">{{ item.desc }}</p>
          </article>
        </AnimateOnScroll>
      </div>
    </section>

    <section class="page-section page-section--light border-t border-black/10 dark:border-white/10">
      <AnimateOnScroll variant="fadeUp" class="section-shell flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h2 class="text-[#111111] dark:text-white mb-2 headline-balance" style="font-size:clamp(1.75rem,3vw,2.3rem);font-weight:800">
            Raccontaci il tuo prossimo progetto
          </h2>
          <p class="text-[#666666] dark:text-[#999999]" style="font-size:1rem;line-height:1.75">
            Il team Rondi e pronto a costruire una soluzione operativa su misura.
          </p>
        </div>
        <NuxtLink
          :to="localePath('/contatti')"
          class="cta-premium inline-flex items-center gap-2 px-8 py-4 text-white rounded-full"
          :style="{ background: RED, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }"
        >
          Contattaci
          <ArrowRight :size="16" />
        </NuxtLink>
      </AnimateOnScroll>
    </section>

    <ImageLightbox
      v-model="activeIndex"
      :items="pg.gallery"
    />
  </div>
</template>

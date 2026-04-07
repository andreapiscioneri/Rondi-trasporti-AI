<script setup lang="ts">
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'

const RED = '#E5322D'
const { t } = useLang()
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

const scrollRef = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

const updateScrollState = () => {
  const el = scrollRef.value
  if (!el) return
  canScrollLeft.value = el.scrollLeft > 20
  canScrollRight.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 20
}

const scrollBy = (dir: 'left' | 'right') => {
  const el = scrollRef.value
  if (!el) return
  el.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' })
}

onMounted(() => {
  if (!scrollRef.value) return
  scrollRef.value.addEventListener('scroll', updateScrollState, { passive: true })
  updateScrollState()
})
</script>

<template>
  <div>
    <section class="bg-white dark:bg-[#0A0A0A] py-20 lg:py-28 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10 overflow-hidden">
      <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll variant="fadeLeft">
          <span class="block mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ pg.hero.tag }}</span>
          <h1 class="text-[#111111] dark:text-white mb-6" style="font-size:clamp(2.5rem,5vw,4rem);font-weight:900;line-height:1.05;letter-spacing:-0.02em">{{ pg.hero.title }}</h1>
          <p class="text-[#666666] dark:text-[#999999]" style="font-size:clamp(1rem,1.5vw,1.125rem);line-height:1.7">{{ pg.hero.subtitle }}</p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeRight" :delay="0.15">
          <div class="grid grid-cols-2 gap-3">
            <div class="overflow-hidden" style="aspect-ratio:1/1"><img :src="STORIA_IMG_1" alt="1998" class="w-full h-full object-cover"></div>
            <div class="overflow-hidden mt-8" style="aspect-ratio:1/1"><img :src="STORIA_IMG_2" alt="2024" class="w-full h-full object-cover"></div>
            <div class="col-span-2 overflow-hidden" style="aspect-ratio:16/7"><img :src="STORIA_IMG_3" alt="Fleet" class="w-full h-full object-cover"></div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    <section class="hidden md:block py-20 lg:py-28 bg-[#F5F5F5] dark:bg-[#111111] relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-10 flex items-center justify-between">
        <h2 class="text-[#111111] dark:text-white" style="font-size:clamp(1.5rem,2.5vw,2rem);font-weight:900">Timeline <span class="ml-3 inline-block" :style="{ color: RED }">1998 -> 2024</span></h2>
        <div class="flex gap-2">
          <button @click="scrollBy('left')" :disabled="!canScrollLeft" class="w-10 h-10 flex items-center justify-center border border-black/20 dark:border-white/20 disabled:opacity-30"><ArrowLeft :size="18" /></button>
          <button @click="scrollBy('right')" :disabled="!canScrollRight" class="w-10 h-10 flex items-center justify-center border border-black/20 dark:border-white/20 disabled:opacity-30"><ArrowRight :size="18" /></button>
        </div>
      </div>

      <div ref="scrollRef" class="overflow-x-auto pb-8" style="scrollbar-width:none">
        <div class="flex items-start px-4 sm:px-6 lg:px-10 gap-0 min-w-max">
          <div v-for="(item, i) in pg.timeline" :key="item.year" class="flex flex-col items-center" style="width:300px">
            <div class="h-52 px-5 flex flex-col justify-end pb-4" :style="{ opacity: i % 2 === 1 ? 1 : 0, pointerEvents: i % 2 === 1 ? 'auto' : 'none' }">
              <template v-if="i % 2 === 1">
                <div class="overflow-hidden mb-3" style="width:80px;height:80px"><img :src="TIMELINE_IMAGES[i]" :alt="item.year" class="w-full h-full object-cover"></div>
                <h3 class="text-[#111111] dark:text-white mb-1" style="font-size:0.875rem;font-weight:700">{{ item.title }}</h3>
                <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.75rem;line-height:1.5">{{ item.desc }}</p>
              </template>
            </div>

            <div class="flex items-center w-full">
              <div class="flex-1 h-px bg-[#CCCCCC] dark:bg-[#444444]" :style="{ opacity: i === 0 ? 0 : 1 }" />
              <div class="flex flex-col items-center flex-shrink-0">
                <div class="w-4 h-4 rounded-full border-2 border-white dark:border-[#111111]" :style="{ background: RED }" />
                <span class="mt-2" :style="{ fontSize: '1.1rem', fontWeight: 900, color: RED }">{{ item.year }}</span>
              </div>
              <div class="flex-1 h-px bg-[#CCCCCC] dark:bg-[#444444]" :style="{ opacity: i === pg.timeline.length - 1 ? 0 : 1 }" />
            </div>

            <div class="h-52 px-5 flex flex-col justify-start pt-4" :style="{ opacity: i % 2 === 0 ? 1 : 0, pointerEvents: i % 2 === 0 ? 'auto' : 'none' }">
              <template v-if="i % 2 === 0">
                <div class="overflow-hidden mb-3" style="width:80px;height:80px"><img :src="TIMELINE_IMAGES[i]" :alt="item.year" class="w-full h-full object-cover"></div>
                <h3 class="text-[#111111] dark:text-white mb-1" style="font-size:0.875rem;font-weight:700">{{ item.title }}</h3>
                <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.75rem;line-height:1.5">{{ item.desc }}</p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="md:hidden bg-[#F5F5F5] dark:bg-[#111111] py-10 px-4">
      <h2 class="mb-8 px-2" :style="{ fontSize: '1.5rem', fontWeight: 900, color: RED }">Timeline</h2>
      <div class="flex flex-col gap-0">
        <div v-for="(item, i) in pg.timeline" :key="item.year" class="flex gap-4 pb-8">
          <div class="flex flex-col items-center flex-shrink-0 pt-1">
            <div class="w-3 h-3 rounded-full" :style="{ background: RED }" />
            <div v-if="i < pg.timeline.length - 1" class="flex-1 w-px mt-2" style="background:#CCCCCC;min-height:40px" />
          </div>
          <div class="flex-1 pb-2">
            <span class="block mb-2" :style="{ fontSize: '1.25rem', fontWeight: 900, color: RED }">{{ item.year }}</span>
            <h3 class="text-[#111111] dark:text-white mb-2" style="font-size:1rem;font-weight:700">{{ item.title }}</h3>
            <p class="text-[#666666] dark:text-[#999999] mb-4" style="font-size:0.875rem;line-height:1.65">{{ item.desc }}</p>
            <div class="overflow-hidden" style="aspect-ratio:16/9"><img :src="TIMELINE_IMAGES[i]" :alt="item.year" class="w-full h-full object-cover"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="hidden md:block py-20 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
      <div class="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AnimateOnScroll v-for="(item, i) in pg.timeline" :key="item.year" variant="fadeUp" :delay="i * 0.06">
          <div class="border border-black/10 dark:border-white/10 flex flex-col hover:border-[#E5322D]/30 transition-colors overflow-hidden group h-full">
            <div class="overflow-hidden" style="aspect-ratio:4/3"><img :src="TIMELINE_IMAGES[i]" :alt="item.year" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"></div>
            <div class="p-5 flex flex-col gap-3 flex-1">
              <span :style="{ fontSize: '1.5rem', fontWeight: 900, color: RED }">{{ item.year }}</span>
              <h3 class="text-[#111111] dark:text-white" style="font-size:0.9375rem;font-weight:700">{{ item.title }}</h3>
              <p class="text-[#666666] dark:text-[#999999] flex-1" style="font-size:0.8125rem;line-height:1.65">{{ item.desc }}</p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    <section class="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div class="absolute inset-0"><img :src="STORIA_IMG_3" alt="" class="w-full h-full object-cover" style="filter:brightness(0.15)"></div>
      <div class="absolute inset-0 bg-[#0A0A0A]/70" />
      <AnimateOnScroll variant="fadeUp" class="relative z-10 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <h2 class="text-white" style="font-size:clamp(1.75rem,3vw,2.5rem);font-weight:900;line-height:1.2">{{ pg.cta }}</h2>
        <NuxtLink to="/lavora-con-noi" class="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 text-white hover:opacity-90 transition-opacity" :style="{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }">
          {{ t.nav.lavora }} <ArrowRight :size="16" />
        </NuxtLink>
      </AnimateOnScroll>
    </section>
  </div>
</template>

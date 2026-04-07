<script setup lang="ts">
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface HeroSlide {
  image: string
  tag: string
  title: string
  subtitle: string
  cta: string
  ctaHref: string
  ctaSecondary?: string
  ctaSecondaryHref?: string
}

const props = defineProps<{
  slides: HeroSlide[]
}>()

const RED = '#E5322D'
const current = ref(0)
const paused = ref(false)

const currentSlide = computed(() => props.slides[current.value])

const next = () => {
  current.value = (current.value + 1) % props.slides.length
}

const prev = () => {
  current.value = (current.value - 1 + props.slides.length) % props.slides.length
}

let intervalId: number | undefined

const startInterval = () => {
  stopInterval()
  intervalId = window.setInterval(() => {
    if (!paused.value) next()
  }, 5500)
}

const stopInterval = () => {
  if (intervalId) {
    window.clearInterval(intervalId)
    intervalId = undefined
  }
}

onMounted(() => startInterval())
onBeforeUnmount(() => stopInterval())
</script>

<template>
  <section
    class="relative w-full overflow-hidden bg-black"
    style="min-height: 100svh; height: 100svh; max-height: 900px"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
  >
    <img
      :src="currentSlide.image"
      :alt="currentSlide.title"
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      style="filter: brightness(0.45)"
    >

    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
    <div class="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
    <div class="absolute left-0 top-0 w-1 h-full bg-[#E5322D]" />

    <div class="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16 pb-24 lg:pb-28">
      <div class="max-w-[1440px] mx-auto w-full">
        <span
          class="inline-flex items-center gap-2 mb-5 text-white/60"
          style="font-size: 0.75rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase"
        >
          <span class="w-6 h-px bg-[#E5322D]" />
          {{ currentSlide.tag }}
        </span>

        <h1
          class="text-white mb-5 max-w-4xl whitespace-pre-line"
          style="font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.03em"
        >
          {{ currentSlide.title }}
        </h1>

        <p
          class="text-white/70 mb-8 max-w-xl"
          style="font-size: clamp(1rem, 1.5vw, 1.125rem); font-weight: 400; line-height: 1.7"
        >
          {{ currentSlide.subtitle }}
        </p>

        <div class="flex flex-wrap gap-3">
          <NuxtLink
            :to="currentSlide.ctaHref"
            class="inline-flex items-center gap-2 px-7 py-3.5 text-white transition-all hover:gap-3"
            :style="{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }"
          >
            {{ currentSlide.cta }}
            <ArrowRight :size="16" />
          </NuxtLink>

          <NuxtLink
            v-if="currentSlide.ctaSecondary && currentSlide.ctaSecondaryHref"
            :to="currentSlide.ctaSecondaryHref"
            class="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 hover:border-white/70 transition-all"
            style="font-size: 0.875rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase"
          >
            {{ currentSlide.ctaSecondary }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 sm:px-10 lg:px-16 pb-7">
      <div class="flex items-center gap-3">
        <button
          v-for="(_, i) in slides"
          :key="i"
          class="group flex items-center gap-2"
          aria-label="Go to slide"
          @click="current = i"
        >
          <div class="relative h-0.5 overflow-hidden bg-white/20 transition-all" :style="{ width: i === current ? '40px' : '16px' }">
            <div
              class="absolute inset-0"
              :class="i === current ? 'bg-[#E5322D]' : 'bg-white/50 group-hover:bg-white/80'"
            />
          </div>
        </button>
      </div>

      <div class="flex gap-2">
        <button
          class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 hover:border-white/50 transition-all"
          aria-label="Previous"
          @click="prev"
        >
          <ChevronLeft :size="18" />
        </button>
        <button
          class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 hover:border-white/50 transition-all"
          aria-label="Next"
          @click="next"
        >
          <ChevronRight :size="18" />
        </button>
      </div>

      <div class="hidden sm:flex items-center gap-1 text-white/40" style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em">
        <span class="text-white">{{ String(current + 1).padStart(2, '0') }}</span>
        <span>/</span>
        <span>{{ String(slides.length).padStart(2, '0') }}</span>
      </div>
    </div>
  </section>
</template>

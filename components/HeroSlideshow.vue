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
  }, 5600)
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
    style="min-height: 100svh; height: 100svh; max-height: 920px"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
  >
    <Transition name="hero-fade" mode="out-in">
      <img
        :key="`img-${current}`"
        :src="currentSlide.image"
        :alt="currentSlide.title"
        class="absolute inset-0 w-full h-full object-cover hero-image-motion"
        style="filter: brightness(0.42)"
      >
    </Transition>

    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none" />
    <div class="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent pointer-events-none" />
    <div class="absolute left-0 top-0 w-1 h-full bg-[#E5322D]" />

    <div class="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16 pb-24 lg:pb-28">
      <div class="max-w-[1440px] mx-auto w-full">
        <Transition name="hero-rise" mode="out-in">
          <div :key="`copy-${current}`">
            <span
              class="inline-flex items-center gap-2 mb-5 text-white/62"
              style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase"
            >
              <span class="w-7 h-px bg-[#E5322D]" />
              {{ currentSlide.tag }}
            </span>

            <h1
              class="text-white mb-5 max-w-4xl whitespace-pre-line headline-balance"
              style="font-size: clamp(2.4rem, 6vw, 5.2rem); font-weight: 800; line-height: 1.02; letter-spacing: -0.03em"
            >
              {{ currentSlide.title }}
            </h1>

            <p
              class="text-white/72 mb-8 max-w-xl"
              style="font-size: clamp(1rem, 1.45vw, 1.13rem); font-weight: 500; line-height: 1.72"
            >
              {{ currentSlide.subtitle }}
            </p>

            <div class="flex flex-wrap gap-3">
              <NuxtLink
                :to="currentSlide.ctaHref"
                data-magnetic
                class="cta-premium inline-flex items-center gap-2 px-7 py-3.5 text-white transition-all hover:gap-3 rounded-full"
                :style="{ background: RED, fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }"
              >
                {{ currentSlide.cta }}
                <ArrowRight :size="16" />
              </NuxtLink>

              <NuxtLink
                v-if="currentSlide.ctaSecondary && currentSlide.ctaSecondaryHref"
                :to="currentSlide.ctaSecondaryHref"
                class="inline-flex items-center gap-2 px-7 py-3.5 border border-white/35 text-white hover:bg-white/10 hover:border-white/65 transition-all rounded-full"
                style="font-size: 0.84rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase"
              >
                {{ currentSlide.ctaSecondary }}
              </NuxtLink>
            </div>
          </div>
        </Transition>
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
          <div class="relative h-0.5 overflow-hidden bg-white/20 transition-all" :style="{ width: i === current ? '44px' : '16px' }">
            <div
              class="absolute inset-0"
              :class="i === current ? 'bg-[#E5322D]' : 'bg-white/50 group-hover:bg-white/80'"
            />
          </div>
        </button>
      </div>

      <div class="flex gap-2">
        <button
          class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 hover:border-white/50 transition-all rounded-full"
          aria-label="Previous"
          @click="prev"
        >
          <ChevronLeft :size="18" />
        </button>
        <button
          class="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 hover:border-white/50 transition-all rounded-full"
          aria-label="Next"
          @click="next"
        >
          <ChevronRight :size="18" />
        </button>
      </div>

      <div class="hidden sm:flex items-center gap-1 text-white/44" style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em">
        <span class="text-white">{{ String(current + 1).padStart(2, '0') }}</span>
        <span>/</span>
        <span>{{ String(slides.length).padStart(2, '0') }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-image-motion {
  animation: heroImageZoom 6s cubic-bezier(0.2, 0.9, 0.25, 1);
}

.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.6s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}

.hero-rise-enter-active,
.hero-rise-leave-active {
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.hero-rise-enter-from,
.hero-rise-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@keyframes heroImageZoom {
  from {
    transform: scale(1.04);
  }
  to {
    transform: scale(1.01);
  }
}
</style>

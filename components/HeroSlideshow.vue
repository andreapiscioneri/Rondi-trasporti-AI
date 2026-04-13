<script setup lang="ts">
/**
 * HeroSlideshow — fullscreen image carousel.
 *
 * Improvements vs v1:
 *  - Title split into words → GSAP stagger animation on each slide change
 *  - Progress bar replaces static dots (more cinematic)
 *  - Tag + subtitle + CTA block animate with a GSAP timeline on enter
 *  - Image zoom on transition preserved (CSS keyframe)
 *  - Pause on hover still works
 */

import { gsap } from 'gsap'
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

const props = defineProps<{ slides: HeroSlide[] }>()
const localePath = useLocalePath()

const RED = '#E5322D'
const current = ref(0)
const paused  = ref(false)

// Progress bar 0→100 within an interval
const progress = ref(0)
const INTERVAL = 5600 // ms
const touchStartX = ref<number | null>(null)
const touchDeltaX = ref(0)

const currentSlide = computed(() => props.slides[current.value])

const preloadSlides = computed(() => props.slides.slice(0, 2))

useHead(() => ({
  link: preloadSlides.value.map((slide, index) => ({
    rel: 'preload',
    as: 'image',
    href: slide.image,
    fetchpriority: index === 0 ? 'high' : 'auto',
  })),
}))

// Split title at newlines, then each line into words
const titleLines = computed(() =>
  currentSlide.value.title.split('\n').map(line =>
    line.trim().split(/\s+/).filter(Boolean),
  ),
)

// ─── GSAP animation refs ──────────────────────────────────────────────────────
const tagRef      = ref<HTMLElement | null>(null)
const titleRef    = ref<HTMLElement | null>(null)
const subtitleRef = ref<HTMLElement | null>(null)
const ctaRef      = ref<HTMLElement | null>(null)

function animateSlideIn() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  if (tagRef.value) {
    tl.fromTo(tagRef.value,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.55 },
      0,
    )
  }

  if (titleRef.value) {
    const words = titleRef.value.querySelectorAll<HTMLElement>('.hero-word')
    tl.fromTo(words,
      { opacity: 0, y: 44, skewY: 2 },
      { opacity: 1, y: 0, skewY: 0, duration: 0.72, stagger: 0.075 },
      0.1,
    )
  }

  if (subtitleRef.value) {
    tl.fromTo(subtitleRef.value,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.6 },
      0.35,
    )
  }

  if (ctaRef.value) {
    tl.fromTo(ctaRef.value,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5 },
      0.48,
    )
  }
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function goTo(index: number) {
  current.value = index
  resetProgress()
}

const next = () => goTo((current.value + 1) % props.slides.length)
const prev = () => goTo((current.value - 1 + props.slides.length) % props.slides.length)

// ─── Progress bar + interval ──────────────────────────────────────────────────
let progressRaf = 0
let startTime   = 0

function resetProgress() {
  progress.value = 0
  startTime = performance.now()
}

function tickProgress(now: number) {
  if (!paused.value) {
    const elapsed = now - startTime
    progress.value = Math.min((elapsed / INTERVAL) * 100, 100)

    if (elapsed >= INTERVAL) {
      next()
      progressRaf = requestAnimationFrame(tickProgress)
      return
    }
  } else {
    // Keep start time synced so pause doesn't skip time
    startTime = performance.now() - (progress.value / 100) * INTERVAL
  }
  progressRaf = requestAnimationFrame(tickProgress)
}

function onTouchStart(event: TouchEvent) {
  touchStartX.value = event.touches[0]?.clientX ?? null
  touchDeltaX.value = 0
}

function onTouchMove(event: TouchEvent) {
  if (touchStartX.value === null) return
  const currentX = event.touches[0]?.clientX ?? touchStartX.value
  touchDeltaX.value = currentX - touchStartX.value
}

function onTouchEnd() {
  if (Math.abs(touchDeltaX.value) > 44) {
    if (touchDeltaX.value < 0) {
      next()
    } else {
      prev()
    }
  }
  touchStartX.value = null
  touchDeltaX.value = 0
}

// ─── Lifecycle ────────────────────────────────────────────────────────────────
watch(current, async () => {
  await nextTick()
  animateSlideIn()
})

onMounted(() => {
  resetProgress()
  progressRaf = requestAnimationFrame(tickProgress)
  animateSlideIn()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(progressRaf)
})
</script>

<template>
  <section
    class="relative w-full overflow-hidden bg-black"
    style="min-height:92svh; height:92svh; max-height:960px"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend.passive="onTouchEnd"
  >
    <!-- ── Background images (stacked for smooth transitions) ── -->
    <div class="absolute inset-0">
      <NuxtImg
        v-for="(slide, i) in slides"
        :key="slide.image"
        :src="slide.image"
        :alt="slide.title"
        preset="hero"
        sizes="100vw"
        format="webp"
        quality="74"
        :loading="i === 0 ? 'eager' : 'lazy'"
        :fetchpriority="i === 0 ? 'high' : 'auto'"
        :preload="i === 0"
        class="absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-out hero-image-motion"
        :class="i === current ? 'opacity-100' : 'opacity-0'"
        style="filter:brightness(0.40)"
      />
    </div>

    <!-- Overlay gradients -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/42 to-black/28 pointer-events-none" />
    <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/18 to-transparent pointer-events-none" />

    <!-- Red accent left bar -->
    <div class="absolute left-0 top-0 w-[3px] h-full bg-[#E5322D]" />

    <!-- ── Main copy ── -->
    <div class="absolute inset-0 flex flex-col justify-end p-5 pb-20 sm:p-10 sm:pb-28 lg:p-16 lg:pb-32">
      <div class="max-w-[1440px] mx-auto w-full">

        <!-- Tag -->
        <div ref="tagRef" style="opacity:0">
          <span
              class="inline-flex items-center gap-2 mb-4 sm:mb-5 text-white/62"
              style="font-size:0.7rem;font-weight:700;letter-spacing:0.22em;text-transform:uppercase"
          >
              <span class="w-6 sm:w-7 h-px bg-[#E5322D]" />
            {{ currentSlide.tag }}
          </span>
        </div>

        <!-- Title — word-by-word GSAP stagger -->
        <h1
          ref="titleRef"
          class="text-white mb-4 sm:mb-5 max-w-4xl headline-balance"
          style="font-size:clamp(2rem,6vw,5.2rem);font-weight:800;line-height:1.02;letter-spacing:-0.03em;overflow:hidden"
        >
          <template v-for="(line, li) in titleLines" :key="li">
            <span class="block">
              <span
                v-for="(word, wi) in line"
                :key="wi"
                class="hero-word inline-block"
                style="opacity:0"
              >{{ word }}&nbsp;</span>
            </span>
          </template>
        </h1>

        <!-- Subtitle -->
        <p
          ref="subtitleRef"
          class="text-white/72 mb-6 sm:mb-8 max-w-xl"
          style="font-size:clamp(0.95rem,1.45vw,1.13rem);font-weight:500;line-height:1.72;opacity:0"
        >
          {{ currentSlide.subtitle }}
        </p>

        <!-- CTAs -->
        <div ref="ctaRef" class="flex flex-col sm:flex-row gap-3 sm:flex-wrap" style="opacity:0">
          <NuxtLink
            :to="localePath(currentSlide.ctaHref)"
            data-magnetic
            class="cta-premium inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 text-white transition-all hover:gap-3 rounded-full"
            :style="{ background: RED, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }"
          >
            {{ currentSlide.cta }}
            <ArrowRight :size="16" />
          </NuxtLink>

          <NuxtLink
            v-if="currentSlide.ctaSecondary && currentSlide.ctaSecondaryHref"
            :to="localePath(currentSlide.ctaSecondaryHref)"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 border border-white/35 text-white hover:bg-white/10 hover:border-white/65 transition-all rounded-full"
            style="font-size:0.8rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase"
          >
            {{ currentSlide.ctaSecondary }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- ── Bottom controls ── -->
    <div class="absolute bottom-0 left-0 right-0 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between px-5 sm:px-10 lg:px-16 pb-5 sm:pb-8">

      <!-- Progress bars (one per slide) -->
      <div class="flex items-center gap-2">
        <button
          v-for="(_, i) in slides"
          :key="i"
          class="group relative flex flex-col justify-end overflow-hidden"
          style="width:28px;height:3px;background:rgba(255,255,255,0.18);border-radius:2px"
          :aria-label="`Slide ${i + 1}`"
          @click="goTo(i)"
        >
          <!-- Active slide fills proportionally; others are empty or full -->
          <div
            class="absolute inset-0 transition-none"
            :style="{
              background: '#E5322D',
              width: i < current ? '100%'
                   : i === current ? `${progress}%`
                   : '0%',
            }"
          />
        </button>
      </div>

      <!-- Prev / Next -->
      <div class="flex gap-2 self-end sm:self-auto">
        <button
          class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-white/22 text-white hover:bg-white/10 hover:border-white/50 transition-all rounded-full"
          aria-label="Precedente"
          @click="prev"
        >
          <ChevronLeft :size="18" />
        </button>
        <button
          class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-white/22 text-white hover:bg-white/10 hover:border-white/50 transition-all rounded-full"
          aria-label="Successivo"
          @click="next"
        >
          <ChevronRight :size="18" />
        </button>
      </div>

      <!-- Counter -->
      <div
        class="hidden sm:flex items-center gap-1 text-white/44"
        style="font-size:0.75rem;font-weight:700;letter-spacing:0.1em"
      >
        <span class="text-white">{{ String(current + 1).padStart(2, '0') }}</span>
        <span>/</span>
        <span>{{ String(slides.length).padStart(2, '0') }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Image enters via CSS zoom (no GSAP needed — GPU composited) */
.hero-image-motion {
  animation: heroImageZoom 6.5s cubic-bezier(0.2, 0.9, 0.25, 1) both;
}

.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.55s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}

@keyframes heroImageZoom {
  from { transform: scale(1.05); }
  to   { transform: scale(1.01); }
}

/* GSAP controls transforms; prevent initial FOUC on .hero-word */
.hero-word {
  will-change: transform, opacity;
}
</style>

<script setup lang="ts">
/**
 * AnimateOnScroll — scroll-triggered entrance animation powered by GSAP ScrollTrigger.
 *
 * API is backwards-compatible with the previous IntersectionObserver version:
 *   - variant  : 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn'
 *   - delay    : seconds  (e.g. 0.1 = 100ms delay)
 *   - duration : milliseconds (e.g. 650 → passed as 0.65s to GSAP, same as before)
 *   - threshold: 0–1, fraction of element visible before triggering
 *   - once     : whether to re-animate when scrolling back up
 *   - tag      : wrapper HTML tag
 *   - stagger  : when true, direct children are staggered instead of the wrapper
 *
 * Falls back gracefully when:
 *   - prefers-reduced-motion is set (shows elements immediately)
 *   - GSAP is not available (SSR / edge cases)
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type Variant = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    delay?: number   // seconds
    duration?: number // ms (for compat with old API)
    threshold?: number
    once?: boolean
    tag?: string
    stagger?: boolean
  }>(),
  {
    variant: 'fadeUp',
    delay: 0,
    duration: 700,
    threshold: 0.12,
    once: true,
    tag: 'div',
    stagger: false,
  },
)

const root = ref<HTMLElement | null>(null)

// Initial invisible state set via Vue :style — SSR-safe, prevents flash
// GSAP overrides this once it mounts.
const hiddenStyle = computed(() => {
  if (import.meta.server) return { opacity: '0' }
  return {}
})

// Map variant → GSAP fromVars
function getFromVars(): gsap.TweenVars {
  const base: gsap.TweenVars = { opacity: 0, willChange: 'transform, opacity' }
  switch (props.variant) {
    case 'fadeLeft':  return { ...base, x: -52 }
    case 'fadeRight': return { ...base, x: 52 }
    case 'scaleIn':  return { ...base, scale: 0.9, willChange: 'transform, opacity' }
    case 'fadeIn':   return { opacity: 0 }
    case 'fadeUp':
    default:          return { ...base, y: 52 }
  }
}

let trigger: ScrollTrigger | undefined

onMounted(() => {
  if (!root.value) return

  // Register plugins — safe to call multiple times
  gsap.registerPlugin(ScrollTrigger)

  // Accessibility: skip animation for users who prefer reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const el = root.value
  // If stagger mode: animate children; otherwise animate the wrapper itself
  const targets = props.stagger
    ? (Array.from(el.children) as HTMLElement[])
    : [el]

  if (!targets.length) return

  const fromVars = getFromVars()
  const durationSec = props.duration / 1000 // convert ms → seconds for GSAP

  // Set initial state immediately (GSAP takes ownership of opacity/transform)
  gsap.set(targets, fromVars)

  trigger = ScrollTrigger.create({
    trigger: el,
    // e.g. threshold 0.12 → "top 88%" = fires when 12% of element is visible
    start: `top ${Math.round((1 - props.threshold) * 100)}%`,

    onEnter: () => {
      gsap.to(targets, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: durationSec,
        delay: props.delay,
        ease: 'power3.out',
        stagger: props.stagger ? 0.11 : 0,
        // Clean up will-change after animation ends to free compositor layer
        onComplete: () => { gsap.set(targets, { clearProps: 'willChange' }) },
      })
    },

    // If once: true, do NOT revert on scroll-up
    onLeaveBack: props.once
      ? undefined
      : () => gsap.set(targets, fromVars),
  })
})

onUnmounted(() => {
  trigger?.kill()
})
</script>

<template>
  <component
    :is="tag"
    ref="root"
    :class="$attrs.class"
    :style="hiddenStyle"
  >
    <slot />
  </component>
</template>

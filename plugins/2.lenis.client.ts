import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  // Skip Lenis on pure touch devices — native momentum scroll is better there
  const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches
  if (isTouchOnly) return

  const lenis = new Lenis({
    duration: 1.15,
    // Exponential ease — feels natural, not sluggish
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    // Sync touch events gently on hybrid devices
    syncTouch: false,
    touchMultiplier: 2,
  })

  // Wire Lenis into GSAP's RAF so they share the same animation frame.
  // GSAP's ticker is more precise than requestAnimationFrame directly
  // because it handles lag smoothing.
  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  // Keep ScrollTrigger positions in sync with Lenis's virtual scroll
  lenis.on('scroll', ScrollTrigger.update)

  // Expose lenis globally so app.vue can use lenis.scrollTo(0) on route change
  return {
    provide: { lenis },
  }
})

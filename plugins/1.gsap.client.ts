import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger)

  // Ignore mobile resize events to prevent ScrollTrigger recalculation spam
  ScrollTrigger.config({ ignoreMobileResize: true })

  // Default GSAP config for premium feel
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  })

  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  }
})

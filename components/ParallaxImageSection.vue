<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps<{
  image: string
  alt: string
  title: string
  subtitle?: string
  cta?: string
  ctaHref?: string
}>()

const rootRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!rootRef.value || !imageRef.value) return
  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo(
    imageRef.value,
    { yPercent: -10, scale: 1.08 },
    {
      yPercent: 12,
      scale: 1.18,
      ease: 'none',
      scrollTrigger: {
        trigger: rootRef.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    },
  )
})
</script>

<template>
  <section ref="rootRef" class="relative min-h-[78svh] overflow-hidden bg-black">
    <div ref="imageRef" class="absolute inset-0">
      <NuxtImg
        :src="props.image"
        :alt="props.alt"
        preset="hero"
        sizes="100vw"
        loading="lazy"
        format="avif,webp"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="absolute inset-0 bg-gradient-to-t from-black/88 via-black/46 to-black/30" />

    <div class="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-[1400px] items-end px-6 pb-14 sm:px-10 lg:px-14">
      <div class="max-w-3xl">
        <h2 class="headline-balance mb-4 text-white" style="font-size:clamp(2rem,5vw,4.5rem);font-weight:800;line-height:1.03;letter-spacing:-0.02em">
          {{ props.title }}
        </h2>
        <p v-if="props.subtitle" class="max-w-2xl text-white/72" style="font-size:clamp(1rem,1.35vw,1.14rem);line-height:1.75">
          {{ props.subtitle }}
        </p>
        <NuxtLink
          v-if="props.cta && props.ctaHref"
          :to="props.ctaHref"
          data-magnetic
          class="mt-7 inline-flex rounded-full border border-white/35 px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-white/12"
        >
          {{ props.cta }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

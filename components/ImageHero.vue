<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface HeroMedia {
  image?: string
  video?: string
  alt: string
  tag?: string
  title: string
  subtitle?: string
  cta?: string
  ctaHref?: string
}

const props = defineProps<{
  media: HeroMedia
}>()

const rootRef = ref<HTMLElement | null>(null)
const mediaRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!rootRef.value || !mediaRef.value) return
  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo(
    mediaRef.value,
    { yPercent: -6, scale: 1.04 },
    {
      yPercent: 8,
      scale: 1.12,
      ease: 'none',
      scrollTrigger: {
        trigger: rootRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    },
  )
})
</script>

<template>
  <section ref="rootRef" class="relative min-h-[94svh] overflow-hidden bg-black">
    <div ref="mediaRef" class="absolute inset-0 scale-[1.02]">
      <video
        v-if="media.video"
        class="h-full w-full object-cover"
        autoplay
        muted
        playsinline
        loop
      >
        <source :src="media.video" type="video/mp4">
      </video>
      <NuxtImg
        v-else
        :src="media.image || ''"
        :alt="media.alt"
        preset="hero"
        sizes="100vw"
        format="avif,webp"
        quality="80"
        loading="eager"
        preload
        class="h-full w-full object-cover"
      />
    </div>

    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
    <div class="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

    <div class="relative z-10 mx-auto flex min-h-[94svh] w-full max-w-[1520px] items-end px-6 pb-20 sm:px-10 lg:px-16">
      <div class="max-w-3xl">
        <p v-if="media.tag" class="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
          {{ media.tag }}
        </p>
        <h1 class="headline-balance mb-5 text-white" style="font-size:clamp(2.5rem,7vw,6rem);font-weight:800;line-height:1.01;letter-spacing:-0.03em">
          {{ media.title }}
        </h1>
        <p v-if="media.subtitle" class="max-w-xl text-white/78" style="font-size:clamp(1rem,1.4vw,1.2rem);line-height:1.75">
          {{ media.subtitle }}
        </p>
        <NuxtLink
          v-if="media.cta && media.ctaHref"
          :to="media.ctaHref"
          data-magnetic
          class="cta-premium mt-8 inline-flex items-center rounded-full bg-[#E5322D] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white"
        >
          {{ media.cta }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

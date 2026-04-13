<script setup lang="ts">
interface PageHeroData {
  image: string
  alt: string
  tag: string
  title: string
  subtitle: string
}

defineProps<{
  hero: PageHeroData
}>()
</script>

<template>
  <section
    class="relative w-full overflow-hidden bg-black"
    style="min-height:92svh; height:92svh; max-height:960px"
  >
    <NuxtImg
      :src="hero.image"
      :alt="hero.alt"
      preset="hero"
      sizes="100vw"
      format="avif,webp"
      quality="80"
      loading="eager"
      class="absolute inset-0 h-full w-full object-cover"
      style="filter:brightness(0.40)"
    />

    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/42 to-black/28 pointer-events-none" />
    <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/18 to-transparent pointer-events-none" />
    <div class="absolute left-0 top-0 h-full w-[3px] bg-[#E5322D]" />

    <div class="absolute inset-0 flex flex-col justify-end p-5 pb-20 sm:p-10 sm:pb-28 lg:p-16 lg:pb-32">
      <div class="mx-auto w-full max-w-[1440px]">
        <span
          class="mb-4 sm:mb-5 inline-flex items-center gap-2 text-white/62"
          style="font-size:0.7rem;font-weight:700;letter-spacing:0.22em;text-transform:uppercase"
        >
          <span class="h-px w-6 sm:w-7 bg-[#E5322D]" />
          {{ hero.tag }}
        </span>

        <h1
          class="headline-balance mb-4 sm:mb-5 max-w-4xl text-white"
          style="font-size:clamp(2rem,6vw,5.2rem);font-weight:800;line-height:1.02;letter-spacing:-0.03em"
        >
          {{ hero.title }}
        </h1>

        <p
          class="max-w-xl text-white/72"
          style="font-size:clamp(0.95rem,1.45vw,1.13rem);font-weight:500;line-height:1.72;text-decoration-line:underline;text-decoration-color:#E5322D;text-decoration-thickness:2px;text-underline-offset:0.2em;text-decoration-skip-ink:auto"
        >
          {{ hero.subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

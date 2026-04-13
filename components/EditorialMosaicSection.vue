<script setup lang="ts">
interface MosaicImage {
  src: string
  alt: string
  label?: string
}

defineProps<{
  eyebrow?: string
  title: string
  description: string
  images: MosaicImage[]
  dark?: boolean
}>()
</script>

<template>
  <section
    class="relative overflow-hidden px-4 py-14 sm:px-8 lg:px-12"
    :class="dark ? 'bg-[#0b0b0b]' : 'bg-[var(--surface)]'"
  >
    <div class="mx-auto w-full max-w-[1560px]">
      <AnimateOnScroll variant="fadeUp" class="mb-8 max-w-3xl">
        <p
          v-if="eyebrow"
          class="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#E5322D]"
        >
          {{ eyebrow }}
        </p>
        <h2
          class="headline-balance mb-3"
          :class="dark ? 'text-white' : 'text-[#111111] dark:text-white'"
          style="font-size:clamp(1.8rem,3.6vw,3.1rem);font-weight:800;line-height:1.05;letter-spacing:-0.02em"
        >
          {{ title }}
        </h2>
        <p
          :class="dark ? 'text-white/70' : 'text-[#666666] dark:text-[#999999]'"
          style="font-size:clamp(0.98rem,1.2vw,1.06rem);line-height:1.8"
        >
          {{ description }}
        </p>
      </AnimateOnScroll>

      <div class="grid grid-cols-1 gap-3 lg:grid-cols-12">
        <AnimateOnScroll variant="fadeRight" class="lg:col-span-5">
          <figure class="group relative overflow-hidden rounded-[1.9rem]" style="aspect-ratio:4/5">
            <NuxtImg
              :src="images[0]?.src || ''"
              :alt="images[0]?.alt || ''"
              preset="card"
              sizes="(max-width: 1024px) 100vw, 45vw"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/8 to-transparent" />
            <figcaption
              v-if="images[0]?.label"
              class="absolute bottom-4 left-4 rounded-full border border-white/18 bg-black/45 px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md"
            >
              {{ images[0].label }}
            </figcaption>
          </figure>
        </AnimateOnScroll>

        <div class="grid gap-3 lg:col-span-7">
          <AnimateOnScroll variant="fadeLeft" :delay="0.06">
            <figure class="group relative overflow-hidden rounded-[1.9rem]" style="aspect-ratio:16/9">
              <NuxtImg
                :src="images[1]?.src || ''"
                :alt="images[1]?.alt || ''"
                preset="gallery"
                sizes="(max-width: 1024px) 100vw, 55vw"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/8 to-transparent" />
              <figcaption
                v-if="images[1]?.label"
                class="absolute bottom-4 left-4 rounded-full border border-white/18 bg-black/45 px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md"
              >
                {{ images[1].label }}
              </figcaption>
            </figure>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeUp" :delay="0.1">
            <figure class="group relative overflow-hidden rounded-[2rem]" style="aspect-ratio:16/7">
              <NuxtImg
                :src="images[2]?.src || ''"
                :alt="images[2]?.alt || ''"
                preset="hero"
                sizes="100vw"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-black/68 via-black/22 to-transparent" />
              <figcaption
                v-if="images[2]?.label"
                class="absolute bottom-4 left-4 rounded-full border border-white/18 bg-black/45 px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md"
              >
                {{ images[2].label }}
              </figcaption>
            </figure>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  </section>
</template>

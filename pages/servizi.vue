<script setup lang="ts">
import { ArrowRight, CheckCircle2, Globe, Maximize2, Package, Truck, Wrench } from 'lucide-vue-next'

const { t } = useLang()

const serviceIcons = [Truck, Globe, Maximize2, Wrench, Package]

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
]
</script>

<template>
  <div>
    <section class="relative bg-[#0A0A0A] dark:bg-[#050505] py-24 lg:py-36 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt=""
          class="w-full h-full object-cover opacity-20"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      </div>
      <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#E5322D]" />
      <div class="max-w-[1440px] mx-auto relative z-10">
        <span
          class="block mb-4"
          style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #E5322D"
        >
          {{ t.serviziPage.hero.tag }}
        </span>
        <h1
          class="text-white mb-4 max-w-2xl"
          style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.02em"
        >
          {{ t.serviziPage.hero.title }}
        </h1>
        <p
          class="text-white/60 max-w-lg"
          style="font-size: clamp(1rem, 1.5vw, 1.125rem); font-weight: 400; line-height: 1.65"
        >
          {{ t.serviziPage.hero.subtitle }}
        </p>
      </div>
    </section>

    <div class="sticky top-[72px] z-30 bg-white dark:bg-[#0A0A0A] border-b border-black/10 dark:border-white/10 overflow-x-auto">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex gap-1 py-2 whitespace-nowrap">
        <a
          v-for="(item, i) in t.serviziPage.items"
          :key="item.id"
          :href="`#${item.id}`"
          class="inline-flex items-center gap-2 px-4 py-2 text-[#555555] dark:text-[#999999] hover:text-[#111111] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          style="font-size: 0.8125rem; font-weight: 500"
        >
          <component :is="serviceIcons[i]" :size="14" style="color: #E5322D" />
          {{ item.tag }}
        </a>
      </div>
    </div>

    <section
      v-for="(item, i) in t.serviziPage.items"
      :id="item.id"
      :key="item.id"
      :class="`py-20 lg:py-28 px-4 sm:px-6 lg:px-10 ${i % 2 === 0 ? 'bg-white dark:bg-[#0A0A0A]' : 'bg-[#F5F5F5] dark:bg-[#111111]'}`"
    >
      <div class="max-w-[1440px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="relative overflow-hidden group">
            <div style="aspect-ratio: 4/3" class="overflow-hidden">
              <img
                :src="SERVICE_IMAGES[i]"
                :alt="item.tag"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
            </div>
          </div>

          <div>
            <span
              class="block mb-3"
              style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #E5322D"
            >
              {{ item.tag }}
            </span>
            <h2
              class="text-[#111111] dark:text-white mb-4"
              style="font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 900; line-height: 1.1"
            >
              {{ item.title }}
            </h2>
            <p
              class="text-[#666666] dark:text-[#999999] mb-8"
              style="font-size: clamp(1rem, 1.2vw, 1.0625rem); font-weight: 400; line-height: 1.75"
            >
              {{ item.desc }}
            </p>
            <div class="flex flex-col gap-3 mb-8">
              <div v-for="feat in item.features" :key="feat" class="flex items-start gap-3">
                <CheckCircle2 :size="18" style="color: #E5322D; flex-shrink: 0; margin-top: 2px" />
                <span class="text-[#444444] dark:text-[#CCCCCC]" style="font-size: 0.9375rem; font-weight: 400; line-height: 1.5">
                  {{ feat }}
                </span>
              </div>
            </div>
            <NuxtLink
              to="/contatti"
              class="inline-flex items-center gap-2 px-6 py-3 text-white transition-all hover:gap-3"
              style="background: #E5322D; font-size: 0.875rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase"
            >
              {{ t.serviziPage.cta }}
              <ArrowRight :size="16" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

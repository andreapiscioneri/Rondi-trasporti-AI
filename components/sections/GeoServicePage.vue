<script setup lang="ts">
interface GeoLink {
  label: string
  href: string
}

interface GeoFaqItem {
  question: string
  answer: string
}

interface GeoPageModel {
  serviceName: string
  cityName: string
  districtName?: string
  localTitle: string
  localDescription: string
  strategicNote: string
  localIntent: string
  mapEmbedUrl: string
  ctaLabel: string
  ctaHref: string
  serviceRootHref: string
  cityLinks: GeoLink[]
  districtLinks: GeoLink[]
  breadcrumbLinks: GeoLink[]
  faqItems?: GeoFaqItem[]
}

defineProps<{
  model: GeoPageModel
}>()
</script>

<template>
  <section class="page-section page-section--light">
    <div class="section-shell">
      <nav class="mb-5 flex flex-wrap gap-2 text-[0.72rem] uppercase tracking-[0.12em] text-[#666666] dark:text-[#999999]">
        <NuxtLink
          v-for="link in model.breadcrumbLinks"
          :key="link.href"
          :to="link.href"
          class="hover:text-[#E5322D] transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        <div class="lg:col-span-7">
          <span class="inline-flex items-center gap-2 mb-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#E5322D]">
            GEO Landing
          </span>
          <h1 class="headline-balance mb-4 text-[#111111] dark:text-white" style="font-size:clamp(2rem,4vw,3.4rem);font-weight:800;line-height:1.04">
            {{ model.localTitle }}
          </h1>
          <p class="mb-4 text-[#666666] dark:text-[#999999]" style="font-size:clamp(1rem,1.2vw,1.08rem);line-height:1.82">
            {{ model.localDescription }}
          </p>
          <p class="mb-7 text-[#444444] dark:text-[#cccccc]" style="font-size:0.92rem;line-height:1.78">
            Area di focus: {{ model.strategicNote }}. Intento locale dominante: {{ model.localIntent }}.
          </p>
          <NuxtLink
            :to="model.ctaHref"
            class="cta-premium inline-flex items-center rounded-full bg-[#E5322D] px-6 py-3 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-white"
          >
            {{ model.ctaLabel }}
          </NuxtLink>
        </div>

        <div class="lg:col-span-5">
          <div class="overflow-hidden rounded-[1.5rem] border border-black/10 dark:border-white/10">
            <iframe
              :src="model.mapEmbedUrl"
              class="h-[340px] w-full"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Mappa area locale"
            />
          </div>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div class="rounded-[1.35rem] border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#111111]">
          <h2 class="mb-3 text-[1rem] font-bold text-[#111111] dark:text-white">Altre citta per {{ model.serviceName }}</h2>
          <div class="flex flex-wrap gap-2">
            <NuxtLink
              v-for="link in model.cityLinks"
              :key="link.href"
              :to="link.href"
              class="rounded-full border border-black/12 px-3 py-1 text-[0.74rem] font-semibold text-[#444444] transition-colors hover:border-[#E5322D]/40 hover:text-[#E5322D] dark:border-white/14 dark:text-[#cccccc]"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="rounded-[1.35rem] border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#111111]">
          <h2 class="mb-3 text-[1rem] font-bold text-[#111111] dark:text-white">Zone locali correlate</h2>
          <div class="flex flex-wrap gap-2">
            <NuxtLink
              v-for="link in model.districtLinks"
              :key="link.href"
              :to="link.href"
              class="rounded-full border border-black/12 px-3 py-1 text-[0.74rem] font-semibold text-[#444444] transition-colors hover:border-[#E5322D]/40 hover:text-[#E5322D] dark:border-white/14 dark:text-[#cccccc]"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mt-8 rounded-[1.35rem] border border-black/10 bg-[rgba(229,50,45,0.08)] p-5 dark:border-white/10 dark:bg-[rgba(229,50,45,0.14)]">
        <p class="text-[0.86rem] text-[#333333] dark:text-[#dddddd]" style="line-height:1.74">
          Questa pagina e geolocalizzata per query come "{{ model.serviceName }} {{ model.cityName }}" e varianti "vicino a me".
          Ogni landing locale mantiene contenuti specifici per area per evitare duplicazione e aumentare rilevanza semantica in SERP locali.
        </p>
      </div>

      <div v-if="model.faqItems?.length" class="mt-8 rounded-[1.35rem] border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#111111]">
        <h2 class="mb-4 text-[1rem] font-bold text-[#111111] dark:text-white">FAQ locali</h2>
        <div class="space-y-3">
          <details
            v-for="item in model.faqItems"
            :key="item.question"
            class="rounded-xl border border-black/10 px-4 py-3 dark:border-white/10"
          >
            <summary class="cursor-pointer text-[0.88rem] font-semibold text-[#222222] dark:text-[#f0f0f0]">{{ item.question }}</summary>
            <p class="mt-2 text-[0.84rem] leading-7 text-[#666666] dark:text-[#b3b3b3]">{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

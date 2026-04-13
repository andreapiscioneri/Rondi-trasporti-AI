<script setup lang="ts">
interface ServiceTab {
  label: string
  title: string
  description: string
  icon?: unknown
  image?: string
}

interface RelatedService {
  title: string
  href: string
  image: string
}

const props = defineProps<{
  introTitle: string
  introSubtitle: string
  introParagraphs: string[]
  introImage: string
  tabs: ServiceTab[]
  ctaLabel: string
  ctaHref: string
  whyTitle: string
  whyText: string
  checklist: string[]
  relatedServices: RelatedService[]
}>()

const activeTab = ref(0)
const currentTab = computed(() => props.tabs[activeTab.value] || props.tabs[0])
</script>

<template>
  <div>
    <section class="page-section bg-white dark:bg-[#0A0A0A]">
      <div class="section-shell grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 class="mb-3 text-[#17171C] dark:text-white headline-balance" style="font-size:clamp(2.1rem,5vw,4rem);font-weight:800;line-height:1.02">{{ introTitle }}</h1>
          <p class="mb-6 text-[#222228] dark:text-white/90" style="font-size:clamp(1.1rem,1.6vw,1.9rem);font-weight:700;line-height:1.2">{{ introSubtitle }}</p>
          <div class="space-y-5">
            <p v-for="line in introParagraphs" :key="line" class="text-[#5E5E66] dark:text-[#AAAAAA]" style="font-size:clamp(1rem,1.2vw,1.08rem);line-height:1.7">{{ line }}</p>
          </div>
        </div>
        <div class="overflow-hidden rounded-[1.5rem]">
          <img :src="introImage" :alt="introTitle" class="w-full h-full object-cover" style="min-height:320px">
        </div>
      </div>
    </section>

    <section class="page-section bg-white dark:bg-[#0A0A0A]" style="padding-top:0">
      <div class="section-shell">
        <div class="grid grid-cols-1 md:grid-cols-3 border-b border-black/20 dark:border-white/20">
          <button
            v-for="(tab, i) in tabs"
            :key="tab.label"
            class="text-left py-4 px-2 border-b-2 transition-colors"
            :class="i === activeTab ? 'border-[#E5322D]' : 'border-transparent hover:border-black/20 dark:hover:border-white/20'"
            @click="activeTab = i"
          >
            <span class="text-[#222228] dark:text-[#EAEAEA]" style="font-size:0.98rem;font-weight:700">{{ tab.label }}</span>
          </button>
        </div>

        <div class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div class="flex items-center justify-center">
            <img
              v-if="currentTab.image"
              :src="currentTab.image"
              :alt="currentTab.title"
              class="w-full max-w-[420px] object-contain"
            >
            <div v-else class="h-[220px] w-[220px] rounded-full border border-black/20 dark:border-white/20 bg-white/40 dark:bg-white/6 flex items-center justify-center">
              <component :is="currentTab.icon" :size="92" class="text-[#17171C] dark:text-white" />
            </div>
          </div>

          <div>
            <h2 class="mb-4 text-[#17171C] dark:text-white headline-balance" style="font-size:clamp(2rem,3.5vw,3.1rem);font-weight:800">{{ currentTab.title }}</h2>
            <p class="text-[#5E5E66] dark:text-[#AAAAAA]" style="font-size:clamp(1rem,1.2vw,1.1rem);line-height:1.72">{{ currentTab.description }}</p>
            <div class="mt-8 mb-5 h-px bg-black/20 dark:bg-white/20" />
            <NuxtLink :to="ctaHref" class="inline-flex items-center gap-3 text-[#17171C] dark:text-white" style="font-weight:700">
              <span class="h-12 w-12 rounded-full bg-[#E5322D] text-white flex items-center justify-center" style="font-size:1.6rem;line-height:1">+</span>
              <span class="text-[0.9rem] uppercase tracking-[0.04em]">{{ ctaLabel }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section bg-white dark:bg-[#0A0A0A]" style="padding-top:0">
      <div class="section-shell grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 class="mb-4 text-[#17171C] dark:text-white headline-balance" style="font-size:clamp(2rem,3.4vw,3rem);font-weight:800">{{ whyTitle }}</h2>
          <p class="text-[#5E5E66] dark:text-[#AAAAAA] max-w-xl" style="font-size:clamp(1rem,1.12vw,1.08rem);line-height:1.72">{{ whyText }}</p>
        </div>
        <ul class="space-y-3">
          <li v-for="item in checklist" :key="item" class="flex items-start gap-3 text-[#4E4E56] dark:text-[#B8B8B8]" style="font-size:1.03rem;line-height:1.55">
            <span class="text-[#E5322D] mt-1" style="font-weight:800">✓</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="page-section bg-white dark:bg-[#0A0A0A]" style="padding-top:0">
      <div class="section-shell">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden rounded-[1.25rem] border border-black/12 dark:border-white/12">
          <NuxtLink
            v-for="service in relatedServices"
            :key="service.href"
            :to="service.href"
            class="group relative min-h-[340px] overflow-hidden border-r border-black/12 dark:border-white/12 last:border-r-0"
          >
            <img :src="service.image" :alt="service.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-black/76 via-black/18 to-transparent" />
            <p class="absolute bottom-6 left-6 text-white" style="font-size:clamp(1.3rem,1.8vw,2rem);font-weight:700">{{ service.title }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#F5F5F5] dark:bg-[#111111]">
    <div class="max-w-[1000px] mx-auto">
      <span class="block mb-4 text-[#E5322D]" style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase">
        {{ t.storiaPage.hero.tag }}
      </span>
      <h1 class="text-[#111111] dark:text-white mb-4" style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; line-height: 1.1">
        {{ t.storiaPage.hero.title }}
      </h1>
      <p class="text-[#666666] dark:text-[#999999] mb-12" style="font-size: 1.05rem; line-height: 1.7">
        {{ t.storiaPage.hero.subtitle }}
      </p>
      <div class="space-y-5">
        <article v-for="entry in t.storiaPage.timeline" :key="entry.year" class="bg-white dark:bg-[#0A0A0A] p-6 border border-black/10 dark:border-white/10">
          <p class="text-[#E5322D] font-bold mb-2">{{ entry.year }}</p>
          <h2 class="text-xl font-bold mb-2 text-[#111111] dark:text-white">{{ entry.title }}</h2>
          <p class="text-[#666666] dark:text-[#999999] leading-7">{{ entry.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

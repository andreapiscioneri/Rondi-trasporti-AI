<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
    <div class="max-w-[1000px] mx-auto">
      <span class="block mb-4 text-[#E5322D]" style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase">
        {{ t.lavoraPage.hero.tag }}
      </span>
      <h1 class="text-[#111111] dark:text-white mb-4" style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; line-height: 1.1">
        {{ t.lavoraPage.hero.title }}
      </h1>
      <p class="text-[#666666] dark:text-[#999999] mb-10" style="font-size: 1.05rem; line-height: 1.7">
        {{ t.lavoraPage.hero.subtitle }}
      </p>
      <h2 class="text-xl font-bold mb-4 text-[#111111] dark:text-white">{{ t.lavoraPage.positions.title }}</h2>
      <div class="space-y-4">
        <article v-for="job in t.lavoraPage.positions.items" :key="job.title" class="p-5 border border-black/10 dark:border-white/10 bg-[#F8F8F8] dark:bg-[#111111]">
          <h3 class="font-bold mb-1 text-[#111111] dark:text-white">{{ job.title }}</h3>
          <p class="text-sm text-[#666666] dark:text-[#999999] mb-2">{{ job.type }} - {{ job.location }}</p>
          <p class="text-[#666666] dark:text-[#999999]">{{ job.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

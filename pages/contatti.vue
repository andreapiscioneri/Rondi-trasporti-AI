<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
    <div class="max-w-[1100px] mx-auto">
      <span class="block mb-4 text-[#E5322D]" style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase">
        {{ t.contattiPage.hero.tag }}
      </span>
      <h1 class="text-[#111111] dark:text-white mb-4" style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; line-height: 1.1">
        {{ t.contattiPage.hero.title }}
      </h1>
      <p class="text-[#666666] dark:text-[#999999] mb-10" style="font-size: 1.05rem; line-height: 1.7">
        {{ t.contattiPage.hero.subtitle }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article v-for="office in t.contattiPage.offices" :key="office.id" class="p-5 border border-black/10 dark:border-white/10 bg-[#F8F8F8] dark:bg-[#111111]">
          <h2 class="font-bold mb-2 text-[#111111] dark:text-white">{{ office.name }}</h2>
          <p class="text-sm whitespace-pre-line text-[#666666] dark:text-[#999999] mb-2">{{ office.address }}</p>
          <p class="text-sm text-[#666666] dark:text-[#999999]">{{ office.phone }}</p>
          <p class="text-sm text-[#666666] dark:text-[#999999]">{{ office.email }}</p>
          <p class="text-sm text-[#666666] dark:text-[#999999] mt-2">{{ office.hours }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

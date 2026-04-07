<script setup lang="ts">
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    if (import.meta.client) {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  },
)
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-[#0A0A0A] text-[#333333] dark:text-white transition-colors duration-300"
    style="font-family: 'Roboto', sans-serif"
  >
    <div class="site-atmosphere" />
    <AppHeader />
    <main class="flex-1 pt-[72px] relative z-10">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

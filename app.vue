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
    class="modern-shell min-h-screen flex flex-col bg-[#F6F5F2] dark:bg-[#050505] text-[#333333] dark:text-white transition-colors duration-300"
    style="font-family: 'DM Sans', sans-serif"
  >
    <div class="site-atmosphere" />
    <AppHeader />
    <main class="flex-1 pt-[92px] relative z-10">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

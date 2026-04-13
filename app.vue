<script setup lang="ts">
const route = useRoute()
const nuxtApp = useNuxtApp()

watch(
  () => route.fullPath,
  () => {
    if (!import.meta.client) return
    // Use Lenis scroll-to when available (smooth + instant jump on route change)
    const lenis = (nuxtApp as any).$lenis
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
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
    <!-- Ambient background gradient -->
    <div class="site-atmosphere" />

    <!-- Custom cursor (pointer devices only — hides itself on touch) -->
    <AppCursor />

    <!-- First-visit loader -->
    <AppLoader />

    <AppHeader />

    <main class="flex-1 pt-[92px] relative z-10">
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </main>

    <AppFooter />
  </div>
</template>

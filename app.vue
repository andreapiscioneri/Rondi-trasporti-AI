<script setup lang="ts">
const route   = useRoute()
const nuxtApp = useNuxtApp()

watch(
  () => route.fullPath,
  () => {
    if (!import.meta.client) return
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
  <!--
    Root element uses CSS variables from theme.css so the dark/light switch
    is handled entirely by the class="dark" on <html>.
    No hardcoded light/dark colour pairs needed here.
  -->
  <div
    class="modern-shell min-h-screen flex flex-col"
    style="font-family: 'DM Sans', sans-serif; background-color: var(--bg); color: var(--text-primary);"
  >
    <!-- Ambient background gradient (stays in fixed position, pointer-events: none) -->
    <div class="site-atmosphere" aria-hidden="true" />

    <!-- Custom cursor (only on fine-pointer/mouse devices) -->
    <AppCursor />

    <!-- First-visit loading screen -->
    <AppLoader />

    <AppHeader />

    <main class="flex-1 pt-[92px] relative z-10">
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </main>

    <ScrollTopButton />
    <CookieBanner />

    <AppFooter />
  </div>
</template>

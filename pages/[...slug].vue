<template>
  <section class="min-h-[50vh] flex items-center justify-center px-6 py-24 bg-white dark:bg-[#0A0A0A]">
    <div class="text-center">
      <p class="text-[#E5322D] uppercase tracking-[0.2em] text-xs font-bold mb-4">404</p>
      <h1 class="text-3xl md:text-4xl font-black text-[#111111] dark:text-white mb-4">Pagina non trovata</h1>
      <NuxtLink
        to="/"
        class="inline-flex items-center px-6 py-3 text-white"
        style="background: #E5322D; font-size: 0.875rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase"
      >
        Torna alla Home
      </NuxtLink>
    </div>
  </section>
</template>

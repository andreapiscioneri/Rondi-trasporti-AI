<script setup lang="ts">
useSeo({
  title: 'Pagina non trovata',
  description: 'La pagina richiesta non e disponibile.',
  noindex: true,
})
</script>

<template>
  <section class="min-h-[50vh] flex items-center justify-center px-6 py-24 bg-white dark:bg-[#0A0A0A]">
    <div class="text-center max-w-xl mx-auto">
      <p class="text-[#E5322D] uppercase tracking-[0.2em] text-xs font-bold mb-4">404</p>
      <h1 class="text-3xl md:text-4xl font-black text-[#111111] dark:text-white mb-4 headline-balance">Pagina non trovata</h1>
      <p class="text-[#666666] dark:text-[#999999] mb-8" style="line-height:1.75">La pagina richiesta non esiste o è stata spostata. Torna alla home per continuare la navigazione.</p>
      <NuxtLink
        to="/"
        class="cta-premium inline-flex items-center px-6 py-3 text-white rounded-full"
        style="background: #E5322D; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase"
      >
        Torna alla Home
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeo({
  title: 'Soluzioni Logistiche',
  description: 'Soluzioni logistiche integrate: stoccaggio, distribuzione, pratiche doganali e controllo flussi.',
  path: '/soluzioni-logistiche',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Soluzioni Logistiche', href: '/soluzioni-logistiche' },
    ]),
    buildServiceSchema('Soluzioni Logistiche', 'Integrazione di magazzino, distribuzione e processi doganali in un unico flusso.', {
      url: 'https://www.trasportirondi.it/soluzioni-logistiche',
      areaServed: ['Italia', 'Europa'],
    }),
  ],
})
</script>

<template>
  <div>
    <PageHeroBanner :hero="{ image: 'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2200', alt: 'Soluzioni Logistiche', tag: 'Servizio dedicato', title: 'Soluzioni Logistiche', subtitle: 'Filiera integrata tra magazzino, distribuzione e dogana.' }" />
    <section class="page-section page-section--light">
      <div class="section-shell max-w-4xl">
        <h2 class="mb-4 text-[#111111] dark:text-white headline-balance" style="font-size:clamp(1.7rem,3vw,2.4rem);font-weight:800">Una supply chain piu fluida</h2>
        <p class="mb-8 text-[#666666] dark:text-[#999999]" style="line-height:1.78">Unifichiamo stoccaggio, handling, distribuzione e compliance doganale in un modello operativo scalabile e orientato ai KPI logistici.</p>
        <NuxtLink to="/preventivo" class="cta-premium inline-flex items-center rounded-full px-6 py-3 text-white" style="background:#E5322D;font-size:0.82rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">Richiedi preventivo</NuxtLink>
      </div>
    </section>
  </div>
</template>

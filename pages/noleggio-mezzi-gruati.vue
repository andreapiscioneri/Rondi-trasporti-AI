<script setup lang="ts">
useSeo({
  title: 'Noleggio Mezzi Gruati',
  description: 'Noleggio mezzi gruati con operatori qualificati per sollevamenti e movimentazioni industriali complesse.',
  path: '/noleggio-mezzi-gruati',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Noleggio Mezzi Gruati', href: '/noleggio-mezzi-gruati' },
    ]),
    buildServiceSchema('Noleggio Mezzi Gruati', 'Mezzi gruati e supporto operativo per sollevamenti complessi.', {
      url: 'https://www.trasportirondi.it/noleggio-mezzi-gruati',
      areaServed: ['Italia'],
    }),
  ],
})
</script>

<template>
  <div>
    <PageHeroBanner :hero="{ image: 'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2200', alt: 'Noleggio Mezzi Gruati', tag: 'Servizio dedicato', title: 'Noleggio Mezzi Gruati', subtitle: 'Potenza di sollevamento e precisione operativa per cantieri e impianti.' }" />
    <section class="page-section page-section--light">
      <div class="section-shell max-w-4xl">
        <h2 class="mb-4 text-[#111111] dark:text-white headline-balance" style="font-size:clamp(1.7rem,3vw,2.4rem);font-weight:800">Interventi di sollevamento ad alta affidabilita</h2>
        <p class="mb-8 text-[#666666] dark:text-[#999999]" style="line-height:1.78">Mettiamo a disposizione mezzi e competenze per movimentazioni industriali, installazioni e operazioni tecniche con piani esecutivi dettagliati.</p>
        <NuxtLink to="/preventivo" class="cta-premium inline-flex items-center rounded-full px-6 py-3 text-white" style="background:#E5322D;font-size:0.82rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">Richiedi preventivo</NuxtLink>
      </div>
    </section>
  </div>
</template>

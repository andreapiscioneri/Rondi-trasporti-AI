<script setup lang="ts">
useSeo({
  title: 'Trasporto Internazionale',
  description: 'Trasporto internazionale su rotte consolidate europee con supporto doganale e coordinamento operativo.',
  path: '/trasporto-internazionale',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Trasporto Internazionale', href: '/trasporto-internazionale' },
    ]),
    buildServiceSchema('Trasporto Internazionale', 'Rotte internazionali consolidate con gestione documentale e doganale.', {
      url: 'https://www.trasportirondi.it/trasporto-internazionale',
      areaServed: ['Italia', 'Europa'],
    }),
  ],
})
</script>

<template>
  <div>
    <PageHeroBanner :hero="{ image: 'https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2200', alt: 'Trasporto Internazionale', tag: 'Servizio dedicato', title: 'Trasporto Internazionale', subtitle: 'Rotte europee affidabili con presidio documentale e doganale.' }" />
    <section class="page-section page-section--light">
      <div class="section-shell max-w-4xl">
        <h2 class="mb-4 text-[#111111] dark:text-white headline-balance" style="font-size:clamp(1.7rem,3vw,2.4rem);font-weight:800">Oltre confine, con controllo totale</h2>
        <p class="mb-8 text-[#666666] dark:text-[#999999]" style="line-height:1.78">Coordiniamo spedizioni internazionali con partner selezionati e gestione completa delle pratiche per ridurre tempi e criticita operative.</p>
        <NuxtLink to="/preventivo" class="cta-premium inline-flex items-center rounded-full px-6 py-3 text-white" style="background:#E5322D;font-size:0.82rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">Richiedi preventivo</NuxtLink>
      </div>
    </section>
  </div>
</template>

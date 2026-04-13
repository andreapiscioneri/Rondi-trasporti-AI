<script setup lang="ts">
useSeo({
  title: 'Trasporto Eccezionale',
  description: 'Trasporto eccezionale per carichi fuori sagoma e fuori massa con pianificazione tecnica dedicata.',
  path: '/trasporto-eccezionale',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Trasporto Eccezionale', href: '/trasporto-eccezionale' },
    ]),
    buildServiceSchema('Trasporto Eccezionale', 'Movimentazione di carichi fuori sagoma con iter autorizzativo e percorso dedicato.', {
      url: 'https://www.trasportirondi.it/trasporto-eccezionale',
      areaServed: ['Italia', 'Europa'],
    }),
  ],
})
</script>

<template>
  <div>
    <PageHeroBanner :hero="{ image: 'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2200', alt: 'Trasporto Eccezionale', tag: 'Servizio dedicato', title: 'Trasporto Eccezionale', subtitle: 'Carichi speciali con ingegnerizzazione del trasporto e sicurezza operativa.' }" />
    <section class="page-section page-section--light">
      <div class="section-shell max-w-4xl">
        <h2 class="mb-4 text-[#111111] dark:text-white headline-balance" style="font-size:clamp(1.7rem,3vw,2.4rem);font-weight:800">Quando il carico e fuori standard</h2>
        <p class="mb-8 text-[#666666] dark:text-[#999999]" style="line-height:1.78">Progettiamo il trasporto eccezionale dal sopralluogo al posizionamento finale, con iter autorizzativo e coordinamento tecnico dedicato.</p>
        <NuxtLink to="/preventivo" class="cta-premium inline-flex items-center rounded-full px-6 py-3 text-white" style="background:#E5322D;font-size:0.82rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">Richiedi preventivo</NuxtLink>
      </div>
    </section>
  </div>
</template>

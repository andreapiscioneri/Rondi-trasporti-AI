<script setup lang="ts">
useSeo({
  title: 'Trasporto Standard',
  description: 'Servizio di trasporto standard nazionale con rete capillare, monitoraggio continuo e pianificazione puntuale.',
  path: '/trasporto-standard',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Trasporto Standard', href: '/trasporto-standard' },
    ]),
    buildServiceSchema('Trasporto Standard', 'Servizio di trasporto standard nazionale con rete capillare e pianificazione puntuale.', {
      url: 'https://www.trasportirondi.it/trasporto-standard',
      areaServed: ['Italia'],
    }),
  ],
})
</script>

<template>
  <div>
    <PageHeroBanner
      :hero="{
        image: 'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2200',
        alt: 'Trasporto Standard',
        tag: 'Servizio dedicato',
        title: 'Trasporto Standard',
        subtitle: 'Copertura nazionale per spedizioni industriali con controllo operativo end-to-end.',
      }"
    />

    <section class="page-section page-section--light">
      <div class="section-shell max-w-4xl">
        <h2 class="mb-4 text-[#111111] dark:text-white headline-balance" style="font-size:clamp(1.7rem,3vw,2.4rem);font-weight:800">Affidabilita quotidiana su scala nazionale</h2>
        <p class="mb-8 text-[#666666] dark:text-[#999999]" style="line-height:1.78">Gestiamo tratte programmate e richieste spot con flotta moderna, monitoraggio continuo e team operativo dedicato alla puntualita.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div class="rounded-[1.2rem] border border-black/10 p-5 dark:border-white/10 dark:bg-[#111111]">Tracciamento continuo delle spedizioni</div>
          <div class="rounded-[1.2rem] border border-black/10 p-5 dark:border-white/10 dark:bg-[#111111]">Pianificazione finestre di consegna</div>
          <div class="rounded-[1.2rem] border border-black/10 p-5 dark:border-white/10 dark:bg-[#111111]">Gestione documentale completa</div>
          <div class="rounded-[1.2rem] border border-black/10 p-5 dark:border-white/10 dark:bg-[#111111]">Supporto operativo rapido</div>
        </div>
        <NuxtLink to="/preventivo" class="cta-premium inline-flex items-center rounded-full px-6 py-3 text-white" style="background:#E5322D;font-size:0.82rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">Richiedi preventivo</NuxtLink>
      </div>
    </section>
  </div>
</template>

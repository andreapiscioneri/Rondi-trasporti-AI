<script setup lang="ts">
useSeo({
  title: 'Pagina non trovata',
  description: 'La pagina richiesta non e disponibile.',
  noindex: true,
})
</script>

<template>
  <section class="relative min-h-[72vh] overflow-hidden bg-[#090909] px-6 py-24">
    <div class="absolute inset-0">
      <img
        src="https://images.pexels.com/photos/30037629/pexels-photo-30037629.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200"
        alt=""
        class="h-full w-full object-cover"
        style="filter:brightness(0.22)"
      >
    </div>
    <div class="absolute inset-0" style="background:linear-gradient(160deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.74) 52%, rgba(229,50,45,0.35) 100%)" />

    <div class="relative z-10 mx-auto max-w-3xl">
      <div class="rounded-[2rem] border border-white/15 bg-white/6 p-8 backdrop-blur-xl sm:p-12">
        <p class="mb-4 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-[#E5322D]">Errore 404</p>
        <h1 class="mb-4 headline-balance text-white" style="font-size:clamp(2.1rem,4.4vw,3.9rem);font-weight:800;line-height:1.02">Questa rotta non esiste.</h1>
        <p class="mb-8 max-w-2xl text-white/72" style="font-size:clamp(0.95rem,1.1vw,1.08rem);line-height:1.78">
          La pagina richiesta e stata rimossa, rinominata o non e mai esistita. Riparti dalla home oppure vai ai servizi principali.
        </p>

        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/"
            class="cta-premium inline-flex items-center px-6 py-3 text-white rounded-full"
            style="background:#E5322D;font-size:0.82rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase"
          >
            Torna alla Home
          </NuxtLink>
          <NuxtLink
            to="/servizi"
            class="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-white/90 transition-colors hover:bg-white/10"
            style="font-size:0.82rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase"
          >
            Vai ai Servizi
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

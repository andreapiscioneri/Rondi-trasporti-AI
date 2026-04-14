<script setup lang="ts">
import { BarChart3, Cookie, Settings2 } from 'lucide-vue-next'

useSeo({
  title: 'Cookie Policy',
  description: 'Informativa cookie di Trasporti Rondi: tipologie, finalita e gestione consenso.',
  path: '/cookie-policy',
  jsonLd: buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ]),
})

const cookieTypes = [
  {
    icon: Cookie,
    title: 'Cookie tecnici',
    purpose: 'Abilitano funzionalita essenziali del sito (navigazione, sicurezza, preferenze base).',
    duration: 'Sessione o durata limitata.',
  },
  {
    icon: BarChart3,
    title: 'Cookie analitici',
    purpose: 'Raccolgono dati aggregati sull\'utilizzo del sito per migliorare contenuti e performance.',
    duration: 'Variabile, in base allo strumento analytics.',
  },
  {
    icon: Settings2,
    title: 'Preferenze consenso',
    purpose: 'Memorizzano la tua scelta sul banner cookie per evitare richieste ripetute.',
    duration: 'Fino a revoca o cancellazione dati browser.',
  },
]
</script>

<template>
  <div>
    <section class="page-section page-section--dark relative overflow-hidden">
      <div class="absolute inset-0" style="background:linear-gradient(145deg,rgba(8,8,8,0.96) 0%, rgba(18,18,18,0.9) 48%, rgba(229,50,45,0.26) 100%)" />
      <div class="section-shell relative z-10">
        <p class="mb-3 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-[#E5322D]">Trasparenza cookie</p>
        <h1 class="mb-4 max-w-3xl text-white headline-balance" style="font-size:clamp(2rem,4.4vw,3.6rem);font-weight:800;line-height:1.04">Cookie Policy</h1>
        <p class="max-w-3xl text-white/72" style="font-size:1rem;line-height:1.78">Questa informativa spiega come usiamo i cookie, quali dati raccolgono e come puoi gestire il consenso in qualsiasi momento.</p>
      </div>
    </section>

    <section class="page-section page-section--light !pt-8">
      <div class="section-shell">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 mb-10">
          <article v-for="item in cookieTypes" :key="item.title" class="rounded-[1.25rem] border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#111111]">
            <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E5322D] text-white">
              <component :is="item.icon" :size="18" />
            </div>
            <h2 class="mb-2 text-[1rem] font-bold text-[#111111] dark:text-white">{{ item.title }}</h2>
            <p class="mb-2 text-[0.88rem] leading-7 text-[#666666] dark:text-[#aaaaaa]">{{ item.purpose }}</p>
            <p class="text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-[#888888]">{{ item.duration }}</p>
          </article>
        </div>

        <div class="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#111111]">
          <div class="space-y-6 text-[#444444] dark:text-[#cccccc]" style="line-height:1.82">
            <div>
              <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Gestione del consenso</h3>
              <p>Al primo accesso viene mostrato un banner che permette di accettare o rifiutare i cookie non necessari. La scelta viene registrata localmente e puo essere modificata cancellando i dati del browser.</p>
            </div>
            <div>
              <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Come disabilitare i cookie dal browser</h3>
              <p>Puoi limitare o bloccare i cookie dalle impostazioni del browser. La disattivazione dei cookie tecnici potrebbe compromettere alcune funzionalita del sito.</p>
            </div>
            <div>
              <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Aggiornamenti della policy</h3>
              <p>La presente Cookie Policy puo essere aggiornata periodicamente per adeguamenti normativi o tecnici. Ti invitiamo a consultarla regolarmente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

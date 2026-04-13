<script setup lang="ts">
import { Database, Scale, ShieldCheck } from 'lucide-vue-next'

useSeo({
  title: 'Privacy Policy',
  description: 'Informativa privacy di Trasporti Rondi ai sensi del GDPR.',
  path: '/privacy-policy',
  jsonLd: buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ]),
})

const highlights = [
  {
    icon: Database,
    title: 'Dati trattati',
    text: 'Dati di contatto, dati aziendali e informazioni operative strettamente necessarie alla gestione della richiesta.',
  },
  {
    icon: Scale,
    title: 'Base giuridica',
    text: 'Esecuzione di misure precontrattuali/contrattuali, obblighi di legge, legittimo interesse e consenso quando richiesto.',
  },
  {
    icon: ShieldCheck,
    title: 'Conservazione',
    text: 'Conserviamo i dati per il tempo necessario alle finalita dichiarate e applichiamo misure di sicurezza tecniche e organizzative.',
  },
]
</script>

<template>
  <div>
    <section class="page-section page-section--dark relative overflow-hidden">
      <div class="absolute inset-0" style="background:linear-gradient(145deg,rgba(8,8,8,0.96) 0%, rgba(18,18,18,0.9) 48%, rgba(229,50,45,0.26) 100%)" />
      <div class="section-shell relative z-10">
        <p class="mb-3 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-[#E5322D]">Informativa GDPR</p>
        <h1 class="mb-4 max-w-3xl text-white headline-balance" style="font-size:clamp(2rem,4.4vw,3.6rem);font-weight:800;line-height:1.04">Privacy Policy</h1>
        <p class="max-w-3xl text-white/72" style="font-size:1rem;line-height:1.78">Ai sensi del Regolamento UE 2016/679 (GDPR), Trasporti Rondi tratta i dati personali in modo lecito, corretto e trasparente per finalita connesse ai servizi richiesti.</p>
      </div>
    </section>

    <section class="page-section page-section--light !pt-12">
      <div class="section-shell">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 mb-10">
          <article v-for="item in highlights" :key="item.title" class="rounded-[1.25rem] border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#111111]">
            <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E5322D] text-white">
              <component :is="item.icon" :size="18" />
            </div>
            <h2 class="mb-2 text-[1rem] font-bold text-[#111111] dark:text-white">{{ item.title }}</h2>
            <p class="text-[0.88rem] leading-7 text-[#666666] dark:text-[#aaaaaa]">{{ item.text }}</p>
          </article>
        </div>

        <div class="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#111111]">
          <div class="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
            <aside class="text-[0.76rem] font-bold uppercase tracking-[0.12em] text-[#888888]">
              <p class="mb-3 text-[#E5322D]">Indice</p>
              <ul class="space-y-2">
                <li>Titolare del trattamento</li>
                <li>Finalita e basi giuridiche</li>
                <li>Destinatari dei dati</li>
                <li>Periodo di conservazione</li>
                <li>Diritti dell'interessato</li>
              </ul>
            </aside>

            <div class="space-y-7 text-[#444444] dark:text-[#cccccc]" style="line-height:1.82">
              <div>
                <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Titolare del trattamento</h3>
                <p>Trasporti Rondi S.p.A., Via dell'Industria 42, 25121 Brescia (BS), Italia. Email di contatto: info@trasportirondi.it.</p>
              </div>
              <div>
                <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Finalita e basi giuridiche</h3>
                <p>I dati personali sono trattati per gestione richieste commerciali, preventivi, assistenza, adempimenti contrattuali e obblighi di legge. La base giuridica varia in funzione della finalita: esecuzione di misure precontrattuali/contrattuali, obbligo legale, legittimo interesse o consenso.</p>
              </div>
              <div>
                <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Destinatari dei dati</h3>
                <p>I dati possono essere trattati da personale autorizzato e fornitori tecnici nominati responsabili del trattamento, nel rispetto delle istruzioni ricevute e delle misure di sicurezza applicabili.</p>
              </div>
              <div>
                <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Periodo di conservazione</h3>
                <p>I dati sono conservati per il tempo necessario al perseguimento delle finalita indicate e secondo i termini previsti dalla normativa applicabile.</p>
              </div>
              <div>
                <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Diritti dell'interessato</h3>
                <p>Puoi esercitare i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e portabilita, nonche proporre reclamo all'autorita competente, scrivendo a info@trasportirondi.it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

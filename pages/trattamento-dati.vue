<script setup lang="ts">
import { FileCheck2, LockKeyhole, Users } from 'lucide-vue-next'

useSeo({
  title: 'Trattamento Dati Personali',
  description: 'Informazioni sul trattamento dei dati personali e basi giuridiche adottate da Trasporti Rondi.',
  path: '/trattamento-dati',
  jsonLd: buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Trattamento Dati', href: '/trattamento-dati' },
  ]),
})

const pillars = [
  {
    icon: Users,
    title: 'Categorie interessati',
    text: 'Clienti, potenziali clienti, referenti aziendali, candidati e utenti che interagiscono con il sito.',
  },
  {
    icon: FileCheck2,
    title: 'Finalita operative',
    text: 'Preventivazione, gestione rapporti commerciali, supporto, adempimenti amministrativi e normativi.',
  },
  {
    icon: LockKeyhole,
    title: 'Sicurezza',
    text: 'Misure tecniche e organizzative proporzionate al rischio per proteggere disponibilita, integrita e riservatezza dei dati.',
  },
]
</script>

<template>
  <div>
    <section class="page-section page-section--dark relative overflow-hidden">
      <div class="absolute inset-0" style="background:linear-gradient(150deg,rgba(8,8,8,0.96) 0%, rgba(18,18,18,0.9) 42%, rgba(229,50,45,0.24) 100%)" />
      <div class="section-shell relative z-10 max-w-5xl">
        <p class="mb-3 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-[#E5322D]">Compliance e responsabilita</p>
        <h1 class="mb-4 text-white headline-balance" style="font-size:clamp(2rem,4.4vw,3.6rem);font-weight:800;line-height:1.04">Trattamento Dati Personali</h1>
        <p class="text-white/72" style="line-height:1.78">Trasporti Rondi tratta i dati personali nel rispetto del GDPR secondo principi di liceita, minimizzazione, trasparenza e limitazione della conservazione.</p>
      </div>
    </section>

    <section class="page-section page-section--light !pt-10">
      <div class="section-shell">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 mb-10">
          <article v-for="item in pillars" :key="item.title" class="rounded-[1.25rem] border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#111111]">
            <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E5322D] text-white">
              <component :is="item.icon" :size="18" />
            </div>
            <h2 class="mb-2 text-[1rem] font-bold text-[#111111] dark:text-white">{{ item.title }}</h2>
            <p class="text-[0.88rem] leading-7 text-[#666666] dark:text-[#aaaaaa]">{{ item.text }}</p>
          </article>
        </div>

        <div class="rounded-[1.5rem] border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#111111]">
          <div class="space-y-7 text-[#444444] dark:text-[#cccccc]" style="line-height:1.82">
            <div>
              <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Tipologie di dati trattati</h3>
              <p>Dati anagrafici e di contatto, informazioni aziendali, dati tecnici di navigazione e dati operativi conferiti tramite form o comunicazioni dirette.</p>
            </div>
            <div>
              <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Basi giuridiche</h3>
              <p>Il trattamento si fonda su esecuzione del contratto o misure precontrattuali, obblighi di legge, legittimo interesse del titolare e consenso dell'interessato quando necessario.</p>
            </div>
            <div>
              <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Modalita di trattamento</h3>
              <p>I dati sono trattati con strumenti elettronici e organizzativi idonei, da soggetti autorizzati, nel rispetto dei principi di riservatezza e minimizzazione.</p>
            </div>
            <div>
              <h3 class="mb-2 text-[1.08rem] font-bold text-[#111111] dark:text-white">Conservazione, trasferimenti e diritti</h3>
              <p>I dati sono conservati per periodi coerenti con le finalita e gli obblighi normativi. Eventuali trasferimenti verso fornitori terzi avvengono con adeguate garanzie. Per esercitare i diritti privacy puoi contattare info@trasportirondi.it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Forklift, ShieldCheck } from 'lucide-vue-next'

const serviceFaq = [
  {
    question: 'Il noleggio include anche operatore?',
    answer: 'Su richiesta mettiamo a disposizione operatore specializzato con abilitazioni aggiornate per gru su autocarro.',
  },
  {
    question: 'Che tipo di movimentazioni coprite?',
    answer: 'Movimentazioni industriali, carichi pesanti, installazioni e attivita di supporto in cantiere.',
  },
  {
    question: 'Il servizio e flessibile su durata e finestre?',
    answer: 'Si, definiamo piani operativi su esigenze specifiche: intervento singolo, giornata o commessa continuativa.',
  },
]

const tabs = [
  {
    label: 'Movimentazione merce',
    title: 'Movimentazione merce',
    description: 'Il noleggio di mezzi gruati consente operazioni di carico/scarico e movimentazione pesante con ampia flessibilita operativa su sito cliente o cantiere.',
    icon: Forklift,
  },
  {
    label: 'Operatori qualificati',
    title: 'Operatori qualificati',
    description: 'Su richiesta integriamo l\'operatore specializzato abilitato alla conduzione di gru su autocarro, per lavorare in sicurezza e conformita normativa.',
    icon: ShieldCheck,
  },
]

const relatedServices = [
  {
    title: 'Trasporto Nazionale',
    href: '/trasporto-nazionale',
    image: 'https://images.pexels.com/photos/12418932/pexels-photo-12418932.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: 'Trasporto Internazionale',
    href: '/trasporto-internazionale',
    image: 'https://images.pexels.com/photos/29399463/pexels-photo-29399463.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: 'Trasporto Eccezionale',
    href: '/trasporto-eccezionale',
    image: 'https://images.pexels.com/photos/12756876/pexels-photo-12756876.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: 'Logistica',
    href: '/soluzioni-logistiche',
    image: 'https://images.pexels.com/photos/12706241/pexels-photo-12706241.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
]

useSeo({
  title: 'Noleggio Mezzi Gruati',
  description: 'Noleggio mezzi gruati con operatori qualificati per sollevamenti e movimentazioni industriali complesse.',
  path: '/noleggio-mezzi-gruati',
  noindex: true,
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Noleggio Mezzi Gruati', href: '/noleggio-mezzi-gruati' },
    ]),
    buildServiceSchema('Noleggio Mezzi Gruati', 'Mezzi gruati e supporto operativo per sollevamenti complessi.', {
      url: 'https://www.trasportirondi.it/noleggio-mezzi-gruati',
      areaServed: ['Italia'],
    }),
    buildFaqSchema(serviceFaq),
  ],
})
</script>

<template>
  <SectionsServiceDetailShowcase
    intro-title="Gru e movimentazioni per lavori pesanti"
    intro-subtitle="Sollevamenti, posizionamenti e interventi tecnici gestiti con mezzi speciali e operatori qualificati."
    :intro-paragraphs="[
      'La nostra flotta comprende mezzi con gru a braccio di ultima generazione disponibili per noleggio su esigenze operative diverse.',
      'Possiamo integrare operatori qualificati per condurre le operazioni in sicurezza e nel rispetto delle procedure previste.',
    ]"
    intro-image="https://images.pexels.com/photos/31049388/pexels-photo-31049388.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800"
    :tabs="tabs"
    cta-label="Richiedi una quotazione"
    cta-href="/preventivo"
    why-title="Cosa ci differenzia"
    why-text="Processi strutturati, flessibilita operativa e personale specializzato ci permettono di offrire interventi affidabili su scenari complessi."
    :checklist="[
      'Mezzi di ultima generazione',
      'Disponibilita operatori qualificati',
      'Flessibilita di servizio',
      'Parco mezzi ampio e diversificato',
      'Copertura nazionale completa',
    ]"
    :related-services="relatedServices"
  />
</template>

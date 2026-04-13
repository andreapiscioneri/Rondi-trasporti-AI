<script setup lang="ts">
import { Crane, ShieldCheck } from 'lucide-vue-next'

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
    icon: Crane,
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
    image: 'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    title: 'Trasporto Internazionale',
    href: '/trasporto-internazionale',
    image: 'https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    title: 'Trasporto Eccezionale',
    href: '/trasporto-eccezionale',
    image: 'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    title: 'Logistica',
    href: '/soluzioni-logistiche',
    image: 'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
]

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
    buildFaqSchema(serviceFaq),
  ],
})
</script>

<template>
  <SectionsServiceDetailShowcase
    intro-title="Noleggio mezzi gruati"
    intro-subtitle="Movimenta la tua merce con mezzi specializzati e supporto tecnico dedicato."
    :intro-paragraphs="[
      'La nostra flotta comprende mezzi con gru a braccio di ultima generazione disponibili per noleggio su esigenze operative diverse.',
      'Possiamo integrare operatori qualificati per condurre le operazioni in sicurezza e nel rispetto delle procedure previste.',
    ]"
    intro-image="https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1800"
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

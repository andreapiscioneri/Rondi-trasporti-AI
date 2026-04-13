<script setup lang="ts">
import { FileCheck2, Globe, Route } from 'lucide-vue-next'

const serviceFaq = [
  {
    question: 'Gestite pratiche documentali e doganali?',
    answer: 'Si, il team supporta la gestione documentale necessaria per mantenere fluidita operativa sulle tratte internazionali.',
  },
  {
    question: 'Su quali direttrici operate?',
    answer: 'Operiamo su corridoi europei consolidati, con pianificazione in base a priorita merce e finestre di consegna.',
  },
  {
    question: 'Come viene monitorata la spedizione?',
    answer: 'Manteniamo controllo continuo dello stato trasporto e coordinamento operativo fino alla consegna.',
  },
]

const tabs = [
  {
    label: 'Rotte europee',
    title: 'Rotte europee',
    description: 'Gestiamo tratte internazionali con network operativo affidabile e pianificazione su priorita, tempi e criticita logistiche.',
    icon: Route,
  },
  {
    label: 'Presidio documentale',
    title: 'Presidio documentale',
    description: 'Affianchiamo il cliente nella gestione dei documenti necessari per velocizzare i flussi e ridurre interruzioni operative.',
    icon: FileCheck2,
  },
  {
    label: 'Coordinamento continuo',
    title: 'Coordinamento continuo',
    description: 'Il team segue l\'intero ciclo spedizione con controllo stato e supporto nelle fasi piu sensibili del trasporto cross-border.',
    icon: Globe,
  },
]

const relatedServices = [
  {
    title: 'Trasporto Nazionale',
    href: '/trasporto-nazionale',
    image: 'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    title: 'Trasporto Eccezionale',
    href: '/trasporto-eccezionale',
    image: 'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    title: 'Gru e Movimentazioni',
    href: '/gru-e-movimentazioni',
    image: 'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    title: 'Logistica',
    href: '/soluzioni-logistiche',
    image: 'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
]

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
    buildFaqSchema(serviceFaq),
  ],
})
</script>

<template>
  <SectionsServiceDetailShowcase
    intro-title="Trasporto internazionale"
    intro-subtitle="Rotte affidabili verso mercati esteri con coordinamento documentale e operativo."
    :intro-paragraphs="[
      'Pianifichiamo spedizioni internazionali con un approccio strutturato su tempi, tratte e priorita del cliente.',
      'Il presidio documentale e il controllo operativo continuo riducono criticita e aumentano affidabilita lungo tutta la catena di trasporto.',
    ]"
    intro-image="https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1800"
    :tabs="tabs"
    cta-label="Richiedi una quotazione"
    cta-href="/preventivo"
    why-title="Cosa ci differenzia"
    why-text="Metodo operativo, rete affidabile e presidio documentale ci permettono di garantire continuita anche su tratte internazionali complesse."
    :checklist="[
      'Assistenza continuativa',
      'Supporto documentale',
      'Flessibilita di servizio',
      'Coordinamento operativo dedicato',
      'Copertura internazionale su direttrici consolidate',
    ]"
    :related-services="relatedServices"
  />
</template>

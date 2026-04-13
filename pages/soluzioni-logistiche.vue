<script setup lang="ts">
import { Boxes, Forklift } from 'lucide-vue-next'

const serviceFaq = [
  {
    question: 'Gestite sia stoccaggio sia ridistribuzione?',
    answer: 'Si, il servizio integra ritiro, stoccaggio e ridistribuzione verso clienti o cantieri.',
  },
  {
    question: 'Offrite supporto anche presso sedi cliente?',
    answer: 'Su richiesta possiamo organizzare movimentazioni presso la sede del cliente con personale qualificato.',
  },
  {
    question: 'Come migliorate i tempi di movimentazione?',
    answer: 'Centralizziamo i flussi logistici in un unico coordinamento operativo per ridurre attese e rilavorazioni.',
  },
]

const tabs = [
  {
    label: 'Stoccaggio magazzino',
    title: 'Stoccaggio magazzino',
    description: 'Organizziamo spazi e flussi di deposito per migliorare rotazione merce, ridurre stock improduttivo e accelerare la fase di preparazione spedizioni.',
    icon: Boxes,
  },
  {
    label: 'Logistica integrata',
    title: 'Logistica integrata',
    description: 'Gestiamo in modo coordinato ritiro, stoccaggio e ridistribuzione presso clienti, con visione unica della filiera e controllo dei passaggi operativi.',
    icon: Forklift,
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
    title: 'Gru e Movimentazioni',
    href: '/gru-e-movimentazioni',
    image: 'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
]

useSeo({
  title: 'Soluzioni Logistiche',
  description: 'Soluzioni logistiche integrate: stoccaggio, distribuzione, pratiche doganali e controllo flussi.',
  path: '/soluzioni-logistiche',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Soluzioni Logistiche', href: '/soluzioni-logistiche' },
    ]),
    buildServiceSchema('Soluzioni Logistiche', 'Integrazione di magazzino, distribuzione e processi doganali in un unico flusso.', {
      url: 'https://www.trasportirondi.it/soluzioni-logistiche',
      areaServed: ['Italia', 'Europa'],
    }),
    buildFaqSchema(serviceFaq),
  ],
})
</script>

<template>
  <SectionsServiceDetailShowcase
    intro-title="Soluzioni logistiche"
    intro-subtitle="Stoccaggio e movimentazione merce presso cliente con regia operativa unica."
    :intro-paragraphs="[
      'Affidare la gestione logistica a un partner strutturato permette di ridurre inefficienze, tempi morti e costi operativi indiretti.',
      'Configuriamo servizi di stoccaggio e ridistribuzione in funzione dei volumi reali, migliorando continuita di approvvigionamento e servizio.',
    ]"
    intro-image="https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1800"
    :tabs="tabs"
    cta-label="Richiedi una quotazione"
    cta-href="/preventivo"
    why-title="Cosa ci differenzia"
    why-text="Strutturazione dei processi, flessibilita di servizio e personale qualificato ci consentono di gestire la logistica con precisione e continuita."
    :checklist="[
      'Ottimizzazione stock di magazzino',
      'Disponibilita personale qualificato',
      'Flessibilita di servizio',
      'Parco mezzi ampio e diversificato',
      'Copertura nazionale completa',
    ]"
    :related-services="relatedServices"
  />
</template>

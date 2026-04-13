<script setup lang="ts">
import { Package2, Truck } from 'lucide-vue-next'

const serviceFaq = [
  {
    question: 'Gestite sia carico completo sia parziale?',
    answer: 'Si, pianifichiamo spedizioni full truck load e partite a carico parziale in base a priorita, volumi e frequenza.',
  },
  {
    question: 'Come controllate tempi e puntualita?',
    answer: 'Ogni tratta viene pianificata con finestre condivise e monitorata dal team operativo fino alla consegna finale.',
  },
  {
    question: 'Il servizio e adatto a fiere o eventi?',
    answer: 'Si, possiamo organizzare trasporti con time-slot rigidi e coordinamento su aree di allestimento.',
  },
]

const tabs = [
  {
    label: 'Trasporto a pieno carico',
    title: 'Trasporto a pieno carico',
    description: 'Servizio dedicato con mezzo assegnato alla singola commessa. Pianifichiamo il viaggio in base a priorita del cliente, tempi di consegna e sicurezza del carico, mantenendo controllo completo dell\'intera tratta.',
    icon: Truck,
  },
  {
    label: 'Trasporto a carico parziale',
    title: 'Trasporto a carico parziale',
    description: 'Soluzione flessibile per volumi ridotti o spedizioni frazionate. Ottimizziamo saturazione dei mezzi e costo/tempo di trasporto con programmazione puntuale e tracciabilita operativa.',
    icon: Package2,
  },
]

const relatedServices = [
  {
    title: 'Trasporto Internazionale',
    href: '/trasporto-internazionale',
    image: 'https://images.pexels.com/photos/28520996/pexels-photo-28520996.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: 'Trasporto Eccezionale',
    href: '/trasporto-eccezionale',
    image: 'https://images.pexels.com/photos/28264507/pexels-photo-28264507.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: 'Gru e Movimentazioni',
    href: '/gru-e-movimentazioni',
    image: 'https://images.pexels.com/photos/31310062/pexels-photo-31310062.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: 'Logistica',
    href: '/soluzioni-logistiche',
    image: 'https://images.pexels.com/photos/18982315/pexels-photo-18982315.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
]

useSeo({
  title: 'Trasporto Standard',
  description: 'Servizio di trasporto standard nazionale con rete capillare, monitoraggio continuo e pianificazione puntuale.',
  path: '/trasporto-standard',
  noindex: true,
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Trasporto Standard', href: '/trasporto-standard' },
    ]),
    buildServiceSchema('Trasporto Standard', 'Servizio di trasporto standard nazionale con rete capillare e pianificazione puntuale.', {
      url: 'https://www.trasportirondi.it/trasporto-standard',
      areaServed: ['Italia'],
    }),
    buildFaqSchema(serviceFaq),
  ],
})
</script>

<template>
  <SectionsServiceDetailShowcase
    intro-title="Trasporto nazionale senza margini di errore"
    intro-subtitle="Dalla raccolta alla consegna, ogni tratta e pianificata per mantenere tempi, controllo e continuita operativa."
    :intro-paragraphs="[
      'Siamo specializzati nel trasporto su gomma di merci industriali con una flotta proprietaria ampia e modulabile.',
      'Pianifichiamo ogni spedizione per offrire la soluzione piu efficiente in termini di tempi, saturazione mezzo e sicurezza del carico.',
    ]"
    intro-image="https://images.pexels.com/photos/31723807/pexels-photo-31723807.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800"
    :tabs="tabs"
    cta-label="Richiedi una quotazione"
    cta-href="/preventivo"
    why-title="Cosa ci differenzia"
    why-text="Strutturazione dei processi, flessibilita di servizio e professionalita operativa ci consentono di affrontare ogni spedizione con metodo e precisione."
    :checklist="[
      'Assistenza continuativa',
      'Personale qualificato',
      'Flessibilita di servizio',
      'Tracciabilita del carico',
      'Parco mezzi ampio e diversificato',
      'Copertura nazionale completa',
    ]"
    :related-services="relatedServices"
  />
</template>

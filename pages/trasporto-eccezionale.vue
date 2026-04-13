<script setup lang="ts">
import { Cog, Container, HardHat } from 'lucide-vue-next'

const serviceFaq = [
  {
    question: 'Effettuate sopralluogo prima del trasporto?',
    answer: 'Si, per commesse complesse svolgiamo una fase preliminare tecnica per verificare carico, accessi e percorso.',
  },
  {
    question: 'Supportate anche la documentazione autorizzativa?',
    answer: 'Affianchiamo il cliente nella preparazione della documentazione necessaria secondo normativa vigente.',
  },
  {
    question: 'Quali tipologie di carico gestite?',
    answer: 'Macchinari industriali, prefabbricati, componenti fuori sagoma e carichi speciali ad alta complessita.',
  },
]

const tabs = [
  {
    label: 'Trasporto pesante',
    title: 'Trasporto pesante',
    description: 'Per i carichi ad alta massa sviluppiamo un piano logistico dettagliato per gestire sicurezza, percorribilita e stabilita del trasporto in ogni fase operativa.',
    icon: HardHat,
  },
  {
    label: 'Trasporto sagomati',
    title: 'Trasporto sagomati',
    description: 'Nelle spedizioni fuori sagoma analizziamo vincoli di altezza, larghezza e accesso, costruendo una strategia dedicata per prevenire criticita lungo il percorso.',
    icon: Container,
  },
  {
    label: 'Trasporto macchinari',
    title: 'Trasporto macchinari',
    description: 'Gestiamo trasporti di macchinari industriali con supporto tecnico continuo, dal briefing iniziale al posizionamento finale presso lo stabilimento di destinazione.',
    icon: Cog,
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
  title: 'Trasporto Eccezionale',
  description: 'Trasporto eccezionale per carichi fuori sagoma e fuori massa con pianificazione tecnica dedicata.',
  path: '/trasporto-eccezionale',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Trasporto Eccezionale', href: '/trasporto-eccezionale' },
    ]),
    buildServiceSchema('Trasporto Eccezionale', 'Movimentazione di carichi fuori sagoma con iter autorizzativo e percorso dedicato.', {
      url: 'https://www.trasportirondi.it/trasporto-eccezionale',
      areaServed: ['Italia', 'Europa'],
    }),
    buildFaqSchema(serviceFaq),
  ],
})
</script>

<template>
  <SectionsServiceDetailShowcase
    intro-title="Trasporto eccezionale che porta oltre i limiti"
    intro-subtitle="Carichi fuori sagoma, fuori massa e progetti complessi: li studiamo, li autorizziamo e li facciamo viaggiare con precisione."
    :intro-paragraphs="[
      'La gestione della complessita e centrale: per ogni commessa sviluppiamo analisi preventiva, fattibilita percorso e approccio operativo su misura.',
      'Affianchiamo il cliente nella componente documentale e nella preparazione delle fasi critiche per garantire sicurezza e continuita del servizio.',
    ]"
    intro-image="https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1800"
    :tabs="tabs"
    cta-label="Richiedi una quotazione"
    cta-href="/preventivo"
    why-title="Cosa ci differenzia"
    why-text="Esperienza sul campo, struttura operativa e metodo di pianificazione ci permettono di affrontare anche i progetti di trasporto piu complessi."
    :checklist="[
      'Assistenza continuativa',
      'Sopralluogo tecnico preliminare',
      'Personale qualificato',
      'Flessibilita di servizio',
      'Supporto gestione normativa',
      'Parco mezzi ampio e diversificato',
      'Copertura nazionale completa',
      'Possibilita di integrazione assicurativa',
    ]"
    :related-services="relatedServices"
  />
</template>

<script setup lang="ts">

const { t } = useLang()
const localePath = useLocalePath()
const copy = computed(() => t.value.serviceDetails.national)

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

const relatedServices = computed(() => [
  {
    title: copy.value.related[0],
    href: localePath('/trasporto-internazionale'),
    image: 'https://images.pexels.com/photos/34646235/pexels-photo-34646235.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[1],
    href: localePath('/trasporto-eccezionale'),
    image: 'https://images.pexels.com/photos/12756876/pexels-photo-12756876.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[2],
    href: localePath('/gru-e-movimentazioni'),
    image: 'https://images.pexels.com/photos/29399463/pexels-photo-29399463.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[3],
    href: localePath('/soluzioni-logistiche'),
    image: 'https://images.pexels.com/photos/36878025/pexels-photo-36878025.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
])

useSeo({
  title: copy.value.seoTitle,
  description: copy.value.seoDescription,
  path: '/trasporto-nazionale',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: copy.value.seoTitle, href: '/trasporto-nazionale' },
    ]),
    buildServiceSchema(copy.value.seoTitle, copy.value.seoDescription, {
      url: 'https://www.trasportirondi.it/trasporto-nazionale',
      areaServed: ['Italia'],
    }),
    buildFaqSchema(serviceFaq),
  ],
})
</script>

<template>
  <SectionsServiceDetailShowcase
    :intro-title="copy.introTitle"
    :intro-subtitle="copy.introSubtitle"
    :intro-paragraphs="copy.introParagraphs"
    intro-image="https://images.pexels.com/photos/31723807/pexels-photo-31723807.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800"
    :tabs="copy.tabs"
    :cta-label="copy.ctaLabel"
    :cta-href="localePath('/preventivo')"
    :why-title="copy.whyTitle"
    :why-text="copy.whyText"
    :checklist="copy.checklist"
    :related-services="relatedServices"
  />
</template>

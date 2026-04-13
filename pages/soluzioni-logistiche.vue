<script setup lang="ts">

const { t } = useLang()
const localePath = useLocalePath()
const copy = computed(() => t.value.serviceDetails.logistics)

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

const relatedServices = computed(() => [
  {
    title: copy.value.related[0],
    href: localePath('/trasporto-nazionale'),
    image: 'https://images.pexels.com/photos/27732803/pexels-photo-27732803.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[1],
    href: localePath('/trasporto-internazionale'),
    image: 'https://images.pexels.com/photos/15016531/pexels-photo-15016531.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[2],
    href: localePath('/trasporto-eccezionale'),
    image: 'https://images.pexels.com/photos/36878025/pexels-photo-36878025.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[3],
    href: localePath('/gru-e-movimentazioni'),
    image: 'https://images.pexels.com/photos/30341205/pexels-photo-30341205.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
])

useSeo({
  title: copy.value.seoTitle,
  description: copy.value.seoDescription,
  path: '/soluzioni-logistiche',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: copy.value.seoTitle, href: '/soluzioni-logistiche' },
    ]),
    buildServiceSchema(copy.value.seoTitle, copy.value.seoDescription, {
      url: 'https://www.trasportirondi.it/soluzioni-logistiche',
      areaServed: ['Italia', 'Europa'],
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
    intro-image="https://images.pexels.com/photos/5860937/pexels-photo-5860937.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800"
    :tabs="copy.tabs"
    :cta-label="copy.ctaLabel"
    :cta-href="localePath('/preventivo')"
    :why-title="copy.whyTitle"
    :why-text="copy.whyText"
    :checklist="copy.checklist"
    :related-services="relatedServices"
  />
</template>

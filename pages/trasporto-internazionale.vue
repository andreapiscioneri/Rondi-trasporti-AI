<script setup lang="ts">

const { t } = useLang()
const localePath = useLocalePath()
const copy = computed(() => t.value.serviceDetails.international)

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

const relatedServices = computed(() => [
  {
    title: copy.value.related[0],
    href: localePath('/trasporto-nazionale'),
    image: 'https://images.pexels.com/photos/34646235/pexels-photo-34646235.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[1],
    href: localePath('/trasporto-eccezionale'),
    image: 'https://images.pexels.com/photos/28520996/pexels-photo-28520996.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[2],
    href: localePath('/gru-e-movimentazioni'),
    image: 'https://images.pexels.com/photos/30341205/pexels-photo-30341205.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
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
  path: '/trasporto-internazionale',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: copy.value.seoTitle, href: '/trasporto-internazionale' },
    ]),
    buildServiceSchema(copy.value.seoTitle, copy.value.seoDescription, {
      url: 'https://www.trasportirondi.it/trasporto-internazionale',
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
    intro-image="https://images.pexels.com/photos/30824313/pexels-photo-30824313.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800"
    :tabs="copy.tabs"
    :cta-label="copy.ctaLabel"
    :cta-href="localePath('/preventivo')"
    :why-title="copy.whyTitle"
    :why-text="copy.whyText"
    :checklist="copy.checklist"
    :related-services="relatedServices"
  />
</template>

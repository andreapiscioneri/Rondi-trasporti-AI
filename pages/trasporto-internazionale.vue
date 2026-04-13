<script setup lang="ts">

const { t } = useLang()
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
    href: '/trasporto-nazionale',
    image: 'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    title: copy.value.related[1],
    href: '/trasporto-eccezionale',
    image: 'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    title: copy.value.related[2],
    href: '/gru-e-movimentazioni',
    image: 'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
  },
  {
    title: copy.value.related[3],
    href: '/soluzioni-logistiche',
    image: 'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
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
    intro-image="https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1800"
    :tabs="copy.tabs"
    :cta-label="copy.ctaLabel"
    cta-href="/preventivo"
    :why-title="copy.whyTitle"
    :why-text="copy.whyText"
    :checklist="copy.checklist"
    :related-services="relatedServices"
  />
</template>

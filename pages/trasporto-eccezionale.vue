<script setup lang="ts">

const { t } = useLang()
const localePath = useLocalePath()
const copy = computed(() => t.value.serviceDetails.exceptional)

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

const relatedServices = computed(() => [
  {
    title: copy.value.related[0],
    href: localePath('/trasporto-nazionale'),
    image: 'https://images.pexels.com/photos/28264507/pexels-photo-28264507.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[1],
    href: localePath('/trasporto-internazionale'),
    image: 'https://images.pexels.com/photos/34106714/pexels-photo-34106714.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[2],
    href: localePath('/gru-e-movimentazioni'),
    image: 'https://images.pexels.com/photos/27732803/pexels-photo-27732803.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[3],
    href: localePath('/soluzioni-logistiche'),
    image: 'https://images.pexels.com/photos/18468412/pexels-photo-18468412.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
])

useSeo({
  title: copy.value.seoTitle,
  description: copy.value.seoDescription,
  path: '/trasporto-eccezionale',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: copy.value.seoTitle, href: '/trasporto-eccezionale' },
    ]),
    buildServiceSchema(copy.value.seoTitle, copy.value.seoDescription, {
      url: 'https://www.trasportirondi.it/trasporto-eccezionale',
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
    intro-image="https://images.pexels.com/photos/13961751/pexels-photo-13961751.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800"
    :tabs="copy.tabs"
    :cta-label="copy.ctaLabel"
    :cta-href="localePath('/preventivo')"
    :why-title="copy.whyTitle"
    :why-text="copy.whyText"
    :checklist="copy.checklist"
    :related-services="relatedServices"
  />
</template>

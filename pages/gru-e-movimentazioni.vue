<script setup lang="ts">

const { t } = useLang()
const localePath = useLocalePath()
const copy = computed(() => t.value.serviceDetails.handling)

const serviceFaq = [
  {
    question: 'Il servizio include anche operatore?',
    answer: 'Su richiesta mettiamo a disposizione operatore specializzato con abilitazioni aggiornate per gru su autocarro.',
  },
  {
    question: 'Che tipo di movimentazioni coprite?',
    answer: 'Movimentazioni industriali, carichi pesanti, installazioni e attivita tecniche in cantiere.',
  },
  {
    question: 'Il servizio e flessibile su durata e finestre?',
    answer: 'Si, definiamo piani operativi su esigenze specifiche: intervento singolo, giornata o commessa continuativa.',
  },
]

const relatedServices = computed(() => [
  {
    title: copy.value.related[0],
    href: localePath('/trasporto-nazionale'),
    image: 'https://images.pexels.com/photos/34106714/pexels-photo-34106714.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[1],
    href: localePath('/trasporto-internazionale'),
    image: 'https://images.pexels.com/photos/30341205/pexels-photo-30341205.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[2],
    href: localePath('/trasporto-eccezionale'),
    image: 'https://images.pexels.com/photos/18468412/pexels-photo-18468412.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
  {
    title: copy.value.related[3],
    href: localePath('/soluzioni-logistiche'),
    image: 'https://images.pexels.com/photos/12706241/pexels-photo-12706241.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  },
])

useSeo({
  title: copy.value.seoTitle,
  description: copy.value.seoDescription,
  path: '/gru-e-movimentazioni',
  jsonLd: [
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: copy.value.seoTitle, href: '/gru-e-movimentazioni' },
    ]),
    buildServiceSchema(copy.value.seoTitle, copy.value.seoDescription, {
      url: 'https://www.trasportirondi.it/gru-e-movimentazioni',
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
    intro-image="https://images.pexels.com/photos/31049388/pexels-photo-31049388.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1800"
    :tabs="copy.tabs"
    :cta-label="copy.ctaLabel"
    :cta-href="localePath('/preventivo')"
    :why-title="copy.whyTitle"
    :why-text="copy.whyText"
    :checklist="copy.checklist"
    :related-services="relatedServices"
  />
</template>

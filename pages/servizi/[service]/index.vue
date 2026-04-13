<script setup lang="ts">
import {
  buildGeoLocalPath,
  GEO_CITIES,
  GEO_PRIMARY_CITY,
  getGeoCity,
  getGeoService,
} from '~/shared/local-seo'
import { SEO_BASE_URL } from '~/composables/useSeo'

const route = useRoute()
const serviceSlug = computed(() => String(route.params.service || ''))
const service = computed(() => getGeoService(serviceSlug.value))

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Servizio locale non trovato' })
}

const primaryCity = computed(() => getGeoCity(GEO_PRIMARY_CITY) || GEO_CITIES[0])

const cityLinks = computed(() =>
  GEO_CITIES.map(city => ({
    label: city.name,
    href: buildGeoLocalPath(serviceSlug.value, city.slug),
  })),
)

const canonicalPath = computed(() => `/servizi/${serviceSlug.value}`)

const rootTitle = computed(() => `${service.value!.name} per area geografica`)
const rootDescription = computed(() =>
  `${service.value!.summary} Landing locale disponibile per ${GEO_CITIES.map(c => c.name).join(', ')}.`,
)

const breadcrumb = computed(() => [
  { label: 'Home', href: '/' },
  { label: 'Servizi', href: '/servizi' },
  { label: service.value!.name, href: canonicalPath.value },
])

const serviceSchema = computed(() =>
  buildServiceSchema(service.value!.name, rootDescription.value, {
    url: `${SEO_BASE_URL}${canonicalPath.value}`,
    areaServed: GEO_CITIES.map(c => c.name),
  }),
)

useSeo({
  title: rootTitle.value,
  description: rootDescription.value,
  path: canonicalPath.value,
  jsonLd: [
    buildBreadcrumbSchema(breadcrumb.value.map(item => ({ name: item.label, href: item.href }))),
    serviceSchema.value,
  ],
})

const model = computed(() => ({
  serviceName: service.value!.name,
  cityName: primaryCity.value.name,
  localTitle: rootTitle.value,
  localDescription: `${service.value!.summary} Seleziona la citta per vedere disponibilita, casistiche operative e CTA geolocalizzata.`,
  strategicNote: `Cluster geografici attivi: ${GEO_CITIES.map(c => c.name).join(', ')}.`,
  localIntent: service.value!.localIntent,
  mapEmbedUrl: `https://www.google.com/maps?q=${primaryCity.value.lat},${primaryCity.value.lng}&z=8&output=embed`,
  ctaLabel: `Richiedi preventivo ${service.value!.shortName}`,
  ctaHref: '/preventivo',
  serviceRootHref: '/servizi',
  cityLinks: cityLinks.value,
  districtLinks: [],
  breadcrumbLinks: breadcrumb.value,
  faqItems: [
    {
      question: `In quali citta e disponibile ${service.value!.name}?`,
      answer: `${service.value!.name} e disponibile in ${GEO_CITIES.map(c => c.name).join(', ')} con pianificazione locale dedicata.`,
    },
    {
      question: `Come scelgo la pagina geolocalizzata giusta?`,
      answer: 'Scegli la citta principale dell\'operazione per ottenere contenuti specifici e CTA locale coerente.',
    },
  ],
}))
</script>

<template>
  <div>
    <PageHeroBanner
      :hero="{
        image: 'https://images.pexels.com/photos/31049388/pexels-photo-31049388.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200',
        alt: model.localTitle,
        tag: 'Servizio geolocalizzato',
        title: model.localTitle,
        subtitle: model.localDescription,
      }"
    />

    <SectionsGeoServicePage :model="model" />
  </div>
</template>

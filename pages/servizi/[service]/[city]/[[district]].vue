<script setup lang="ts">
import {
  buildGeoLocalPath,
  GEO_CITIES,
  getCityDistricts,
  getGeoCity,
  getGeoDistrict,
  getGeoService,
} from '~/shared/local-seo'
import { SEO_BASE_URL } from '~/composables/useSeo'

const route = useRoute()

const serviceSlug = computed(() => String(route.params.service || ''))
const citySlug = computed(() => String(route.params.city || ''))
const districtSlug = computed(() => {
  const raw = route.params.district
  if (!raw) return undefined
  if (Array.isArray(raw)) return raw[0]
  return String(raw)
})

const service = computed(() => getGeoService(serviceSlug.value))
const city = computed(() => getGeoCity(citySlug.value))
const district = computed(() => getGeoDistrict(citySlug.value, districtSlug.value))

if (!service.value || !city.value || (districtSlug.value && !district.value)) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Pagina locale non trovata',
  })
}

const localTitle = computed(() => {
  if (district.value) {
    return `${service.value!.name} a ${city.value!.name} - ${district.value.name}`
  }
  return `${service.value!.name} a ${city.value!.name}`
})

const localDescription = computed(() => {
  const serviceText = service.value!.summary
  const cityText = city.value!.strategicNote
  const districtText = district.value
    ? `Focus zona ${district.value.name}: ${district.value.localAngle}.`
    : 'Copertura completa della citta e delle aree produttive limitrofe.'
  return `${serviceText} Operativita locale su ${city.value!.name}: ${cityText}. ${districtText}`
})

const canonicalPath = computed(() =>
  buildGeoLocalPath(serviceSlug.value, citySlug.value, districtSlug.value),
)

const breadcrumbLinks = computed(() => {
  const base = [
    { label: 'Home', href: '/' },
    { label: 'Servizi', href: '/servizi' },
    { label: service.value!.shortName, href: `/servizi/${serviceSlug.value}/${citySlug.value}` },
  ]

  if (district.value) {
    base.push({ label: district.value.name, href: canonicalPath.value })
  }

  return base
})

const cityLinks = computed(() =>
  GEO_CITIES
    .filter(c => c.slug !== city.value!.slug)
    .map(c => ({
      label: c.name,
      href: buildGeoLocalPath(serviceSlug.value, c.slug),
    })),
)

const districtLinks = computed(() =>
  getCityDistricts(city.value!.slug).map(d => ({
    label: d.name,
    href: buildGeoLocalPath(serviceSlug.value, city.value!.slug, d.slug),
  })),
)

const mapEmbedUrl = computed(() => {
  const lat = city.value!.lat
  const lng = city.value!.lng
  return `https://www.google.com/maps?q=${lat},${lng}&z=12&output=embed`
})

const localBusinessSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SEO_BASE_URL}${canonicalPath.value}#local-business`,
  name: `Trasporti Rondi ${city.value!.name}`,
  url: `${SEO_BASE_URL}${canonicalPath.value}`,
  telephone: '+39 030 123 4567',
  email: 'info@trasportirondi.it',
  address: {
    '@type': 'PostalAddress',
    addressLocality: city.value!.name,
    addressRegion: city.value!.province,
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: city.value!.lat,
    longitude: city.value!.lng,
  },
  areaServed: [
    { '@type': 'City', name: city.value!.name },
    { '@type': 'AdministrativeArea', name: city.value!.region },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
}))

const placeSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Place',
  '@id': `${SEO_BASE_URL}${canonicalPath.value}#place`,
  name: district.value ? `${district.value.name}, ${city.value!.name}` : city.value!.name,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: city.value!.lat,
    longitude: city.value!.lng,
  },
}))

const serviceSchema = computed(() =>
  buildServiceSchema(service.value!.name, localDescription.value, {
    url: `${SEO_BASE_URL}${canonicalPath.value}`,
    areaServed: [city.value!.name],
  }),
)

const localFaqItems = computed(() => {
  const zoneLabel = district.value ? `${district.value.name}, ` : ''
  return [
    {
      question: `Offrite ${service.value!.name.toLowerCase()} a ${zoneLabel}${city.value!.name}?`,
      answer: `Si, il servizio e operativo su ${city.value!.name} con coordinamento locale e pianificazione su finestre concordate.`,
    },
    {
      question: `Quali tempi di risposta avete per ${city.value!.name}?`,
      answer: 'La richiesta viene presa in carico rapidamente dal team operativo con piano di fattibilita dedicato.',
    },
    {
      question: `Posso richiedere un sopralluogo tecnico locale?`,
      answer: 'Si, per operazioni complesse organizziamo sopralluoghi e valutazioni tecniche preliminari.',
    },
  ]
})

const faqSchema = computed(() => buildFaqSchema(localFaqItems.value))

useSeo({
  title: localTitle.value,
  description: localDescription.value,
  path: canonicalPath.value,
  geo: {
    region: `IT-${city.value!.province}`,
    placename: city.value!.name,
    position: `${city.value!.lat};${city.value!.lng}`,
    icbm: `${city.value!.lat}, ${city.value!.lng}`,
  },
  jsonLd: [
    buildBreadcrumbSchema(
      breadcrumbLinks.value.map(link => ({ name: link.label, href: link.href })),
    ),
    serviceSchema.value,
    localBusinessSchema.value,
    placeSchema.value,
    faqSchema.value,
  ],
})

const pageModel = computed(() => ({
  serviceName: service.value!.name,
  cityName: city.value!.name,
  districtName: district.value?.name,
  localTitle: localTitle.value,
  localDescription: localDescription.value,
  strategicNote: city.value!.strategicNote,
  localIntent: service.value!.localIntent,
  mapEmbedUrl: mapEmbedUrl.value,
  ctaLabel: `Richiedi preventivo ${city.value!.name}`,
  ctaHref: '/preventivo',
  serviceRootHref: '/servizi',
  cityLinks: cityLinks.value,
  districtLinks: districtLinks.value,
  breadcrumbLinks: breadcrumbLinks.value,
  faqItems: localFaqItems.value,
}))
</script>

<template>
  <div>
    <PageHeroBanner
      :hero="{
        image: 'https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2200',
        alt: pageModel.localTitle,
        tag: `Pagina locale · ${pageModel.cityName}`,
        title: pageModel.localTitle,
        subtitle: pageModel.localDescription,
      }"
    />

    <SectionsGeoServicePage :model="pageModel" />
  </div>
</template>

import { SEO_BASE_URL, SEO_SITE_NAME } from '~/composables/useSeo'

export default defineNuxtPlugin(() => {
  const route = useRoute()

  const canonicalUrl = computed(() => `${SEO_BASE_URL}${route.path}`)

  useSeoMeta({
    applicationName: SEO_SITE_NAME,
    publisher: SEO_SITE_NAME,
    creator: SEO_SITE_NAME,
    formatDetection: 'telephone=yes,address=yes,email=yes',
    ogSiteName: SEO_SITE_NAME,
    ogType: 'website',
    twitterCard: 'summary_large_image',
  })

  useHead(() => ({
    link: [
      { rel: 'canonical', href: canonicalUrl.value },
      { rel: 'preconnect', href: 'https://images.unsplash.com' },
      { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
    ],
    meta: [
      { key: 'og-url', property: 'og:url', content: canonicalUrl.value },
      { key: 'geo-region', name: 'geo.region', content: 'IT-25' },
      { key: 'geo-placename', name: 'geo.placename', content: 'Brescia' },
      { key: 'geo-position', name: 'geo.position', content: '45.5416;10.2118' },
      { key: 'geo-icbm', name: 'ICBM', content: '45.5416, 10.2118' },
    ],
  }))
})

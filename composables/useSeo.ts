/**
 * useSeo — composable that sets <head> meta for every page.
 *
 * Usage:
 *   useSeo({
 *     title: 'Servizi di Trasporto',
 *     description: '...',
 *     path: '/servizi',
 *   })
 *
 * JSON-LD:
 *   useSeo({ ..., jsonLd: buildLocalBusinessSchema() })
 */

const BASE_URL   = 'https://www.trasportirondi.it'
const SITE_NAME  = 'Trasporti Rondi'
const OG_DEFAULT = `${BASE_URL}/og-default.jpg`

export interface SeoOptions {
  /** Page-specific title (without site name suffix) */
  title: string
  description: string
  /** Relative path, e.g. "/servizi" — used for canonical + og:url */
  path?: string
  /** Absolute URL to OG image */
  image?: string
  /** Structured data schema object */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export function useSeo(options: SeoOptions) {
  const isHome    = !options.path || options.path === '/'
  const fullTitle = isHome ? SITE_NAME : `${options.title} | ${SITE_NAME}`
  const canonical = `${BASE_URL}${options.path ?? ''}`
  const ogImage   = options.image ?? OG_DEFAULT

  useHead({
    title: fullTitle,
    link: [{ rel: 'canonical', href: canonical }],
    ...(options.jsonLd && {
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(
          Array.isArray(options.jsonLd) ? options.jsonLd : [options.jsonLd],
        ),
        key: `jsonld-${options.path ?? 'home'}`,
      }],
    }),
  })

  useSeoMeta({
    description:      options.description,
    ogTitle:          fullTitle,
    ogDescription:    options.description,
    ogImage,
    ogType:           'website',
    ogSiteName:       SITE_NAME,
    ogUrl:            canonical,
    twitterCard:      'summary_large_image',
    twitterTitle:     fullTitle,
    twitterDescription: options.description,
    twitterImage:     ogImage,
  })
}

// ─── JSON-LD schema builders ──────────────────────────────────────────────────

/** Organisation + LocalBusiness (homepage) */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.png`,
    description:
      'Trasporti Rondi: logistica industriale nazionale, internazionale ed eccezionale dal 1998.',
    telephone: '+390301234567',
    email: 'info@trasportirondi.it',
    foundingDate: '1998',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Industriale 12',
      addressLocality: 'Brescia',
      addressRegion: 'Lombardia',
      postalCode: '25100',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.5416,
      longitude: 10.2118,
    },
    areaServed: [
      { '@type': 'Country', name: 'Italia' },
      { '@type': 'Continent', name: 'Europa' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi Logistici',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trasporto Nazionale' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trasporto Internazionale' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trasporti Eccezionali' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gru e Sollevamenti' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logistica Integrata' } },
      ],
    },
  }
}

/** Breadcrumb schema */
export function buildBreadcrumbSchema(
  crumbs: Array<{ name: string; href: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${BASE_URL}${c.href}`,
    })),
  }
}

/** Service page schema */
export function buildServiceSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    areaServed: { '@type': 'Country', name: 'IT' },
  }
}

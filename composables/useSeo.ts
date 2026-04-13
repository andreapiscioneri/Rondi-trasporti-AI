/**
 * useSeo — production-grade SEO composable for Trasporti Rondi.
 *
 * Responsibilities:
 *  - <title>  with consistent site-name suffix
 *  - canonical URL (prevents duplicate-content penalties)
 *  - meta description (max 155 chars enforced)
 *  - Open Graph (og:*) + Twitter card
 *  - hreflang alternate links (IT / EN)
 *  - JSON-LD structured data injection
 *  - robots meta (noindex/nofollow for private pages)
 *
 * Schema builders (exported separately):
 *  buildOrganizationSchema  — homepage Organization + LocalBusiness
 *  buildWebSiteSchema       — WebSite with SearchAction
 *  buildBreadcrumbSchema    — BreadcrumbList
 *  buildServiceSchema       — Service
 *  buildFaqSchema           — FAQPage
 *  buildLocalOfficeSchema   — individual LocalBusiness per office
 */

// ─── Constants ────────────────────────────────────────────────────────────────

export const SEO_BASE_URL  = 'https://www.trasportirondi.it'
export const SEO_SITE_NAME = 'Trasporti Rondi'

const OG_DEFAULT = `${SEO_BASE_URL}/og-default.jpg`

/** Maximum safe length for meta description (Google truncates at ~155) */
const MAX_DESC_LEN = 155

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SeoOptions {
  /** Page-specific title — site name appended automatically */
  title: string
  /** Meta description — truncated to 155 chars if longer */
  description: string
  /** Relative path, e.g. "/servizi" — used for canonical + og:url + hreflang */
  path?: string
  /** Override OG image (absolute URL) */
  image?: string
  /** JSON-LD structured data (object or array of objects) */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  /** Set to true for private/internal pages (whistleblowing, etc.) */
  noindex?: boolean
  /** Override og:type (default: 'website') */
  ogType?: 'website' | 'article'
}

// ─── Main composable ──────────────────────────────────────────────────────────

export function useSeo(options: SeoOptions) {
  const isHome    = !options.path || options.path === '/'
  const fullTitle = isHome
    ? SEO_SITE_NAME
    : `${options.title} | ${SEO_SITE_NAME}`

  const canonical = `${SEO_BASE_URL}${options.path ?? ''}`
  const ogImage   = options.image ?? OG_DEFAULT

  // Enforce 155-char limit on description
  const desc = options.description.length > MAX_DESC_LEN
    ? options.description.slice(0, MAX_DESC_LEN - 1) + '…'
    : options.description

  // hreflang alternate links (IT default = canonical; EN = same URL for now)
  // If you add /en/ prefix routes in future, update these hrefs accordingly.
  const alternateLinks = [
    { rel: 'alternate', hreflang: 'it', href: canonical },
    { rel: 'alternate', hreflang: 'en', href: canonical },
    { rel: 'alternate', hreflang: 'x-default', href: canonical },
    { rel: 'canonical', href: canonical },
  ]

  useHead({
    title: fullTitle,
    link: alternateLinks,
    ...(options.jsonLd && {
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify(
          Array.isArray(options.jsonLd) ? options.jsonLd : [options.jsonLd],
        ),
        key: `jsonld-${(options.path ?? 'home').replace(/\//g, '-')}`,
      }],
    }),
  })

  useSeoMeta({
    // Robots
    robots: options.noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',

    // Standard
    description: desc,

    // Open Graph
    ogTitle:       fullTitle,
    ogDescription: desc,
    ogImage,
    ogImageWidth:  '1200',
    ogImageHeight: '630',
    ogType:        options.ogType ?? 'website',
    ogSiteName:    SEO_SITE_NAME,
    ogUrl:         canonical,
    ogLocale:      'it_IT',
    ogLocaleAlternate: ['en_US'],

    // Twitter / X
    twitterCard:        'summary_large_image',
    twitterTitle:       fullTitle,
    twitterDescription: desc,
    twitterImage:       ogImage,
    twitterSite:        '@trasportirondi',

    // Extra
    author: SEO_SITE_NAME,
  })
}

// ═══════════════════════════════════════════════════════════════════════════════
// JSON-LD SCHEMA BUILDERS
// Each builder returns a plain object — pass to useSeo({ jsonLd: [...] })
// or directly inject via useHead({ script: [{ type: 'application/ld+json' }] })
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Organization + LocalBusiness — used on homepage.
 * Google uses this for Knowledge Panel, Maps, structured results.
 */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'MovingCompany'],
    '@id': `${SEO_BASE_URL}/#organization`,
    name: SEO_SITE_NAME,
    legalName: 'Trasporti Rondi S.p.A.',
    url: SEO_BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SEO_BASE_URL}/favicon.png`,
      width: 512,
      height: 512,
    },
    image: `${SEO_BASE_URL}/og-default.jpg`,
    description: 'Trasporti Rondi: leader nel trasporto industriale nazionale e internazionale dal 1998. Gru fino a 1000t, carichi eccezionali, logistica integrata.',
    slogan: 'La forza del trasporto dal 1998',
    telephone: '+39 030 123 4567',
    email: 'info@trasportirondi.it',
    faxNumber: '+39 030 123 4568',
    foundingDate: '1998',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 150 },

    // Primary office (HQ Brescia)
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Industriale 12',
      addressLocality: 'Brescia',
      addressRegion: 'BS',
      postalCode: '25100',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.5416,
      longitude: 10.2118,
    },

    // Secondary locations
    location: [
      {
        '@type': 'Place',
        name: 'Sede Milano',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Milano',
          addressRegion: 'MI',
          addressCountry: 'IT',
        },
      },
      {
        '@type': 'Place',
        name: 'Sede Torino',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Torino',
          addressRegion: 'TO',
          addressCountry: 'IT',
        },
      },
    ],

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],

    // Service area
    areaServed: [
      { '@type': 'Country', name: 'Italia', '@id': 'https://www.wikidata.org/wiki/Q38' },
      { '@type': 'Continent', name: 'Europa' },
      { '@type': 'AdministrativeArea', name: 'Lombardia' },
      { '@type': 'AdministrativeArea', name: 'Piemonte' },
      { '@type': 'AdministrativeArea', name: 'Veneto' },
      { '@type': 'AdministrativeArea', name: 'Emilia-Romagna' },
    ],

    // Certifications
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'ISO 9001:2015' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'ISO 14001:2015' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'ADR' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'SQAS' },
    ],

    // Offered services
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi Logistici e Trasporto Industriale',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trasporto Nazionale', url: `${SEO_BASE_URL}/servizi` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trasporto Internazionale', url: `${SEO_BASE_URL}/servizi` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trasporti Eccezionali', url: `${SEO_BASE_URL}/servizi` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gru e Sollevamenti', url: `${SEO_BASE_URL}/servizi` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logistica Integrata', url: `${SEO_BASE_URL}/servizi` } },
      ],
    },

    sameAs: [
      'https://www.linkedin.com/company/trasporti-rondi',
      'https://www.facebook.com/trasportirondi',
    ],
  }
}

/**
 * WebSite — enables Sitelinks Searchbox in Google results.
 * Always inject on homepage alongside Organization schema.
 */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_BASE_URL}/#website`,
    name: SEO_SITE_NAME,
    url: SEO_BASE_URL,
    description: 'Soluzioni di trasporto industriale, logistica integrata e gru fino a 1000t.',
    inLanguage: ['it-IT', 'en-US'],
    publisher: { '@id': `${SEO_BASE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SEO_BASE_URL}/servizi?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * BreadcrumbList — inject on all inner pages.
 * Also renders as a visual component: see components/ui/Breadcrumb.vue
 */
export function buildBreadcrumbSchema(
  crumbs: Array<{ name: string; href: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SEO_BASE_URL}${crumbs.at(-1)?.href ?? '/'}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SEO_BASE_URL}${c.href}`,
    })),
  }
}

/**
 * Service — for individual service pages or service sections.
 */
export function buildServiceSchema(
  name: string,
  description: string,
  options?: {
    url?: string
    image?: string
    areaServed?: string[]
  },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SEO_BASE_URL}/servizi#${name.toLowerCase().replace(/\s+/g, '-')}`,
    name,
    description,
    url: options?.url ?? `${SEO_BASE_URL}/servizi`,
    image: options?.image,
    provider: {
      '@type': 'Organization',
      '@id': `${SEO_BASE_URL}/#organization`,
      name: SEO_SITE_NAME,
    },
    areaServed: (options?.areaServed ?? ['IT']).map(country => ({
      '@type': 'Country',
      name: country,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Offerte: ${name}`,
    },
  }
}

/**
 * FAQPage — use on service/info pages for rich FAQ results.
 * Each FAQ item should be a real question users might search.
 */
export function buildFaqSchema(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/**
 * Individual LocalBusiness per office (used in contatti.vue).
 * Google Maps uses this to surface the right address + hours.
 */
export function buildLocalOfficeSchema(office: {
  name: string
  street: string
  city: string
  region: string
  postalCode: string
  phone: string
  email: string
  lat: number
  lng: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SEO_BASE_URL}/contatti#${office.city.toLowerCase()}`,
    name: `${SEO_SITE_NAME} — ${office.name}`,
    parentOrganization: { '@id': `${SEO_BASE_URL}/#organization` },
    telephone: office.phone,
    email: office.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.street,
      addressLocality: office.city,
      addressRegion: office.region,
      postalCode: office.postalCode,
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: office.lat,
      longitude: office.lng,
    },
    url: `${SEO_BASE_URL}/contatti`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  }
}

/**
 * JobPosting — for lavora-con-noi page.
 */
export function buildJobPostingSchema(jobs: Array<{
  title: string
  description: string
  city: string
  type?: string
}>) {
  return jobs.map(job => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: new Date().toISOString().split('T')[0],
    validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    employmentType: job.type ?? 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      '@id': `${SEO_BASE_URL}/#organization`,
      name: SEO_SITE_NAME,
      sameAs: SEO_BASE_URL,
      logo: `${SEO_BASE_URL}/favicon.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.city,
        addressCountry: 'IT',
      },
    },
  }))
}

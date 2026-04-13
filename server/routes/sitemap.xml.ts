/**
 * Dynamic sitemap.xml — served at /sitemap.xml
 * Lists all public pages with their priority and change frequency.
 */

import { GEO_LOCAL_PATHS, GEO_SERVICE_ROOT_PATHS } from '~/shared/local-seo'

const BASE_URL = 'https://www.trasportirondi.it'

const PAGES = [
  { path: '/',               priority: '1.0', freq: 'weekly'  },
  { path: '/servizi',        priority: '0.9', freq: 'monthly' },
  { path: '/trasporto-nazionale', priority: '0.86', freq: 'monthly' },
  { path: '/trasporto-internazionale', priority: '0.86', freq: 'monthly' },
  { path: '/trasporto-eccezionale', priority: '0.86', freq: 'monthly' },
  { path: '/gru-e-movimentazioni', priority: '0.84', freq: 'monthly' },
  { path: '/soluzioni-logistiche', priority: '0.84', freq: 'monthly' },
  { path: '/preventivo',     priority: '0.9', freq: 'monthly' },
  { path: '/sostenibilita',  priority: '0.8', freq: 'monthly' },
  { path: '/storia',         priority: '0.7', freq: 'yearly'  },
  { path: '/lavora-con-noi', priority: '0.7', freq: 'weekly'  },
  { path: '/contatti',       priority: '0.9', freq: 'monthly' },
  { path: '/privacy-policy', priority: '0.4', freq: 'yearly'  },
  { path: '/cookie-policy',  priority: '0.4', freq: 'yearly'  },
  { path: '/trattamento-dati', priority: '0.4', freq: 'yearly' },
]

const LOCAL_PAGES = GEO_LOCAL_PATHS.map(path => ({
  path,
  priority: '0.76',
  freq: 'monthly',
}))

const GEO_SERVICE_PAGES = GEO_SERVICE_ROOT_PATHS.map(path => ({
  path,
  priority: '0.82',
  freq: 'monthly',
}))

function withLocaleVariants<T extends { path: string; priority: string; freq: string }>(entries: T[]) {
  return entries.flatMap((entry) => {
    const enPath = entry.path === '/' ? '/en' : `/en${entry.path}`
    return [entry, { ...entry, path: enPath }]
  })
}

export default defineEventHandler(() => {
  const now = new Date().toISOString().split('T')[0]

  const allPages = withLocaleVariants([...PAGES, ...GEO_SERVICE_PAGES, ...LOCAL_PAGES])

  const urls = allPages.map(p => `
  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
})

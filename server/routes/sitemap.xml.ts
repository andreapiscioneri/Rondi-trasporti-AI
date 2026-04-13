/**
 * Dynamic sitemap.xml — served at /sitemap.xml
 * Lists all public pages with their priority and change frequency.
 */

const BASE_URL = 'https://www.trasportirondi.it'

const PAGES = [
  { path: '/',               priority: '1.0', freq: 'weekly'  },
  { path: '/servizi',        priority: '0.9', freq: 'monthly' },
  { path: '/sostenibilita',  priority: '0.8', freq: 'monthly' },
  { path: '/storia',         priority: '0.7', freq: 'yearly'  },
  { path: '/lavora-con-noi', priority: '0.7', freq: 'weekly'  },
  { path: '/contatti',       priority: '0.9', freq: 'monthly' },
]

export default defineEventHandler(() => {
  const now = new Date().toISOString().split('T')[0]

  const urls = PAGES.map(p => `
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

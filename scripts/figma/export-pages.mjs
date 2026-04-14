import fs from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const BASE_URL = process.env.FIGMA_EXPORT_BASE_URL || 'http://localhost:3000'
const OUT_DIR = process.env.FIGMA_EXPORT_OUT_DIR || 'figma-export'
const WAIT_MS = Number(process.env.FIGMA_EXPORT_WAIT_MS || 900)

const routes = [
  '/',
  '/servizi',
  '/trasporto-nazionale',
  '/trasporto-internazionale',
  '/trasporto-eccezionale',
  '/gru-e-movimentazioni',
  '/soluzioni-logistiche',
  '/trasporto-standard',
  '/noleggio-mezzi-gruati',
  '/sostenibilita',
  '/storia',
  '/media',
  '/account',
  '/contatti',
  '/preventivo',
  '/lavora-con-noi',
  '/privacy-policy',
  '/cookie-policy',
  '/trattamento-dati',
  '/whistleblowing',
]

const viewports = [
  { key: 'desktop', width: 1440, height: 1080, scale: 1 },
]

function slugifyRoute(routePath) {
  if (routePath === '/') return 'home'
  return routePath.replace(/^\//, '').replace(/\//g, '__')
}

function withFigmaQuery(rawUrl) {
  const u = new URL(rawUrl)
  u.searchParams.set('figma', '1')
  return u.toString()
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function capturePage(page, url, outputFile) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 })
  await page.waitForLoadState('domcontentloaded')
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
      }
    `,
  })
  await page.evaluate(async () => {
    window.scrollTo(0, 0)
    if ('fonts' in document) {
      try {
        await document.fonts.ready
      } catch {
        // ignore font loading errors during export
      }
    }

    const imgs = Array.from(document.images || [])
    await Promise.all(
      imgs.map((img) => {
        if (img.complete) return Promise.resolve()
        return new Promise((resolve) => {
          img.addEventListener('load', () => resolve(null), { once: true })
          img.addEventListener('error', () => resolve(null), { once: true })
        })
      }),
    )
  })
  await page.waitForTimeout(WAIT_MS)
  await page.screenshot({ path: outputFile, fullPage: true, type: 'png' })
}

async function run() {
  const root = process.cwd()
  const outRoot = path.join(root, OUT_DIR)
  const manifest = {
    baseUrl: BASE_URL,
    generatedAt: new Date().toISOString(),
    figmaModeQuery: 'figma=1',
    routes,
    outputs: [],
  }

  await ensureDir(outRoot)

  const browser = await chromium.launch({ headless: true })

  try {
    for (const viewport of viewports) {
      const viewportDir = path.join(outRoot, viewport.key)
      await ensureDir(viewportDir)

      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: viewport.scale,
        reducedMotion: 'reduce',
      })

      const page = await context.newPage()

      for (const routePath of routes) {
        const pageUrl = withFigmaQuery(`${BASE_URL}${routePath}`)
        const fileName = `${slugifyRoute(routePath)}.png`
        const outputFile = path.join(viewportDir, fileName)

        await capturePage(page, pageUrl, outputFile)

        manifest.outputs.push({
          viewport: viewport.key,
          route: routePath,
          file: path.relative(root, outputFile),
        })

        console.log(`[${viewport.key}] ${routePath} -> ${path.relative(root, outputFile)}`)
      }

      await context.close()
    }
  } finally {
    await browser.close()
  }

  await fs.writeFile(
    path.join(outRoot, 'manifest.json'),
    JSON.stringify(manifest, null, 2),
    'utf8',
  )

  console.log(`\nExport completato in: ${path.relative(root, outRoot)}`)
}

run().catch((err) => {
  console.error('\nErrore export Figma:', err)
  process.exit(1)
})

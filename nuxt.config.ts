import tailwindcss from '@tailwindcss/vite'

// ─── Anti-FOUC inline script ──────────────────────────────────────────────────
// Runs synchronously inside <head>, BEFORE any CSS is parsed.
// Reads the @nuxtjs/color-mode cookie and applies the class immediately.
// This prevents the brief flash of light mode when a dark-mode visitor reloads.
const ANTI_FOUC = `(function(){try{
  var m=document.cookie.match(/(?:^|;\\s*)rondi-theme=([^;]+)/);
  var t=m?decodeURIComponent(m[1]):'light';
  var h=document.documentElement;
  if(t==='dark'){h.classList.add('dark');}else{h.classList.remove('dark');}
}catch(e){}})();`

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
  css: ['~/assets/styles/index.css'],
  vite: {
    plugins: [tailwindcss()],
  },

  // ─── i18n ────────────────────────────────────────────────────────────────────
  i18n: {
    defaultLocale: 'it',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'rondi-lang',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'it',
    },
    locales: [
      { code: 'it', name: 'Italiano' },
      { code: 'en', name: 'English' },
    ],
    vueI18n: './i18n.config.ts',
  },

  // ─── Color mode ──────────────────────────────────────────────────────────────
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',          // Adds class "dark" (no suffix like "dark-mode")
    storageKey: 'rondi-theme', // localStorage key AND cookie name used by module
    // The module auto-uses cookies in SSR context (Nuxt) — storageKey = cookie name
  },

  image: {
    format: ['avif', 'webp'],
    quality: 78,
    densities: [1, 2],
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      hero: {
        modifiers: {
          quality: 80,
          fit: 'cover',
          format: 'avif',
        },
      },
      card: {
        modifiers: {
          quality: 76,
          fit: 'cover',
          format: 'webp',
        },
      },
      gallery: {
        modifiers: {
          quality: 72,
          fit: 'cover',
          format: 'webp',
        },
      },
    },
  },

  // ─── App head ────────────────────────────────────────────────────────────────
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Trasporti Rondi',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        {
          name: 'description',
          content: 'Trasporti Rondi: logistica industriale nazionale, internazionale ed eccezionale.',
        },
        { name: 'theme-color', content: '#080808', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#FAFAF8', media: '(prefers-color-scheme: light)' },
        { name: 'color-scheme', content: 'light dark' },
      ],
      script: [
        {
          // ⚠️ Critical: must run BEFORE stylesheets are parsed
          // tagPosition: 'head' ensures it's in <head>, not end of <body>
          innerHTML: ANTI_FOUC,
          tagPosition: 'head',
          tagPriority: 'critical',
        },
      ],
    },
  },

  compatibilityDate: '2026-04-07',
})

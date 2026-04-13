import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/color-mode'],
  css: ['~/assets/styles/index.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'it',
    strategy: 'no_prefix',
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
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'rondi-theme',
  },
  app: {
    // Page-level transitions — fade + slight vertical shift + blur
    // CSS defined in assets/styles/index.css (.page-enter-*, .page-leave-*)
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Trasporti Rondi',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        {
          name: 'description',
          content: 'Trasporti Rondi: logistica industriale nazionale, internazionale ed eccezionale.',
        },
      ],
    },
  },
  compatibilityDate: '2026-04-07',
})

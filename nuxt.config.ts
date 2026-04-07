import tailwindcss from '@tailwindcss/vite'
import { translations } from './shared/translations'

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
    vueI18n: {
      legacy: false,
      locale: 'it',
      fallbackLocale: 'it',
      messages: translations,
    },
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'rondi-theme',
  },
  app: {
    head: {
      title: 'Trasporti Rondi',
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

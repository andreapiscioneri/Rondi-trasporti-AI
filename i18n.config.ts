import { translations } from './shared/translations'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'it',
  fallbackLocale: 'it',
  messages: translations,
}))

import { computed, ref } from 'vue'
import { translations, type Lang } from '~/shared/translations'

const langState = ref<Lang>('it')

export const useLang = () => {
  const { locale } = useI18n()
  const lang = langState

  if (locale.value === 'it' || locale.value === 'en') {
    lang.value = locale.value as Lang
  }

  const t = computed(() => translations[lang.value])

  const setLang = (next: Lang) => {
    lang.value = next
    locale.value = next
  }

  const toggleLang = () => setLang(lang.value === 'it' ? 'en' : 'it')

  return {
    lang,
    t,
    setLang,
    toggleLang,
  }
}

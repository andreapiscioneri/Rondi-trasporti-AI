import { computed, ref } from 'vue'
import { translations, type Lang } from '~/shared/translations'

const langState = ref<Lang>('it')

export const useLang = () => {
  const lang = langState

  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('rondi-lang') as Lang | null
    if (saved && (saved === 'it' || saved === 'en') && lang.value !== saved) {
      lang.value = saved
    }
  }

  const t = computed(() => translations[lang.value])

  const setLang = (next: Lang) => {
    lang.value = next
    if (typeof window !== 'undefined') {
      localStorage.setItem('rondi-lang', next)
    }
  }

  const toggleLang = () => setLang(lang.value === 'it' ? 'en' : 'it')

  return {
    lang,
    t,
    setLang,
    toggleLang,
  }
}

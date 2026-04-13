import { computed, ref } from 'vue'
import { translations, type Lang } from '~/shared/translations'

const langState = ref<Lang>('it')

export const useLang = () => {
  const { locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const lang = langState

  if (locale.value === 'it' || locale.value === 'en') {
    lang.value = locale.value as Lang
  }

  const t = computed(() => translations[lang.value])

  const setLang = (next: Lang) => {
    lang.value = next
    locale.value = next
  }

  const toggleLang = async () => {
    const next = lang.value === 'it' ? 'en' : 'it'
    const target = switchLocalePath(next)

    setLang(next)

    if (target) {
      await navigateTo(target)
    }
  }

  return {
    lang,
    t,
    setLang,
    toggleLang,
  }
}

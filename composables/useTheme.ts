import { ref } from 'vue'

export type Theme = 'light' | 'dark'

const themeState = ref<Theme>('light')

export const useTheme = () => {
  const theme = themeState

  const applyTheme = (next: Theme) => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', next === 'dark')
      localStorage.setItem('rondi-theme', next)
    }
    theme.value = next
  }

  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('rondi-theme') as Theme | null
    if ((saved === 'light' || saved === 'dark') && theme.value !== saved) {
      applyTheme(saved)
    }
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  return {
    theme,
    toggleTheme,
  }
}

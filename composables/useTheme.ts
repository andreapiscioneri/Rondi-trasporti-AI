import { computed } from 'vue'

export type Theme = 'light' | 'dark'

export const useTheme = () => {
  const colorMode = useColorMode()
  const theme = computed<Theme>(() => (colorMode.value === 'dark' ? 'dark' : 'light'))

  const toggleTheme = () => {
    colorMode.preference = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    theme,
    toggleTheme,
  }
}

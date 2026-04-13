/**
 * useTheme — enhanced theme composable.
 *
 * Improvements over v1:
 *  - exposes `isDark` (computed boolean) alongside `theme`
 *  - toggleTheme() sets `data-theme-transitioning` on <html> so global
 *    CSS transitions kick in ONLY during the toggle, not on every interaction
 *  - Transition window matches the CSS duration (350ms) + 50ms buffer
 */

export type Theme = 'light' | 'dark'

const TRANSITION_DURATION = 400 // ms — must match CSS in index.css

export function useTheme() {
  const colorMode = useColorMode()

  /** Reactive resolved color value ('light' | 'dark') */
  const isDark = computed<boolean>(() => colorMode.value === 'dark')

  /** Same information as string */
  const theme = computed<Theme>(() => (isDark.value ? 'dark' : 'light'))

  function toggleTheme() {
    const next: Theme = isDark.value ? 'light' : 'dark'

    if (import.meta.client) {
      // Mark <html> so the CSS transition block activates
      document.documentElement.setAttribute('data-theme-transitioning', '')
    }

    colorMode.preference = next

    if (import.meta.client) {
      // Remove after transition completes (350ms CSS + 50ms buffer)
      setTimeout(() => {
        document.documentElement.removeAttribute('data-theme-transitioning')
      }, TRANSITION_DURATION)
    }
  }

  function setTheme(value: Theme) {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme-transitioning', '')
    }
    colorMode.preference = value
    if (import.meta.client) {
      setTimeout(() => {
        document.documentElement.removeAttribute('data-theme-transitioning')
      }, TRANSITION_DURATION)
    }
  }

  return {
    theme,
    isDark,
    toggleTheme,
    setTheme,
  }
}

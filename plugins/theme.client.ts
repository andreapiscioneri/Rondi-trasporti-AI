export default defineNuxtPlugin(() => {
  const savedTheme = localStorage.getItem('rondi-theme')
  const savedLang = localStorage.getItem('rondi-lang')

  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark')
  }

  if (!savedLang) {
    localStorage.setItem('rondi-lang', 'it')
  }
})

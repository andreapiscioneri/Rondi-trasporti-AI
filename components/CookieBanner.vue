<script setup lang="ts">
const { lang } = useLang()

const STORAGE_KEY = 'rondi-cookie-consent-v1'
const visible = ref(false)

const copy = computed(() => {
  if (lang.value === 'en') {
    return {
      title: 'We use cookies',
      text: 'We use technical cookies to improve navigation and, with your consent, analytics cookies to optimize services.',
      accept: 'Accept',
      reject: 'Reject',
      privacy: 'Privacy',
      cookie: 'Cookie Policy',
      data: 'Data Processing',
    }
  }

  return {
    title: 'Usiamo i cookie',
    text: 'Utilizziamo cookie tecnici per il funzionamento del sito e, previo consenso, cookie analitici per migliorare i servizi.',
    accept: 'Accetta',
    reject: 'Rifiuta',
    privacy: 'Privacy',
    cookie: 'Cookie Policy',
    data: 'Trattamento Dati',
  }
})

function setConsent(value: 'accepted' | 'rejected') {
  if (!import.meta.client) return
  localStorage.setItem(STORAGE_KEY, value)
  visible.value = false
}

onMounted(() => {
  if (!import.meta.client) return
  const current = localStorage.getItem(STORAGE_KEY)
  visible.value = !current
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div v-if="visible" class="fixed bottom-6 left-1/2 z-[80] w-[min(960px,calc(100%-1.5rem))] -translate-x-1/2 rounded-2xl border border-white/15 bg-[#0F0F0F]/96 p-4 text-white shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-5">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="min-w-0">
          <p class="mb-1 text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[#E5322D]">{{ copy.title }}</p>
          <p class="text-[0.86rem] leading-6 text-white/75">{{ copy.text }}</p>
          <div class="mt-2 flex flex-wrap gap-3 text-[0.75rem] font-semibold text-white/85">
            <NuxtLink to="/privacy-policy" class="hover:text-[#E5322D] transition-colors">{{ copy.privacy }}</NuxtLink>
            <NuxtLink to="/cookie-policy" class="hover:text-[#E5322D] transition-colors">{{ copy.cookie }}</NuxtLink>
            <NuxtLink to="/trattamento-dati" class="hover:text-[#E5322D] transition-colors">{{ copy.data }}</NuxtLink>
          </div>
        </div>

        <div class="flex shrink-0 items-center gap-2">
          <button
            class="rounded-full border border-white/25 px-4 py-2 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-white/90 transition-colors hover:bg-white/10"
            @click="setConsent('rejected')"
          >
            {{ copy.reject }}
          </button>
          <button
            class="rounded-full px-4 py-2 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-white"
            style="background:#E5322D"
            @click="setConsent('accepted')"
          >
            {{ copy.accept }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

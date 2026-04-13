<script setup lang="ts">
import { ChevronUp } from 'lucide-vue-next'

const visible = ref(false)

function updateVisibility() {
  if (!import.meta.client) return
  visible.value = window.scrollY > 320
}

function scrollToTop() {
  if (!import.meta.client) return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility)
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 translate-y-3 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-3 scale-95"
  >
    <button
      v-if="visible"
      aria-label="Torna su"
      class="fixed bottom-6 right-6 z-[70] h-14 w-14 rounded-full text-black shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform hover:scale-105"
      style="background:#E5322D"
      @click="scrollToTop"
    >
      <ChevronUp :size="22" class="mx-auto" />
    </button>
  </Transition>
</template>

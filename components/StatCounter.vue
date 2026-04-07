<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{
  value: string
  label: string
}>()

const RED = '#E5322D'
const root = ref<HTMLElement | null>(null)
const inView = ref(false)
const display = ref('0')
let observer: IntersectionObserver | null = null

const animate = () => {
  const num = Number.parseFloat(props.value.replace(/[^0-9.]/g, ''))
  const suffix = props.value.replace(/[0-9.]/g, '')

  if (Number.isNaN(num)) {
    display.value = props.value
    return
  }

  const duration = 1600
  const start = performance.now()

  const raf = (now: number) => {
    const progress = Math.min((now - start) / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(ease * num * 10) / 10
    display.value = current % 1 === 0 ? `${Math.floor(current)}${suffix}` : `${current}${suffix}`
    if (progress < 1) requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

watch(inView, (visible) => {
  if (visible) animate()
})

onMounted(() => {
  if (!root.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) inView.value = true
    },
    { threshold: 0.3 },
  )
  observer.observe(root.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div ref="root" class="flex flex-col items-center gap-2">
    <span
      class="tabular-nums"
      :style="{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: RED, lineHeight: 1 }"
    >
      {{ display }}
    </span>
    <span
      class="text-center text-white/50"
      style="font-size: 0.7rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase"
    >
      {{ label }}
    </span>
  </div>
</template>

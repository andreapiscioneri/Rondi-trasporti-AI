<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

type Variant = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    delay?: number
    duration?: number
    threshold?: number
    once?: boolean
    tag?: string
    class?: string
  }>(),
  {
    variant: 'fadeUp',
    delay: 0,
    duration: 650,
    threshold: 0.15,
    once: true,
    tag: 'div',
  },
)

const root = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

const initialStyle = computed(() => {
  if (isVisible.value) {
    return { opacity: 1, transform: 'none' }
  }

  switch (props.variant) {
    case 'fadeLeft':
      return { opacity: 0, transform: 'translateX(-48px)' }
    case 'fadeRight':
      return { opacity: 0, transform: 'translateX(48px)' }
    case 'scaleIn':
      return { opacity: 0, transform: 'scale(0.92)' }
    case 'fadeIn':
      return { opacity: 0, transform: 'none' }
    case 'fadeUp':
    default:
      return { opacity: 0, transform: 'translateY(48px)' }
  }
})

const transitionStyle = computed(() => ({
  transitionProperty: 'opacity, transform',
  transitionDuration: `${props.duration}ms`,
  transitionDelay: `${props.delay * 1000}ms`,
  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
}))

onMounted(() => {
  if (!root.value) return
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (props.once && observer) observer.disconnect()
      } else if (!props.once) {
        isVisible.value = false
      }
    },
    { threshold: props.threshold },
  )

  observer.observe(root.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <component
    :is="tag"
    ref="root"
    :class="$attrs.class"
    :style="{ ...initialStyle, ...transitionStyle }"
  >
    <slot />
  </component>
</template>

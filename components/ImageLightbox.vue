<script setup lang="ts">
interface GalleryItem {
  image: string
  alt: string
  title: string
}

const props = defineProps<{
  items: GalleryItem[]
  modelValue: number | null
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number | null]
}>()

const currentIndex = computed(() => props.modelValue ?? 0)
const currentItem = computed(() => props.items[currentIndex.value])
const isOpen = computed(() => props.modelValue !== null)
const dragStartX = ref<number | null>(null)
const dragDelta = ref(0)

function close() {
  emit('update:modelValue', null)
}

function next() {
  if (props.modelValue === null) return
  emit('update:modelValue', (currentIndex.value + 1) % props.items.length)
}

function prev() {
  if (props.modelValue === null) return
  emit('update:modelValue', (currentIndex.value - 1 + props.items.length) % props.items.length)
}

function onKeydown(event: KeyboardEvent) {
  if (!isOpen.value) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowRight') next()
  if (event.key === 'ArrowLeft') prev()
}

function onPointerDown(event: PointerEvent) {
  dragStartX.value = event.clientX
  dragDelta.value = 0
}

function onPointerMove(event: PointerEvent) {
  if (dragStartX.value === null) return
  dragDelta.value = event.clientX - dragStartX.value
}

function onPointerUp() {
  if (Math.abs(dragDelta.value) > 56) {
    if (dragDelta.value < 0) {
      next()
    } else {
      prev()
    }
  }
  dragStartX.value = null
  dragDelta.value = 0
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Transition name="lightbox-fade">
    <div
      v-if="isOpen && currentItem"
      class="fixed inset-0 z-[120] flex items-center justify-center bg-black/92 p-4"
      @click.self="close"
    >
      <button
        class="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white"
        @click="close"
      >
        Close
      </button>

      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/35 p-3 text-white"
        @click="prev"
      >
        <span aria-hidden="true">←</span>
      </button>

      <figure class="w-full max-w-[1500px]">
        <NuxtImg
          :src="currentItem.image"
          :alt="currentItem.alt"
          preset="hero"
          sizes="100vw"
          format="avif,webp"
          quality="82"
          class="max-h-[82svh] w-full rounded-[1.1rem] object-cover"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
        />
        <figcaption class="mt-3 text-center text-sm text-white/75">{{ currentItem.title }}</figcaption>
      </figure>

      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/35 p-3 text-white"
        @click="next"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.35s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>

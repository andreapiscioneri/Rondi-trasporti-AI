<script setup lang="ts">
interface GalleryItem {
  image: string
  alt: string
  title: string
  ratio?: 'portrait' | 'square' | 'landscape' | 'cinema'
}

const props = defineProps<{
  items: GalleryItem[]
}>()

const emit = defineEmits<{
  open: [index: number]
}>()

const ratioClassMap: Record<NonNullable<GalleryItem['ratio']>, string> = {
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  cinema: 'aspect-[16/9]',
}

function ratioClass(item: GalleryItem) {
  const ratio = item.ratio || 'landscape'
  return ratioClassMap[ratio]
}
</script>

<template>
  <section class="px-4 py-16 sm:px-8 lg:px-12">
    <div class="mx-auto grid w-full max-w-[1560px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12">
      <button
        v-for="(item, index) in props.items"
        :key="`${item.image}-${index}`"
        class="group relative overflow-hidden rounded-[1.35rem] border border-black/10 bg-black text-left outline-none focus-visible:ring-2 focus-visible:ring-[#E5322D] dark:border-white/10"
        :class="[
          ratioClass(item),
          index % 6 === 0 ? 'col-span-2 lg:col-span-7' : '',
          index % 6 === 1 ? 'col-span-2 lg:col-span-5' : '',
          index % 6 === 2 ? 'col-span-1 lg:col-span-4' : '',
          index % 6 === 3 ? 'col-span-1 lg:col-span-4' : '',
          index % 6 === 4 ? 'col-span-2 lg:col-span-4' : '',
          index % 6 === 5 ? 'col-span-2 lg:col-span-8' : '',
        ]"
        data-cursor="zoom"
        data-cursor-label="Zoom"
        @click="emit('open', index)"
      >
        <NuxtImg
          :src="item.image"
          :alt="item.alt"
          preset="gallery"
          loading="lazy"
          sizes="(max-width: 1024px) 50vw, 33vw"
          format="webp,avif"
          quality="72"
          class="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.9,.25,1)] group-hover:scale-[1.05]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-100" />
        <div class="absolute bottom-4 left-4 right-4">
          <p class="text-sm font-semibold text-white/90">{{ item.title }}</p>
        </div>
      </button>
    </div>
  </section>
</template>

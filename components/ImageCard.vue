<script setup lang="ts">
interface ImageCardItem {
  image: string
  alt: string
  title: string
  subtitle?: string
  tag?: string
  href?: string
}

defineProps<{
  item: ImageCardItem
}>()
</script>

<template>
  <component
    :is="item.href ? 'NuxtLink' : 'article'"
    :to="item.href"
    class="group relative block overflow-hidden rounded-[1.6rem] border border-white/10 bg-black"
    :data-cursor="item.href ? 'view' : undefined"
    :data-cursor-label="item.href ? 'View' : undefined"
  >
    <NuxtImg
      :src="item.image"
      :alt="item.alt"
      preset="card"
      loading="lazy"
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      format="webp,avif"
      quality="74"
      class="h-[26rem] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.9,.25,1)] group-hover:scale-[1.06] group-hover:rotate-[0.6deg]"
    />

    <div class="absolute inset-0 bg-gradient-to-t from-black/88 via-black/30 to-black/10 transition-colors duration-500 group-hover:from-black/92" />

    <div class="absolute inset-x-0 bottom-0 p-6 text-white">
      <p v-if="item.tag" class="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.19em] text-white/60">{{ item.tag }}</p>
      <h3 class="mb-2 text-[1.35rem] font-extrabold leading-tight tracking-[-0.01em]">{{ item.title }}</h3>
      <p v-if="item.subtitle" class="max-w-sm text-[0.93rem] leading-relaxed text-white/72">{{ item.subtitle }}</p>
    </div>
  </component>
</template>

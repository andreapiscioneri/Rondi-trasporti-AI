export const useLightbox = () => {
  const activeIndex = useState<number | null>('image-lightbox-index', () => null)

  const open = (index: number) => {
    activeIndex.value = index
  }

  const close = () => {
    activeIndex.value = null
  }

  return {
    activeIndex,
    open,
    close,
  }
}

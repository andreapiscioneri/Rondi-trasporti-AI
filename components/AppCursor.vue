<script setup lang="ts">
/**
 * AppCursor — premium custom cursor for pointer devices only.
 *
 * Architecture:
 * - dot  : 8px solid circle, follows mouse with zero lag (direct style mutation).
 * - ring : 40px outline circle, lags behind via lerp in RAF loop.
 *
 * States:
 * - hover   : ring grows + fills red when over links / buttons / [data-cursor-hover].
 * - text    : ring morphs into a thin vertical bar over text nodes.
 * - hidden  : both elements invisible when mouse leaves the viewport.
 * - clicking: slight scale-down pulse on mousedown.
 *
 * Magnetic effect:
 * - Elements with [data-magnetic] attract the cursor and the element itself
 *   follows the mouse with a dampened offset, snapping back on leave.
 */

const dot = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)

// Only render on devices with a fine pointer (mouse / stylus)
const isPointerFine = ref(false)

// Internal state — kept outside Vue reactivity for max perf
let mouseX = 0
let mouseY = 0
let ringX = 0
let ringY = 0
let rafId = 0
let isHovering = false
let isTextCursor = false
let isHidden = true
let isClicking = false

// Active magnetic element & its original transform
let magneticEl: HTMLElement | null = null

// ─── RAF animation loop ───────────────────────────────────────────────────────
function tick() {
  // Lerp ring toward cursor — 0.10 feels premium (not sluggish, not instant)
  ringX += (mouseX - ringX) * 0.1
  ringY += (mouseY - ringY) * 0.1

  if (ring.value) {
    const scale = isClicking ? 0.82 : isHovering ? 1.55 : isTextCursor ? 0.35 : 1
    ring.value.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${scale})`
  }

  rafId = requestAnimationFrame(tick)
}

// ─── Mouse handlers ───────────────────────────────────────────────────────────
function onMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY

  // Dot follows instantly — no lerp
  if (dot.value) {
    dot.value.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
  }

  if (isHidden) {
    isHidden = false
    dot.value?.classList.remove('is-hidden')
    ring.value?.classList.remove('is-hidden')
  }

  // Detect what's under the cursor
  const target = e.target as HTMLElement
  const isInteractive = !!target.closest(
    'a, button, [data-cursor-hover], label, [role="button"]',
  )
  const isText =
    !isInteractive &&
    !!(target.closest('p, h1, h2, h3, h4, h5, h6, span, li, blockquote'))

  if (isInteractive !== isHovering) {
    isHovering = isInteractive
    dot.value?.classList.toggle('is-hovering', isHovering)
    ring.value?.classList.toggle('is-hovering', isHovering)
  }

  if (isText !== isTextCursor) {
    isTextCursor = isText
    ring.value?.classList.toggle('is-text', isTextCursor)
  }
}

function onMouseLeave() {
  isHidden = true
  dot.value?.classList.add('is-hidden')
  ring.value?.classList.add('is-hidden')
}

function onMouseEnter() {
  isHidden = false
  dot.value?.classList.remove('is-hidden')
  ring.value?.classList.remove('is-hidden')
}

function onMouseDown() {
  isClicking = true
  dot.value?.classList.add('is-clicking')
}

function onMouseUp() {
  isClicking = false
  dot.value?.classList.remove('is-clicking')
}

// ─── Magnetic effect ──────────────────────────────────────────────────────────
function onMagneticMove(e: MouseEvent) {
  const el = (e.currentTarget as HTMLElement)
  const rect = el.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  const dx = (e.clientX - cx) * 0.38
  const dy = (e.clientY - cy) * 0.38
  el.style.transition = 'transform 0.15s cubic-bezier(0.2, 1, 0.3, 1)'
  el.style.transform = `translate(${dx}px, ${dy}px)`
  magneticEl = el
}

function onMagneticLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.style.transition = 'transform 0.65s cubic-bezier(0.2, 1, 0.3, 1)'
  el.style.transform = ''
  magneticEl = null
}

function setupMagnetic() {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('mousemove', onMagneticMove)
    el.addEventListener('mouseleave', onMagneticLeave)
  })
}

function teardownMagnetic() {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.removeEventListener('mousemove', onMagneticMove)
    el.removeEventListener('mouseleave', onMagneticLeave)
  })
}

// ─── Lifecycle ────────────────────────────────────────────────────────────────
onMounted(() => {
  isPointerFine.value = window.matchMedia('(pointer: fine)').matches
  if (!isPointerFine.value) return

  // Hide the native cursor globally
  document.documentElement.style.cursor = 'none'

  document.addEventListener('mousemove', onMouseMove, { passive: true })
  document.addEventListener('mouseleave', onMouseLeave)
  document.addEventListener('mouseenter', onMouseEnter)
  document.addEventListener('mousedown', onMouseDown)
  document.addEventListener('mouseup', onMouseUp)

  tick()
  setupMagnetic()
})

onBeforeUnmount(() => {
  document.documentElement.style.cursor = ''
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
  document.removeEventListener('mouseenter', onMouseEnter)
  document.removeEventListener('mousedown', onMouseDown)
  document.removeEventListener('mouseup', onMouseUp)
  cancelAnimationFrame(rafId)
  teardownMagnetic()
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isPointerFine" aria-hidden="true" class="cursor-root">
      <!-- Dot: instant response, no lag -->
      <div ref="dot" class="cursor-dot is-hidden" />
      <!-- Ring: smooth lag via lerp, morphs on state -->
      <div ref="ring" class="cursor-ring is-hidden" />
    </div>
  </Teleport>
</template>

<style scoped>
.cursor-root {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}

/* ── Dot ── */
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e5322d;
  will-change: transform;
  transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
}

.cursor-dot.is-hidden {
  opacity: 0;
}

.cursor-dot.is-hovering {
  width: 4px;
  height: 4px;
  background: #ffffff;
}

.cursor-dot.is-clicking {
  transform: scale(0.7) !important;
}

/* ── Ring ── */
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid rgba(229, 50, 45, 0.7);
  will-change: transform;
  transition:
    opacity 0.25s ease,
    border-color 0.25s ease,
    border-width 0.25s ease,
    background 0.25s ease,
    border-radius 0.3s ease,
    width 0.3s ease,
    height 0.3s ease;
}

.cursor-ring.is-hidden {
  opacity: 0;
}

.cursor-ring.is-hovering {
  border-color: rgba(229, 50, 45, 0.9);
  background: rgba(229, 50, 45, 0.08);
  border-width: 2px;
}

/* Text cursor: thin vertical bar */
.cursor-ring.is-text {
  width: 2px;
  height: 28px;
  border-radius: 2px;
  border-color: rgba(229, 50, 45, 0.6);
  background: rgba(229, 50, 45, 0.15);
}

/* Respect reduced motion — kill custom cursor, fall back to native */
@media (prefers-reduced-motion: reduce) {
  .cursor-root {
    display: none;
  }
}
</style>

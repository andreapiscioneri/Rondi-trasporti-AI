<script setup lang="ts">
/**
 * AppCursor — premium custom cursor for pointer devices.
 *
 * Fixes vs v1:
 *  - dot was missing an opacity transition → disappeared instantly
 *  - hide is now debounced 160ms so tiny mouseleave blips don't flash
 *  - text-mode centering corrected (uses element-specific offsets)
 *  - ring opacity transition extended to 0.4s for a softer fade
 *
 * Architecture:
 *  dot   8px solid circle  — zero-lag, direct style.transform
 *  ring  40px outline ring — smooth lerp (t=0.10) in RAF loop
 *
 * States:  default | hover (links/buttons) | text | hidden | clicking
 * Magnetic: elements with [data-magnetic] follow the cursor with damping
 */

const dot  = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)
const label = ref<HTMLElement | null>(null)

const isPointerFine = ref(false)

// Raw values — never reactive, updated in event handlers + RAF only
let mX = 0, mY = 0         // mouse position
let rX = 0, rY = 0         // ring lerp position
let rafId = 0
let hideTimer = 0           // debounce timer for hiding

// State flags (class toggling is done directly on DOM refs for perf)
let hovering = false
let textMode = false
let hidden   = true
let clicking = false
let mode: 'default' | 'view' | 'zoom' = 'default'

// ─── RAF loop ─────────────────────────────────────────────────────────────────
function tick() {
  rX += (mX - rX) * 0.1
  rY += (mY - rY) * 0.1

  if (ring.value) {
    // Center offsets:
    //  default/hover mode → element is 40×40 → offset -20,-20
    //  text mode          → element is 2×28  → offset -1,-14
    const ox = textMode ? 1  : 20
    const oy = textMode ? 14 : 20
    const sc = clicking ? 0.8 : hovering ? 1.55 : textMode ? 1 : 1

    ring.value.style.transform =
      `translate(${rX - ox}px, ${rY - oy}px) scale(${sc})`
  }

  if (label.value) {
    label.value.style.transform = `translate(${rX + 18}px, ${rY - 24}px)`
  }

  rafId = requestAnimationFrame(tick)
}

// ─── Event handlers ───────────────────────────────────────────────────────────
function onMouseMove(e: MouseEvent) {
  mX = e.clientX
  mY = e.clientY

  // Instant dot
  if (dot.value) {
    dot.value.style.transform = `translate(${mX - 4}px, ${mY - 4}px)`
  }

  // Cancel any pending hide
  if (hidden) {
    clearTimeout(hideTimer)
    hidden = false
    dot.value?.classList.remove('is-hidden')
    ring.value?.classList.remove('is-hidden')
  }

  // Detect interactive vs text elements under cursor
  const target = e.target as HTMLElement
  const nextHover = !!target.closest('a, button, [data-cursor-hover], label, [role="button"], [data-magnetic]')
  const nextText  = !nextHover && !!target.closest('p, h1, h2, h3, h4, h5, h6, span, li, blockquote, em, strong')
  const modeTarget = target.closest<HTMLElement>('[data-cursor]')
  const nextMode = (modeTarget?.dataset.cursor as 'view' | 'zoom' | undefined) ?? 'default'
  const nextLabel = modeTarget?.dataset.cursorLabel ?? ''

  if (nextHover !== hovering) {
    hovering = nextHover
    dot.value?.classList.toggle('is-hovering', hovering)
    ring.value?.classList.toggle('is-hovering', hovering)
  }

  if (nextText !== textMode) {
    textMode = nextText
    ring.value?.classList.toggle('is-text', textMode)
  }

  if (nextMode !== mode) {
    mode = nextMode
    ring.value?.classList.toggle('is-view', mode === 'view')
    ring.value?.classList.toggle('is-zoom', mode === 'zoom')
  }

  if (label.value) {
    label.value.textContent = nextLabel
    label.value.classList.toggle('is-visible', Boolean(nextLabel) && !hidden)
  }
}

function scheduleHide() {
  // 160ms debounce — prevents flash on iframe borders / devtools
  clearTimeout(hideTimer)
  hideTimer = window.setTimeout(() => {
    hidden = true
    dot.value?.classList.add('is-hidden')
    ring.value?.classList.add('is-hidden')
    label.value?.classList.remove('is-visible')
  }, 160)
}

function onMouseDown() {
  clicking = true
  dot.value?.classList.add('is-clicking')
}

function onMouseUp() {
  clicking = false
  dot.value?.classList.remove('is-clicking')
}

// ─── Magnetic effect ──────────────────────────────────────────────────────────
function onMagMove(e: MouseEvent) {
  const el   = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const dx   = (e.clientX - (rect.left + rect.width  / 2)) * 0.36
  const dy   = (e.clientY - (rect.top  + rect.height / 2)) * 0.36
  el.style.transition = 'transform 0.12s cubic-bezier(0.2, 1, 0.3, 1)'
  el.style.transform  = `translate(${dx}px, ${dy}px)`
}

function onMagLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  el.style.transition = 'transform 0.65s cubic-bezier(0.2, 1, 0.3, 1)'
  el.style.transform  = ''
}

function setupMagnetic() {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('mousemove',  onMagMove)
    el.addEventListener('mouseleave', onMagLeave)
  })
}

function teardownMagnetic() {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.removeEventListener('mousemove',  onMagMove)
    el.removeEventListener('mouseleave', onMagLeave)
  })
}

// ─── Lifecycle ────────────────────────────────────────────────────────────────
onMounted(() => {
  isPointerFine.value = window.matchMedia('(pointer: fine)').matches
  if (!isPointerFine.value) return

  document.documentElement.style.cursor = 'none'

  document.addEventListener('mousemove',  onMouseMove, { passive: true })
  document.addEventListener('mouseleave', scheduleHide)
  document.addEventListener('mouseenter', () => clearTimeout(hideTimer))
  document.addEventListener('mousedown',  onMouseDown)
  document.addEventListener('mouseup',    onMouseUp)

  tick()
  setupMagnetic()
})

onBeforeUnmount(() => {
  document.documentElement.style.cursor = ''
  document.removeEventListener('mousemove',  onMouseMove)
  document.removeEventListener('mouseleave', scheduleHide)
  document.removeEventListener('mousedown',  onMouseDown)
  document.removeEventListener('mouseup',    onMouseUp)
  clearTimeout(hideTimer)
  cancelAnimationFrame(rafId)
  teardownMagnetic()
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isPointerFine" class="cursor-root" aria-hidden="true">
      <div ref="dot"  class="cursor-dot  is-hidden" />
      <div ref="ring" class="cursor-ring is-hidden" />
      <div ref="label" class="cursor-label" />
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

/* ── Dot ─────────────────────────────────────────────────────────────────── */
.cursor-dot {
  position: fixed;
  top: 0; left: 0;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #e5322d;
  will-change: transform;
  /* opacity must be in the transition list — was the v1 bug */
  transition: width .2s ease, height .2s ease, background .2s ease, opacity .35s ease;
}

.cursor-dot.is-hidden   { opacity: 0; }
.cursor-dot.is-hovering { width: 5px; height: 5px; background: #fff; }
.cursor-dot.is-clicking { opacity: .7; }

/* ── Ring ────────────────────────────────────────────────────────────────── */
.cursor-ring {
  position: fixed;
  top: 0; left: 0;
  width: 40px; height: 40px;
  border-radius: 50%;
  border: 1.5px solid rgba(229, 50, 45, .65);
  will-change: transform;
  /* Longer transition = softer state changes */
  transition:
    opacity      .4s  ease,
    border-color .25s ease,
    border-width .25s ease,
    background   .25s ease,
    border-radius .3s ease,
    width         .3s cubic-bezier(.2, 1, .3, 1),
    height        .3s cubic-bezier(.2, 1, .3, 1);
}

.cursor-ring.is-hidden  { opacity: 0; }

.cursor-ring.is-hovering {
  border-color: rgba(229, 50, 45, .9);
  background:   rgba(229, 50, 45, .07);
  border-width: 2px;
}

.cursor-ring.is-view {
  border-color: rgba(255, 255, 255, .9);
  background: rgba(255, 255, 255, .10);
}

.cursor-ring.is-zoom {
  border-color: rgba(229, 50, 45, .95);
  background: rgba(229, 50, 45, .12);
}

/* Thin vertical bar over readable text */
.cursor-ring.is-text {
  width: 2px; height: 28px;
  border-radius: 2px;
  border-color: rgba(229, 50, 45, .55);
  background:   rgba(229, 50, 45, .12);
}

.cursor-label {
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(10, 10, 10, 0.84);
  border-radius: 999px;
  padding: 0.35rem 0.55rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #f5f5f5;
  opacity: 0;
  transition: opacity .2s ease;
  pointer-events: none;
  will-change: transform, opacity;
}

.cursor-label.is-visible {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .cursor-root { display: none; }
}
</style>

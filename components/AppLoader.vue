<script setup lang="ts">
/**
 * AppLoader — elegant initial-visit page loader.
 *
 * Shown only on the very first page load in each browser session.
 * Subsequent navigations (route changes) skip it entirely — those
 * are handled by the page transition instead.
 *
 * Sequence:
 *  0ms  — loader mounts (full screen black overlay)
 *  200ms— logo fades in
 *  600ms— red progress line starts growing (CSS animation, no JS timers)
 * 1400ms— overlay fades out, emits 'done' so app.vue removes it from DOM
 */

import logoRondi from '~/assets/images/trasporti_rondi_logo.png'

const TOTAL_DURATION = 1500 // ms before fade-out begins
const FADE_DURATION = 600   // ms for the fade-out transition

const visible = ref(true)
const barActive = ref(false)

onMounted(() => {
  // Skip on subsequent visits in the same browser session
  if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('rl-shown')) {
    visible.value = false
    return
  }

  // Trigger bar animation in next tick so CSS transition fires
  requestAnimationFrame(() => {
    barActive.value = true
  })

  setTimeout(() => {
    visible.value = false
    sessionStorage.setItem('rl-shown', '1')
  }, TOTAL_DURATION)
})
</script>

<template>
  <Transition
    name="loader-fade"
    :duration="FADE_DURATION"
  >
    <div v-if="visible" class="loader-overlay" aria-hidden="true">
      <!-- Logo -->
      <div class="loader-content">
        <img
          :src="logoRondi"
          alt="Trasporti Rondi"
          class="loader-logo"
        >

        <!-- Red progress bar -->
        <div class="loader-track">
          <div
            class="loader-bar"
            :class="{ 'loader-bar--running': barActive }"
          />
        </div>

        <!-- Tagline -->
        <p class="loader-tagline">
          Trasporto Industriale dal 1998
        </p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* ── Overlay ── */
.loader-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: #080808;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Subtle noise texture */
  background-image:
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(229, 50, 45, 0.07), transparent 70%),
    radial-gradient(rgba(255, 255, 255, 0.025) 0.8px, transparent 0.8px);
  background-size: auto, 3px 3px;
}

/* ── Content ── */
.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: loader-content-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
}

.loader-logo {
  width: clamp(140px, 20vw, 200px);
  height: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.95;
}

/* ── Progress track ── */
.loader-track {
  width: clamp(160px, 22vw, 240px);
  height: 1.5px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border-radius: 2px;
}

.loader-bar {
  height: 100%;
  width: 0%;
  background: #e5322d;
  border-radius: 2px;
  transition: width 1s cubic-bezier(0.4, 0, 0.15, 1);
}

.loader-bar--running {
  width: 100%;
}

/* ── Tagline ── */
.loader-tagline {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.28);
}

/* ── Animations ── */
@keyframes loader-content-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Page transition ── */
.loader-fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.loader-fade-leave-to {
  opacity: 0;
  transform: scale(1.03);
}

/* Skip for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .loader-overlay {
    display: none;
  }
}
</style>

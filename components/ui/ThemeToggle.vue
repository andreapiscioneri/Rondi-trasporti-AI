<script setup lang="ts">
/**
 * ThemeToggle — premium animated pill toggle for dark/light mode.
 *
 * Design:
 *  - Track: 50×28px pill, always dark for contrast (works on both themes)
 *  - Knob:  22px circle that slides left↔right
 *  - Icons: Sun (light) and Moon (dark) inside the knob
 *  - Light mode: knob LEFT, sun icon, track subtle
 *  - Dark mode:  knob RIGHT, moon icon, track red-tinted
 *
 * Performance:
 *  - Knob movement via CSS transform (GPU composited)
 *  - No JS animation loop — pure CSS transitions
 *  - GSAP only for the icon swap (instant, no jank)
 *
 * Context-aware via `variant` prop:
 *  - 'on-dark'  : designed for dark header/footer (default)
 *  - 'on-light' : designed for light surfaces
 */

import { Moon, Sun } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    /** 'on-dark' for use in dark navbars; 'on-light' for settings panels */
    variant?: 'on-dark' | 'on-light'
  }>(),
  { variant: 'on-dark' },
)

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="toggle-btn"
    :class="[`toggle-btn--${variant}`, { 'toggle-btn--active': isDark }]"
    :aria-pressed="isDark"
    :aria-label="isDark ? 'Passa a modalità chiara' : 'Passa a modalità scura'"
    :title="isDark ? 'Light mode' : 'Dark mode'"
    @click="toggleTheme"
  >
    <!-- Track -->
    <span class="toggle-track" aria-hidden="true">

      <!-- Sun icon (left side) -->
      <span class="toggle-icon toggle-icon--sun">
        <Sun :size="11" />
      </span>

      <!-- Moon icon (right side) -->
      <span class="toggle-icon toggle-icon--moon">
        <Moon :size="11" />
      </span>

      <!-- Sliding knob -->
      <span class="toggle-knob">
        <!-- Active icon inside knob -->
        <Transition name="icon-swap" mode="out-in">
          <Sun v-if="!isDark" :size="12" class="toggle-knob-icon" />
          <Moon v-else :size="12" class="toggle-knob-icon" />
        </Transition>
      </span>
    </span>
  </button>
</template>

<style scoped>
/* ── Button wrapper ─────────────────────────────────────────────────────────── */
.toggle-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 9999px;

  /* Focus ring */
  outline: none;
}

.toggle-btn:focus-visible .toggle-track {
  box-shadow: 0 0 0 3px rgba(229, 50, 45, 0.45);
}

/* ── Track ──────────────────────────────────────────────────────────────────── */
.toggle-track {
  position: relative;
  display: flex;
  align-items: center;
  width: 50px;
  height: 28px;
  border-radius: 9999px;
  transition:
    background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    border-color     0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow       0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* On dark navbar: track is a subtle lighter-than-bg container */
.toggle-btn--on-dark .toggle-track {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.toggle-btn--on-dark.toggle-btn--active .toggle-track {
  background: rgba(229, 50, 45, 0.22);
  border-color: rgba(229, 50, 45, 0.40);
}

/* On light surface: track adapts to light bg */
.toggle-btn--on-light .toggle-track {
  background: rgba(0, 0, 0, 0.10);
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.toggle-btn--on-light.toggle-btn--active .toggle-track {
  background: rgba(229, 50, 45, 0.15);
  border-color: rgba(229, 50, 45, 0.35);
}

/* ── Background icons (subtle indicators) ───────────────────────────────────── */
.toggle-icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.35;
  transition: opacity 0.25s ease;
}

.toggle-icon--sun  { left: 6px;  color: #fbbf24; }
.toggle-icon--moon { right: 6px; color: #a0aec0; }

/* Dim the inactive side icon */
.toggle-btn--active .toggle-icon--sun   { opacity: 0.18; }
.toggle-btn:not(.toggle-btn--active) .toggle-icon--moon { opacity: 0.18; }

/* ── Sliding knob ───────────────────────────────────────────────────────────── */
.toggle-knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* GPU-composited slide — transform only, no layout reflow */
  transform: translateX(0);
  transition: transform 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}

/* Slide to the right in dark mode */
.toggle-btn--active .toggle-knob {
  transform: translateX(22px);
}

/* On-dark: white knob in light mode, red knob in dark mode */
.toggle-btn--on-dark .toggle-knob {
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.30), 0 1px 2px rgba(0, 0, 0, 0.20);
}

.toggle-btn--on-dark.toggle-btn--active .toggle-knob {
  background: #e5322d;
  box-shadow: 0 1px 4px rgba(229, 50, 45, 0.45), 0 1px 2px rgba(0, 0, 0, 0.20);
}

/* On-light: dark knob in light mode, red knob in dark mode */
.toggle-btn--on-light .toggle-knob {
  background: #333333;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.20);
}

.toggle-btn--on-light.toggle-btn--active .toggle-knob {
  background: #e5322d;
  box-shadow: 0 1px 4px rgba(229, 50, 45, 0.40);
}

/* ── Icon inside knob ───────────────────────────────────────────────────────── */
.toggle-knob-icon {
  display: block;
}

/* On-dark variant icon colors */
.toggle-btn--on-dark .toggle-knob-icon    { color: #e5322d; }  /* sun: red on white */
.toggle-btn--on-dark.toggle-btn--active .toggle-knob-icon { color: #ffffff; } /* moon: white on red */

/* On-light variant */
.toggle-btn--on-light .toggle-knob-icon    { color: #fbbf24; } /* sun: yellow on dark */
.toggle-btn--on-light.toggle-btn--active .toggle-knob-icon { color: #ffffff; }

/* ── Icon swap transition ───────────────────────────────────────────────────── */
.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.icon-swap-enter-from {
  opacity: 0;
  transform: scale(0.6) rotate(-30deg);
}

.icon-swap-leave-to {
  opacity: 0;
  transform: scale(0.6) rotate(30deg);
}

/* ── Hover: slight glow ─────────────────────────────────────────────────────── */
.toggle-btn:hover .toggle-knob {
  filter: brightness(1.08);
}

.toggle-btn:active .toggle-knob {
  transform: translateX(0) scale(0.9);
}

.toggle-btn--active:active .toggle-knob {
  transform: translateX(22px) scale(0.9);
}

/* Reduced motion: disable the slide animation */
@media (prefers-reduced-motion: reduce) {
  .toggle-knob { transition: none; }
  .toggle-track { transition: none; }
  .icon-swap-enter-active, .icon-swap-leave-active { transition: none; }
}
</style>

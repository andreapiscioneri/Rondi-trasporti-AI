<script setup lang="ts">
import logoRondi from '~/assets/images/trasporti_rondi_logo.png'

const RED = '#E5322D'

const { t } = useLang()
</script>

<template>
  <footer
    class="bg-[#0A0A0A] dark:bg-[#050505] text-white"
    style="font-family: 'Roboto', sans-serif"
  >
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="inline-flex items-center mb-6">
            <img :src="logoRondi" alt="Trasporti Rondi" class="h-11 w-auto object-contain">
          </NuxtLink>
          <p class="text-white/50" style="font-size: 0.8125rem; font-weight: 400; line-height: 1.7">
            {{ t.footer.tagline }}
          </p>
          <div class="mt-6 flex gap-3">
            <a
              v-for="social in ['LI', 'FB', 'IG']"
              :key="social"
              href="#"
              class="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:border-white/50 hover:text-white/70 transition-colors"
              style="font-size: 0.625rem; font-weight: 700"
            >
              {{ social }}
            </a>
          </div>
        </div>

        <div v-for="col in t.footer.columns" :key="col.title">
          <h4
            class="text-white mb-4"
            style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase"
          >
            {{ col.title }}
          </h4>
          <ul class="flex flex-col gap-2.5">
            <li v-for="link in col.links" :key="link.label">
              <NuxtLink
                :to="link.href"
                class="text-white/50 hover:text-white transition-colors"
                style="font-size: 0.8125rem; font-weight: 400"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-white/30" style="font-size: 0.6875rem; font-weight: 400">
          {{ t.footer.legal }}
        </p>
        <div class="flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full" :style="{ background: RED }" />
          <span class="text-white/30" style="font-size: 0.6875rem; font-weight: 400">
            Trasporti Rondi S.p.A.
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowRight, BarChart3, Leaf, ShieldCheck, Zap } from 'lucide-vue-next'

const RED = '#E5322D'

useSeo({
  title: 'Sostenibilità e Certificazioni ISO',
  description: 'Trasporti Rondi investe in flotte a basse emissioni e processi certificati ISO 9001, ISO 14001, ADR. Logistica industriale sostenibile.',
  path: '/sostenibilita',
  jsonLd: buildBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Sostenibilità', href: '/sostenibilita' }]),
})
const sectionIcons = [Zap, Leaf, BarChart3]
const { t } = useLang()
const pg = computed(() => t.value.sostenibilitaPage)

const SECTION_IMAGES = [
  'https://images.pexels.com/photos/29206500/pexels-photo-29206500.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  'https://images.pexels.com/photos/35691079/pexels-photo-35691079.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
  'https://images.pexels.com/photos/8783541/pexels-photo-8783541.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=1200',
]
</script>

<template>
  <div>
    <section class="relative overflow-hidden page-section page-section--dark" style="min-height:480px">
      <div class="absolute inset-0">
        <img src="https://images.pexels.com/photos/29206500/pexels-photo-29206500.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200" alt="" class="w-full h-full object-cover opacity-25 scale-105">
        <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/72 to-transparent" />
      </div>
      <div class="absolute left-0 top-0 bottom-0 w-1" :style="{ background: RED }" />
      <div class="relative z-10 flex flex-col justify-end py-24 lg:py-36 px-6 sm:px-10 lg:px-16">
        <div class="section-shell w-full">
          <AnimateOnScroll variant="fadeRight">
            <span class="block mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ pg.hero.tag }}</span>
            <h1 class="text-white mb-4 max-w-2xl headline-balance" style="font-size:clamp(2.5rem,5vw,4.2rem);font-weight:800;line-height:1.04;letter-spacing:-0.03em">{{ pg.hero.title }}</h1>
            <p class="text-white/62 max-w-lg" style="font-size:clamp(1rem,1.5vw,1.125rem);line-height:1.72">{{ pg.hero.subtitle }}</p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>

    <section class="py-12 px-4 sm:px-6 lg:px-10" :style="{ background: RED }">
      <div class="section-shell grid grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimateOnScroll v-for="(stat, i) in pg.envStats" :key="stat.label" variant="scaleIn" :delay="i * 0.08">
          <div class="flex flex-col items-center text-center gap-1">
            <span class="text-white tabular-nums" style="font-size:clamp(1.75rem,3.5vw,2.75rem);font-weight:900;line-height:1">{{ stat.value }}</span>
            <span class="text-white/75" style="font-size:0.6875rem;font-weight:600;letter-spacing:0.12em;text-transform:uppercase">{{ stat.label }}</span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    <section
      v-for="(section, i) in pg.sections"
      :key="section.title"
      :class="`page-section ${i % 2 === 0 ? 'page-section--light' : 'page-section--soft'}`"
    >
      <div class="section-shell grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimateOnScroll :variant="i % 2 === 0 ? 'fadeLeft' : 'fadeRight'" :class="i % 2 === 1 ? 'lg:order-2' : ''">
          <div class="relative overflow-hidden group">
            <div class="overflow-hidden rounded-[2rem] shadow-[0_28px_70px_rgba(0,0,0,0.14)]" style="aspect-ratio:4/3">
              <img :src="SECTION_IMAGES[i]" :alt="section.tag" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
            <div class="absolute -top-4 -right-4 w-16 h-16 hidden lg:flex items-center justify-center rounded-full shadow-lg" :style="{ background: RED }">
              <component :is="sectionIcons[i]" :size="28" class="text-white" />
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll :variant="i % 2 === 0 ? 'fadeRight' : 'fadeLeft'" :delay="0.08" :class="i % 2 === 1 ? 'lg:order-1' : ''">
          <span class="inline-flex items-center gap-2 mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#E5322D">
            <component :is="sectionIcons[i]" :size="14" /> {{ section.tag }}
          </span>
          <h2 class="text-[#111111] dark:text-white mb-6 headline-balance" style="font-size:clamp(1.75rem,3vw,2.65rem);font-weight:800;line-height:1.08">{{ section.title }}</h2>
          <p class="text-[#666666] dark:text-[#999999]" style="font-size:clamp(1rem,1.2vw,1.0625rem);line-height:1.82">{{ section.desc }}</p>
        </AnimateOnScroll>
      </div>
    </section>

    <section class="page-section page-section--dark">
      <div class="section-shell">
        <AnimateOnScroll variant="fadeUp" class="text-center mb-14">
          <span class="block mb-3 text-white/30" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase">{{ pg.certs.title }}</span>
          <h2 class="text-white max-w-2xl mx-auto headline-balance" style="font-size:clamp(2rem,3.5vw,2.65rem);font-weight:800;line-height:1.08">{{ pg.certs.subtitle }}</h2>
          <div class="mt-4 mx-auto w-12 h-0.5" :style="{ background: RED }" />
        </AnimateOnScroll>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimateOnScroll v-for="(cert, i) in pg.certs.items" :key="cert.code" variant="scaleIn" :delay="i * 0.07">
            <div class="hover-lift rounded-[1.5rem] border border-white/10 p-6 flex flex-col gap-4 hover:border-[#E5322D]/40 transition-colors h-full bg-white/3 backdrop-blur-sm">
              <div class="flex items-start justify-between gap-4">
                <span class="px-2 py-1 rounded-full text-white" :style="{ background: RED, fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.05em' }">{{ cert.code }}</span>
                <ShieldCheck :size="20" class="text-white/20 flex-shrink-0 mt-1" />
              </div>
              <h3 class="text-white" style="font-size:0.95rem;font-weight:700">{{ cert.name }}</h3>
              <p class="text-white/50" style="font-size:0.82rem;line-height:1.68">{{ cert.desc }}</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>

    <section class="page-section page-section--light border-t border-black/10 dark:border-white/10">
      <AnimateOnScroll variant="fadeUp" class="section-shell flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h2 class="text-[#111111] dark:text-white mb-2 headline-balance" style="font-size:clamp(1.75rem,3vw,2.35rem);font-weight:800">{{ t.ctaBanner.title }}</h2>
          <p class="text-[#666666] dark:text-[#999999]" style="font-size:1rem;line-height:1.75">{{ t.ctaBanner.subtitle }}</p>
        </div>
        <NuxtLink to="/contatti" class="cta-premium flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 text-white hover:opacity-90 transition-opacity rounded-full" :style="{ background: RED, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }">
          {{ t.ctaBanner.cta }} <ArrowRight :size="16" />
        </NuxtLink>
      </AnimateOnScroll>
    </section>
  </div>
</template>

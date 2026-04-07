<script setup lang="ts">
import { ArrowRight, Clock, EyeOff, Lock, ShieldCheck } from 'lucide-vue-next'

const RED = '#E5322D'
const guaranteeIcons = [EyeOff, ShieldCheck, Lock, Clock]
const { t } = useLang()
const pg = computed(() => t.value.whistlePage)

const anonymous = ref(true)
const submitted = ref(false)

const onSubmit = (e: Event) => {
  e.preventDefault()
  submitted.value = true
}
</script>

<template>
  <div>
    <section class="relative bg-[#0A0A0A] dark:bg-[#050505] py-24 lg:py-36 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div class="absolute left-0 top-0 bottom-0 w-1" :style="{ background: RED }" />
      <div class="max-w-[1440px] mx-auto max-w-2xl">
        <AnimateOnScroll variant="fadeUp">
          <span class="block mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ pg.hero.tag }}</span>
          <h1 class="text-white mb-4 headline-balance" style="font-size:clamp(2.5rem,5vw,4.2rem);font-weight:800;line-height:1.04">{{ pg.hero.title }}</h1>
          <p class="text-white/62" style="font-size:clamp(1rem,1.5vw,1.125rem);line-height:1.72">{{ pg.hero.subtitle }}</p>
        </AnimateOnScroll>
      </div>
    </section>

    <section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
      <div class="max-w-[1440px] mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <AnimateOnScroll variant="fadeLeft">
            <h2 class="mb-6 headline-balance" :style="{ fontSize: 'clamp(1.75rem,3vw,2.55rem)', fontWeight: 800, color: RED }">{{ pg.info.title }}</h2>
            <p class="text-[#555555] dark:text-[#AAAAAA]" style="font-size:clamp(1rem,1.2vw,1.0625rem);line-height:1.8">{{ pg.info.desc }}</p>
          </AnimateOnScroll>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimateOnScroll v-for="(g, i) in pg.info.guarantees" :key="g" variant="scaleIn" :delay="i * 0.08">
              <div class="hover-lift p-5 rounded-[1.5rem] bg-[#F5F5F5] dark:bg-[#111111] border border-black/5 dark:border-white/5 flex flex-col gap-3 h-full">
                <div class="w-9 h-9 flex items-center justify-center rounded-full" :style="{ background: RED }"><component :is="guaranteeIcons[i]" :size="16" class="text-white" /></div>
                <p class="text-[#444444] dark:text-[#CCCCCC]" style="font-size:0.875rem;line-height:1.6">{{ g }}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        <div class="surface-card rounded-[1.5rem] flex items-center gap-4 p-5 border border-black/10 dark:border-white/10 mb-16">
          <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full" :style="{ background: RED }"><ShieldCheck :size="18" class="text-white" /></div>
          <p class="text-[#444444] dark:text-[#CCCCCC]" style="font-size:0.875rem;line-height:1.6"><strong class="text-[#111111] dark:text-white">D.Lgs. 24/2023</strong> · Recepimento della Direttiva UE 2019/1937 relativa alla protezione delle persone che segnalano violazioni del diritto dell'Unione.</p>
        </div>
      </div>
    </section>

    <section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#F5F5F5] dark:bg-[#111111]">
      <div class="max-w-[800px] mx-auto">
        <AnimateOnScroll variant="fadeUp" class="mb-10">
          <span class="block mb-3" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ pg.form.title }}</span>
          <h2 class="text-[#111111] dark:text-white mb-3 headline-balance" style="font-size:clamp(1.75rem,3vw,2.35rem);font-weight:800">{{ pg.form.title }}</h2>
          <p class="text-[#666666] dark:text-[#999999]">{{ pg.form.subtitle }}</p>
        </AnimateOnScroll>

        <div v-if="submitted" class="surface-card rounded-[2rem] flex flex-col items-start gap-4 py-12 px-8 border border-black/10 dark:border-white/10">
          <div class="w-12 h-12 flex items-center justify-center rounded-full" :style="{ background: RED }"><ShieldCheck :size="24" class="text-white" /></div>
          <h3 class="text-[#111111] dark:text-white" style="font-size:1.5rem;font-weight:800">Segnalazione ricevuta</h3>
          <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.9375rem;line-height:1.65">La segnalazione è stata registrata nel sistema. Ti verrà fornito un codice di tracciamento entro 7 giorni lavorativi.</p>
        </div>

        <form v-else class="surface-card rounded-[2rem] p-8 border border-black/10 dark:border-white/10 flex flex-col gap-6" @submit="onSubmit">
          <div class="flex flex-col gap-1.5">
            <label class="text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.form.category }}</label>
            <select required class="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 focus:border-[#E5322D] focus:outline-none">
              <option value="">-</option>
              <option v-for="c in pg.form.categories" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.form.description }}</label>
            <textarea rows="6" required :placeholder="pg.form.descPlaceholder" class="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 focus:border-[#E5322D] focus:outline-none resize-none" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.form.attachments }}</label>
            <div class="px-4 py-5 border border-dashed border-black/20 dark:border-white/20 flex items-center justify-center text-[#999999]">+ {{ pg.form.attachments }}</div>
          </div>
          <div class="flex items-center gap-3 py-4 border-t border-b border-black/10 dark:border-white/10">
            <button type="button" class="relative w-12 h-6 flex-shrink-0 transition-colors rounded-full" :style="{ background: anonymous ? RED : '#CCCCCC' }" @click="anonymous = !anonymous">
              <span class="absolute top-1 w-4 h-4 bg-white rounded-full transition-all" :style="{ left: anonymous ? 'calc(100% - 20px)' : '4px' }" />
            </button>
            <span class="text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.875rem;font-weight:500">{{ pg.form.anonymous }}</span>
          </div>
          <div v-if="!anonymous" class="flex flex-col gap-4 p-5 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/5 dark:border-white/5">
            <div class="flex flex-col gap-1.5">
              <label class="text-[#555555] dark:text-[#999999]" style="font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.form.name }}</label>
              <input type="text" class="px-4 py-3 bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 focus:border-[#E5322D] focus:outline-none">
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-[#555555] dark:text-[#999999]" style="font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.form.email }}</label>
              <input type="email" class="px-4 py-3 bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 focus:border-[#E5322D] focus:outline-none">
            </div>
          </div>
          <p class="text-[#999999]" style="font-size:0.75rem;line-height:1.65">{{ pg.form.disclaimer }}</p>
          <button type="submit" class="cta-premium inline-flex items-center gap-2 px-6 py-3.5 text-white self-start rounded-full" :style="{ background: RED, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }">{{ pg.form.submit }} <ArrowRight :size="16" /></button>
        </form>
      </div>
    </section>
  </div>
</template>

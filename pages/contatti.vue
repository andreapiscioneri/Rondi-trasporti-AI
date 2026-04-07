<script setup lang="ts">
import { ArrowRight, Clock, Mail, MapPin, MessageSquareText, Phone, Truck } from 'lucide-vue-next'

const RED = '#E5322D'
const { t } = useLang()
const pg = computed(() => t.value.contattiPage)

const submitted = ref(false)
const HQ_IMG = 'https://images.unsplash.com/photo-1762344682624-176d89eb3bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900'
const OFFICE_MAPS = [
  'https://images.unsplash.com/photo-1638636206910-49cdd0af6d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1762344682624-176d89eb3bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
]

const onSubmit = (e: Event) => {
  e.preventDefault()
  submitted.value = true
}
</script>

<template>
  <div>
    <section class="relative bg-[#0A0A0A] dark:bg-[#050505] py-24 lg:py-36 px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div class="absolute inset-0">
        <img :src="HQ_IMG" alt="" class="w-full h-full object-cover opacity-15">
        <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-[#0A0A0A]/50" />
      </div>
      <div class="absolute left-0 top-0 bottom-0 w-1" :style="{ background: RED }" />
      <div class="max-w-[1440px] mx-auto relative z-10 max-w-2xl">
        <AnimateOnScroll variant="fadeUp">
          <span class="block mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ pg.hero.tag }}</span>
          <h1 class="text-white mb-4" style="font-size:clamp(2.5rem,5vw,4rem);font-weight:900;line-height:1.05">{{ pg.hero.title }}</h1>
          <p class="text-white/60" style="font-size:clamp(1rem,1.5vw,1.125rem);line-height:1.65">{{ pg.hero.subtitle }}</p>
        </AnimateOnScroll>
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="px-4 py-4 bg-white/10 border border-white/15 backdrop-blur"><div class="flex items-center gap-2 mb-2 text-white/80"><Clock :size="14" /><span style="font-size:0.75rem;font-weight:600">Risposta</span></div><p class="text-white" style="font-size:1rem;font-weight:800">&lt; 24h</p></div>
          <div class="px-4 py-4 bg-white/10 border border-white/15 backdrop-blur"><div class="flex items-center gap-2 mb-2 text-white/80"><MessageSquareText :size="14" /><span style="font-size:0.75rem;font-weight:600">Canali attivi</span></div><p class="text-white" style="font-size:1rem;font-weight:800">Mail + Phone</p></div>
          <div class="px-4 py-4 bg-white/10 border border-white/15 backdrop-blur"><div class="flex items-center gap-2 mb-2 text-white/80"><Truck :size="14" /><span style="font-size:0.75rem;font-weight:600">Copertura</span></div><p class="text-white" style="font-size:1rem;font-weight:800">Italia + Estero</p></div>
        </div>
      </div>
    </section>

    <section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#F5F5F5] dark:bg-[#111111]">
      <div class="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimateOnScroll v-for="(office, i) in pg.offices" :key="office.id" variant="fadeUp" :delay="i * 0.08">
          <div class="flex flex-col border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111] hover:border-[#E5322D]/30 overflow-hidden">
            <div class="overflow-hidden" style="aspect-ratio:16/9"><img :src="OFFICE_MAPS[i]" :alt="office.name" class="w-full h-full object-cover"></div>
            <div class="p-6 flex flex-col gap-4">
              <h3 class="text-[#111111] dark:text-white" style="font-size:1rem;font-weight:700">{{ office.name }}</h3>
              <div class="flex items-start gap-3"><MapPin :size="16" :style="{ color: RED, marginTop: '2px' }" /><p class="text-[#555555] dark:text-[#AAAAAA] whitespace-pre-line" style="font-size:0.875rem;line-height:1.65">{{ office.address }}</p></div>
              <div class="flex items-center gap-3"><Phone :size="16" :style="{ color: RED }" /><a :href="`tel:${office.phone.replace(/\s/g, '')}`" class="text-[#333333] dark:text-[#CCCCCC] hover:underline" style="font-size:0.875rem">{{ office.phone }}</a></div>
              <div class="flex items-center gap-3"><Mail :size="16" :style="{ color: RED }" /><a :href="`mailto:${office.email}`" class="text-[#333333] dark:text-[#CCCCCC] hover:underline" style="font-size:0.875rem">{{ office.email }}</a></div>
              <div class="flex items-center gap-3"><Clock :size="16" :style="{ color: RED }" /><span class="text-[#555555] dark:text-[#AAAAAA]" style="font-size:0.875rem">{{ office.hours }}</span></div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    <section class="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
      <div class="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <AnimateOnScroll variant="fadeLeft">
          <span class="block mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ pg.form.title }}</span>
          <h2 class="text-[#111111] dark:text-white mb-6" style="font-size:clamp(1.75rem,3vw,2.25rem);font-weight:900">{{ pg.form.title }}</h2>
          <div class="flex items-start gap-3 p-4 bg-[#F5F5F5] dark:bg-[#111111] border border-black/10 dark:border-white/10 mb-8">
            <div class="w-8 h-8 flex-shrink-0 flex items-center justify-center" :style="{ background: RED }"><Clock :size="14" class="text-white" /></div>
            <div>
              <p class="text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.875rem;font-weight:700">Risposta garantita entro 24h</p>
              <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.8125rem">Per i preventivi urgenti contattaci telefonicamente</p>
            </div>
          </div>
          <div class="overflow-hidden" style="aspect-ratio:16/9"><img :src="HQ_IMG" alt="HQ" class="w-full h-full object-cover"></div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeRight" :delay="0.1">
          <div v-if="submitted" class="flex flex-col items-start gap-4 py-12">
            <div class="w-12 h-12 flex items-center justify-center" :style="{ background: RED }"><Mail :size="24" class="text-white" /></div>
            <h3 class="text-[#111111] dark:text-white" style="font-size:1.5rem;font-weight:900">Messaggio inviato!</h3>
            <p class="text-[#666666] dark:text-[#999999]">Ti risponderemo entro 24 ore lavorative.</p>
          </div>
          <form v-else class="flex flex-col gap-5" @submit="onSubmit">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div v-for="field in ['name', 'company', 'email', 'phone']" :key="field" class="flex flex-col gap-1.5">
                <label class="text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.form[field as keyof typeof pg.form] }}</label>
                <input :type="field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'" :required="field === 'name' || field === 'email'" class="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#E5322D]">
              </div>
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.form.subject }}</label>
              <select required class="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#E5322D]">
                <option value="">-</option>
                <option v-for="s in pg.form.subjects" :key="s" :value="s">{{ s }}</option>
              </select>
            </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-[#333333] dark:text-[#CCCCCC]" style="font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">{{ pg.form.message }}</label>
              <textarea rows="5" required class="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#E5322D] resize-none" />
            </div>
            <label class="flex items-start gap-3 cursor-pointer"><input type="checkbox" required class="mt-1 accent-[#E5322D]"><span class="text-[#666666] dark:text-[#999999]" style="font-size:0.8125rem">{{ pg.form.privacy }}</span></label>
            <button type="submit" class="inline-flex items-center gap-2 px-6 py-3.5 text-white self-start" :style="{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }">{{ pg.form.submit }} <ArrowRight :size="16" /></button>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  </div>
</template>

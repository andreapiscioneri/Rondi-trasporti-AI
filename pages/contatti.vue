<script setup lang="ts">
import { Clock, Mail, MapPin, MessageSquareText, Phone, Truck } from 'lucide-vue-next'

const RED = '#E5322D'
const { t } = useLang()
const pg = computed(() => t.value.contattiPage)

useSeo({
  title: 'Contatti e Richiesta Preventivo',
  description: 'Richiedi un preventivo per trasporti industriali, nazionali o internazionali. Risposta garantita entro 24h. Tre sedi operative in Italia.',
  path: '/contatti',
  jsonLd: buildBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Contatti', href: '/contatti' }]),
})

const HQ_IMG = 'https://images.unsplash.com/photo-1762344682624-176d89eb3bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900'
const OFFICE_MAPS = [
  'https://images.unsplash.com/photo-1638636206910-49cdd0af6d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1762344682624-176d89eb3bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
]

</script>

<template>
  <div>
    <section class="relative page-section page-section--dark overflow-hidden">
      <div class="absolute inset-0">
        <img :src="HQ_IMG" alt="" class="w-full h-full object-cover opacity-15 scale-105">
        <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-[#0A0A0A]/50" />
      </div>
      <div class="absolute left-0 top-0 bottom-0 w-1" :style="{ background: RED }" />
      <div class="section-shell relative z-10 max-w-2xl">
        <AnimateOnScroll variant="fadeUp">
          <span class="block mb-4" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">{{ pg.hero.tag }}</span>
          <h1 class="text-white mb-4 headline-balance" style="font-size:clamp(2.5rem,5vw,4.2rem);font-weight:800;line-height:1.04">{{ pg.hero.title }}</h1>
          <p class="text-white/62" style="font-size:clamp(1rem,1.5vw,1.125rem);line-height:1.72">{{ pg.hero.subtitle }}</p>
        </AnimateOnScroll>
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="surface-card px-4 py-4 rounded-2xl"><div class="flex items-center gap-2 mb-2 text-black dark:text-white/80"><Clock :size="14" class="text-[#E5322D]" /><span style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">Risposta</span></div><p class="text-[#111111] dark:text-white" style="font-size:1rem;font-weight:800">&lt; 24h</p></div>
          <div class="surface-card px-4 py-4 rounded-2xl"><div class="flex items-center gap-2 mb-2 text-black dark:text-white/80"><MessageSquareText :size="14" class="text-[#E5322D]" /><span style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">Canali attivi</span></div><p class="text-[#111111] dark:text-white" style="font-size:1rem;font-weight:800">Mail + Phone</p></div>
          <div class="surface-card px-4 py-4 rounded-2xl"><div class="flex items-center gap-2 mb-2 text-black dark:text-white/80"><Truck :size="14" class="text-[#E5322D]" /><span style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase">Copertura</span></div><p class="text-[#111111] dark:text-white" style="font-size:1rem;font-weight:800">Italia + Estero</p></div>
        </div>
      </div>
    </section>

    <section class="page-section page-section--soft">
      <div class="section-shell grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimateOnScroll v-for="(office, i) in pg.offices" :key="office.id" variant="fadeUp" :delay="i * 0.08">
          <div class="hover-lift flex flex-col rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111] hover:border-[#E5322D]/30 overflow-hidden">
            <div class="overflow-hidden" style="aspect-ratio:16/9"><img :src="OFFICE_MAPS[i]" :alt="office.name" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"></div>
            <div class="p-6 flex flex-col gap-4">
              <h3 class="text-[#111111] dark:text-white" style="font-size:1rem;font-weight:700">{{ office.name }}</h3>
              <div class="flex items-start gap-3"><MapPin :size="16" :style="{ color: RED, marginTop: '2px' }" /><p class="text-[#555555] dark:text-[#AAAAAA] whitespace-pre-line" style="font-size:0.875rem;line-height:1.72">{{ office.address }}</p></div>
              <div class="flex items-center gap-3"><Phone :size="16" :style="{ color: RED }" /><a :href="`tel:${office.phone.replace(/\s/g, '')}`" class="text-[#333333] dark:text-[#CCCCCC] hover:underline" style="font-size:0.875rem">{{ office.phone }}</a></div>
              <div class="flex items-center gap-3"><Mail :size="16" :style="{ color: RED }" /><a :href="`mailto:${office.email}`" class="text-[#333333] dark:text-[#CCCCCC] hover:underline" style="font-size:0.875rem">{{ office.email }}</a></div>
              <div class="flex items-center gap-3"><Clock :size="16" :style="{ color: RED }" /><span class="text-[#555555] dark:text-[#AAAAAA]" style="font-size:0.875rem">{{ office.hours }}</span></div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>

    <!-- ── Multi-step quote form ── -->
    <section class="page-section page-section--light">
      <div class="section-shell grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        <!-- Left: context + image -->
        <AnimateOnScroll variant="fadeLeft">
          <span class="block mb-3" style="font-size:0.75rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#E5322D">Richiedi Preventivo</span>
          <h2 class="text-[#111111] dark:text-white mb-4 headline-balance" style="font-size:clamp(1.75rem,3vw,2.35rem);font-weight:800;line-height:1.08">
            Parliamo del tuo progetto di trasporto.
          </h2>
          <p class="text-[#666] dark:text-[#999] mb-7" style="font-size:0.9375rem;line-height:1.75">
            Compila il form in 3 semplici passi e riceverai un preventivo personalizzato entro 24 ore lavorative.
          </p>

          <!-- Trust signals -->
          <div class="flex flex-col gap-3 mb-8">
            <div
              v-for="item in [
                { icon: '⏱', title: 'Risposta in 24h', desc: 'Tempi certi, nessuna attesa' },
                { icon: '🔒', title: 'Dati al sicuro', desc: 'Privacy garantita, nessuno spam' },
                { icon: '📞', title: 'Urgente?', desc: 'Chiama +39 030 123 4567' },
              ]"
              :key="item.title"
              class="flex items-start gap-3"
            >
              <span class="text-lg leading-none mt-0.5">{{ item.icon }}</span>
              <div>
                <p class="text-[#111] dark:text-white" style="font-size:0.875rem;font-weight:700">{{ item.title }}</p>
                <p class="text-[#888] dark:text-[#aaa]" style="font-size:0.8125rem">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <div class="overflow-hidden rounded-[2rem] img-hover-zoom" style="aspect-ratio:16/9">
            <img :src="HQ_IMG" alt="Sede Trasporti Rondi" class="w-full h-full object-cover">
          </div>
        </AnimateOnScroll>

        <!-- Right: multi-step form -->
        <AnimateOnScroll variant="fadeRight" :delay="0.12">
          <SectionsQuoteForm />
        </AnimateOnScroll>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Clock3, ShieldCheck, Truck } from 'lucide-vue-next'

const { lang } = useLang()

const pageContent = computed(() => {
  if (lang.value === 'en') {
    return {
      tag: 'Quote Request',
      title: 'Request a Custom Quote',
      subtitle: 'Tell us what you need. Our team will build a tailored transport plan and get back to you quickly.',
      trust: [
        { icon: Clock3, title: 'Response within 24h', desc: 'Fast operational assessment by our team.' },
        { icon: ShieldCheck, title: 'Data protected', desc: 'Secure handling and no spam communication.' },
        { icon: Truck, title: 'Industrial expertise', desc: 'National, international and exceptional transport.' },
      ],
      supportTitle: 'Direct support',
      supportDesc: 'For urgent requests call +39 030 123 4567 or email info@trasportirondi.it.',
    }
  }

  return {
    tag: 'Richiesta Preventivo',
    title: 'Richiedi un Preventivo Personalizzato',
    subtitle: 'Raccontaci la tua esigenza: costruiamo una proposta su misura con piano operativo dedicato.',
    trust: [
      { icon: Clock3, title: 'Risposta entro 24h', desc: 'Valutazione rapida da parte del team operativo.' },
      { icon: ShieldCheck, title: 'Dati protetti', desc: 'Gestione riservata della richiesta, nessuno spam.' },
      { icon: Truck, title: 'Competenza industriale', desc: 'Trasporti nazionali, internazionali ed eccezionali.' },
    ],
    supportTitle: 'Supporto diretto',
    supportDesc: 'Per richieste urgenti chiama +39 030 123 4567 oppure scrivi a info@trasportirondi.it.',
  }
})

useSeo({
  title: lang.value === 'it' ? 'Richiedi Preventivo' : 'Request Quote',
  description: lang.value === 'it'
    ? 'Pagina dedicata alla richiesta preventivo Trasporti Rondi. Invia i dettagli e ricevi una proposta personalizzata entro 24 ore.'
    : 'Dedicated quote request page for Trasporti Rondi. Share your requirements and receive a tailored proposal within 24 hours.',
  path: '/preventivo',
  jsonLd: buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: lang.value === 'it' ? 'Preventivo' : 'Quote', href: '/preventivo' },
  ]),
})

const heroData = computed(() => ({
  image: 'https://images.pexels.com/photos/31723807/pexels-photo-31723807.jpeg?auto=compress&cs=tinysrgb&fit=crop&dpr=2&q=82&w=2200',
  alt: pageContent.value.title,
  tag: pageContent.value.tag,
  title: pageContent.value.title,
  subtitle: pageContent.value.subtitle,
}))
</script>

<template>
  <div>
    <PageHeroBanner :hero="heroData" />

    <section class="page-section page-section--light">
      <div class="section-shell grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <AnimateOnScroll variant="fadeLeft">
          <h2 class="mb-4 text-[#111111] dark:text-white headline-balance" style="font-size:clamp(1.7rem,2.8vw,2.3rem);font-weight:800;line-height:1.08">
            {{ pageContent.title }}
          </h2>
          <p class="mb-8 text-[#666666] dark:text-[#999999]" style="font-size:1rem;line-height:1.78">
            {{ pageContent.subtitle }}
          </p>

          <div class="space-y-3 mb-8">
            <div v-for="item in pageContent.trust" :key="item.title" class="rounded-[1.1rem] border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-[#111111] flex items-start gap-3">
              <div class="h-9 w-9 rounded-full bg-[#E5322D] text-white flex items-center justify-center flex-shrink-0">
                <component :is="item.icon" :size="16" />
              </div>
              <div>
                <p class="text-[#111111] dark:text-white" style="font-size:0.9rem;font-weight:700">{{ item.title }}</p>
                <p class="text-[#666666] dark:text-[#999999]" style="font-size:0.84rem;line-height:1.65">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <div class="rounded-[1.1rem] border border-[#E5322D]/25 bg-[#E5322D]/8 p-4 dark:bg-[#E5322D]/12">
            <p class="mb-1 text-[#111111] dark:text-white" style="font-size:0.85rem;font-weight:700">{{ pageContent.supportTitle }}</p>
            <p class="text-[#555555] dark:text-[#bcbcbc]" style="font-size:0.82rem;line-height:1.65">{{ pageContent.supportDesc }}</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeRight" :delay="0.08">
          <SectionsQuoteForm />
        </AnimateOnScroll>
      </div>
    </section>
  </div>
</template>

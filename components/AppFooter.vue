<script setup lang="ts">
import { Mail, MapPin, Phone } from 'lucide-vue-next'
import logoRondi from '~/assets/images/trasporti_rondi_logo.png'
import { buildGeoLocalPath, buildGeoServiceRootPath, GEO_CITIES, GEO_PRIMARY_CITY, GEO_SERVICES } from '~/shared/local-seo'

const { t, lang } = useLang()
const offices = computed(() => t.value.contattiPage.offices)

const primaryCity = GEO_CITIES.find(city => city.slug === GEO_PRIMARY_CITY) || GEO_CITIES[0]

const geoServiceLinks = computed(() =>
  GEO_SERVICES.map(service => ({
    label: service.name,
    href: buildGeoServiceRootPath(service.slug),
  })),
)

const geoPrimaryCityLinks = computed(() =>
  GEO_SERVICES.map(service => ({
    label: `${service.shortName} ${primaryCity.name}`,
    href: buildGeoLocalPath(service.slug, primaryCity.slug),
  })),
)

const geoCityHubLinks = computed(() =>
  GEO_CITIES.map(city => ({
    label: `Trasporti ${city.name}`,
    href: buildGeoLocalPath('trasporti-nazionali', city.slug),
  })),
)

const legalLinks = computed(() => {
  if (lang.value === 'en') {
    return [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Data Processing', href: '/trattamento-dati' },
    ]
  }

  return [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Trattamento Dati', href: '/trattamento-dati' },
  ]
})
</script>

<template>
  <footer class="text-white bg-[#090909] relative overflow-hidden" style="font-family:'DM Sans',sans-serif">
    <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(60rem 40rem at 80% -10%, rgba(229, 50, 45, 0.26), transparent 70%)" />
    <div class="absolute inset-x-0 top-0 h-px bg-white/10" />

    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 lg:pt-20 pb-12 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div class="lg:col-span-3">
          <NuxtLink to="/" class="inline-flex items-center mb-6">
            <img :src="logoRondi" alt="Trasporti Rondi" class="h-12 w-auto object-contain">
          </NuxtLink>
          <p class="text-white/72 text-sm leading-7 max-w-sm headline-balance">{{ t.footer.tagline }}</p>
          <div class="mt-6 flex flex-wrap items-center gap-2">
            <span
              v-for="item in ['ISO 9001', 'ISO 14001', 'ADR']"
              :key="item"
              class="px-2.5 py-1 rounded-full border border-white/20 text-[0.62rem] tracking-[0.08em] uppercase text-white/78"
            >
              {{ item }}
            </span>
          </div>
        </div>

        <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
          <div
            v-for="office in offices"
            :key="office.id"
            class="hover-lift min-w-0 rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-sm p-6"
          >
            <h4 class="text-sm font-bold mb-3 uppercase tracking-[0.08em] text-white">{{ office.name }}</h4>
            <p class="text-white/70 text-sm leading-6 whitespace-pre-line break-words mb-3 inline-flex items-start gap-2"><MapPin :size="14" class="mt-1 text-[#E5322D]" />{{ office.address }}</p>
            <a :href="`tel:${office.phone.replace(/\s/g, '')}`" class="block text-white/85 text-sm mb-2 hover:text-white inline-flex items-center gap-2 break-words"><Phone :size="13" class="text-[#E5322D]" />{{ office.phone }}</a>
            <a :href="`mailto:${office.email}`" class="block text-white/85 text-[0.8rem] hover:text-white inline-flex items-center gap-2 whitespace-nowrap leading-none pt-1"><Mail :size="13" class="text-[#E5322D]" />{{ office.email }}</a>
          </div>
        </div>

        <div class="lg:col-span-3 grid grid-cols-1 gap-6">
          <div v-for="col in t.footer.columns.slice(0, 2)" :key="col.title">
            <h4 class="text-[0.72rem] font-bold mb-3 tracking-[0.12em] uppercase text-white/75">{{ col.title }}</h4>
            <ul class="space-y-2">
              <li v-for="link in col.links" :key="link.label">
                <NuxtLink :to="link.href" class="text-white/62 hover:text-[#E5322D] text-sm transition-colors">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-white/10 pt-8">
        <h4 class="text-[0.72rem] font-bold mb-4 tracking-[0.12em] uppercase text-white/75">Copertura locale</h4>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <p class="text-[0.68rem] font-bold uppercase tracking-[0.11em] text-white/55 mb-2">Servizi</p>
            <div class="flex flex-wrap gap-2">
              <NuxtLink
                v-for="link in geoServiceLinks"
                :key="link.href"
                :to="link.href"
                class="px-3 py-1.5 rounded-full border border-white/15 text-[0.72rem] text-white/70 hover:text-[#E5322D] hover:border-[#E5322D]/50 transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>
          <div>
            <p class="text-[0.68rem] font-bold uppercase tracking-[0.11em] text-white/55 mb-2">Localita</p>
            <div class="flex flex-wrap gap-2">
              <NuxtLink
                v-for="link in geoCityHubLinks"
                :key="link.href"
                :to="link.href"
                class="px-3 py-1.5 rounded-full border border-white/15 text-[0.72rem] text-white/70 hover:text-[#E5322D] hover:border-[#E5322D]/50 transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
              <NuxtLink
                v-for="link in geoPrimaryCityLinks"
                :key="link.href"
                :to="link.href"
                class="px-3 py-1.5 rounded-full border border-white/10 text-[0.7rem] text-white/58 hover:text-white hover:border-white/25 transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-white/10 pt-6">
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em]">
          <NuxtLink
            v-for="item in legalLinks"
            :key="item.href"
            :to="item.href"
            class="text-white/60 transition-colors hover:text-[#E5322D]"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 relative z-10">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[0.7rem] tracking-[0.06em] text-white/55 uppercase">
        <p>{{ t.footer.legal }}</p>
        <p>Trasporti Rondi S.p.A. • Brescia • Italia</p>
      </div>
    </div>
  </footer>
</template>

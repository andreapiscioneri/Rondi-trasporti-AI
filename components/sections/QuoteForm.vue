<script setup lang="ts">
/**
 * QuoteForm — 3-step multi-step quote request form.
 *
 * Step 1 → Service type selection (visual card grid)
 * Step 2 → Contact details (name, company, email, phone)
 * Step 3 → Message + privacy + submit
 * Done   → Success animation
 *
 * Transitions between steps are driven by GSAP (slide + fade).
 */

import { gsap } from 'gsap'
import { ArrowRight, Building2, Check, Globe, Maximize2, Package, Truck } from 'lucide-vue-next'

const RED = '#E5322D'

// ─── Services ─────────────────────────────────────────────────────────────────
const SERVICES = [
  { id: 'nazionale',       label: 'Trasporto Nazionale',       icon: Truck,     desc: 'Copertura su tutto il territorio italiano' },
  { id: 'internazionale',  label: 'Trasporto Internazionale',  icon: Globe,     desc: 'Europa e oltre, 30+ paesi' },
  { id: 'eccezionale',     label: 'Carichi Eccezionali',       icon: Maximize2, desc: 'Dimensioni e pesi fuori standard' },
  { id: 'logistica',       label: 'Logistica Integrata',       icon: Package,   desc: 'Magazzino, distribuzione, sdoganamento' },
  { id: 'gru',             label: 'Gru e Sollevamenti',        icon: Building2, desc: 'Impianti fino a 1000 tonnellate' },
]

// ─── State ────────────────────────────────────────────────────────────────────
const step         = ref<1 | 2 | 3 | 'done'>(1)
const selectedSvc  = ref<string>('')
const isSubmitting = ref(false)

const form = reactive({
  name:    '',
  company: '',
  email:   '',
  phone:   '',
  message: '',
  privacy: false,
})

// ─── Step panels refs (for GSAP) ──────────────────────────────────────────────
const panelRef = ref<HTMLElement | null>(null)

function animateStep(dir: 'forward' | 'back') {
  if (!panelRef.value) return
  const from = dir === 'forward' ? 40 : -40
  gsap.fromTo(panelRef.value,
    { opacity: 0, x: from },
    { opacity: 1, x: 0, duration: 0.42, ease: 'power3.out' },
  )
}

async function nextStep() {
  if (step.value === 1 && !selectedSvc.value) return

  const next = step.value === 1 ? 2 : step.value === 2 ? 3 : 'done'
  step.value = next as typeof step.value

  await nextTick()
  animateStep('forward')
}

async function prevStep() {
  if (step.value === 1 || step.value === 'done') return

  step.value = (step.value as number - 1) as 1 | 2 | 3
  await nextTick()
  animateStep('back')
}

async function submit(e: Event) {
  e.preventDefault()
  if (!form.privacy) return

  isSubmitting.value = true
  // Simulated async submit — replace with actual API call
  await new Promise(r => setTimeout(r, 1200))
  isSubmitting.value = false
  step.value = 'done'
  await nextTick()
  animateStep('forward')
}

// ─── Step label ───────────────────────────────────────────────────────────────
const stepLabel = computed(() => {
  if (step.value === 'done') return ''
  return `Passo ${step.value} di 3`
})

const progressWidth = computed(() => {
  if (step.value === 'done') return '100%'
  return `${((step.value as number) / 3) * 100}%`
})
</script>

<template>
  <div class="quote-form-shell surface-card rounded-[2rem] overflow-hidden">

    <!-- ── Header bar ── -->
    <div v-if="step !== 'done'" class="px-6 sm:px-8 pt-7 pb-5 border-b border-black/8 dark:border-white/8">
      <div class="flex items-center justify-between mb-3">
        <p
          class="text-[#E5322D]"
          style="font-size:0.72rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase"
        >
          {{ stepLabel }}
        </p>
        <button
          v-if="(step as number) > 1"
          class="text-[#888] hover:text-[#333] dark:hover:text-white transition-colors text-sm flex items-center gap-1"
          @click="prevStep"
        >
          ← Indietro
        </button>
      </div>

      <!-- Progress bar -->
      <div class="h-[3px] bg-black/8 dark:bg-white/10 rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-500"
          :style="{ width: progressWidth, background: RED }"
        />
      </div>
    </div>

    <!-- ── Panel container ── -->
    <div ref="panelRef" class="p-6 sm:p-8">

      <!-- ════════════════ STEP 1: Service selection ══════════════════════════ -->
      <div v-if="step === 1">
        <h3
          class="text-[#111] dark:text-white mb-1"
          style="font-size:1.25rem;font-weight:800;letter-spacing:-0.02em"
        >
          Che tipo di servizio ti serve?
        </h3>
        <p
          class="text-[#777] dark:text-[#999] mb-6"
          style="font-size:0.875rem"
        >
          Seleziona la categoria più vicina alla tua esigenza.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
          <button
            v-for="svc in SERVICES"
            :key="svc.id"
            class="group flex items-start gap-4 p-4 rounded-[1.25rem] border-2 text-left transition-all duration-200"
            :class="selectedSvc === svc.id
              ? 'border-[#E5322D] bg-[#E5322D]/6 dark:bg-[#E5322D]/10'
              : 'border-black/10 dark:border-white/10 hover:border-[#E5322D]/40 hover:bg-black/2 dark:hover:bg-white/3'"
            @click="selectedSvc = svc.id"
          >
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              :style="{ background: selectedSvc === svc.id ? RED : 'rgba(0,0,0,0.06)' }"
            >
              <component
                :is="svc.icon"
                :size="18"
                :class="selectedSvc === svc.id ? 'text-white' : 'text-[#666] dark:text-[#aaa]'"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p
                class="text-[#111] dark:text-white mb-0.5"
                style="font-size:0.875rem;font-weight:700"
              >
                {{ svc.label }}
              </p>
              <p
                class="text-[#888] dark:text-[#aaa]"
                style="font-size:0.78rem;line-height:1.45"
              >
                {{ svc.desc }}
              </p>
            </div>
            <!-- Check -->
            <div
              v-if="selectedSvc === svc.id"
              class="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
              :style="{ background: RED }"
            >
              <Check :size="11" class="text-white" />
            </div>
          </button>
        </div>

        <button
          class="cta-premium w-full inline-flex items-center justify-center gap-2 py-3.5 text-white rounded-full transition-opacity"
          :style="{ background: RED, fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: selectedSvc ? '1' : '0.4' }"
          :disabled="!selectedSvc"
          @click="nextStep"
        >
          Continua <ArrowRight :size="16" />
        </button>
      </div>

      <!-- ════════════════ STEP 2: Contact details ════════════════════════════ -->
      <div v-else-if="step === 2">
        <h3
          class="text-[#111] dark:text-white mb-1"
          style="font-size:1.25rem;font-weight:800;letter-spacing:-0.02em"
        >
          I tuoi dati di contatto
        </h3>
        <p
          class="text-[#777] dark:text-[#999] mb-6"
          style="font-size:0.875rem"
        >
          Ti risponderemo entro 24 ore lavorative.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div class="flex flex-col gap-1.5">
            <label class="form-label">Nome e Cognome *</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Mario Rossi"
              class="form-input"
            >
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="form-label">Azienda</label>
            <input
              v-model="form.company"
              type="text"
              placeholder="Acme S.r.l."
              class="form-input"
            >
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="form-label">Email *</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="mario@azienda.it"
              class="form-input"
            >
          </div>
          <div class="flex flex-col gap-1.5">
            <label class="form-label">Telefono</label>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="+39 030 000 0000"
              class="form-input"
            >
          </div>
        </div>

        <button
          class="cta-premium w-full inline-flex items-center justify-center gap-2 py-3.5 text-white rounded-full"
          :style="{ background: RED, fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }"
          :disabled="!form.name || !form.email"
          @click="nextStep"
        >
          Continua <ArrowRight :size="16" />
        </button>
      </div>

      <!-- ════════════════ STEP 3: Message + submit ═══════════════════════════ -->
      <form v-else-if="step === 3" @submit="submit">
        <h3
          class="text-[#111] dark:text-white mb-1"
          style="font-size:1.25rem;font-weight:800;letter-spacing:-0.02em"
        >
          Dimmi di più
        </h3>
        <p
          class="text-[#777] dark:text-[#999] mb-6"
          style="font-size:0.875rem"
        >
          Più dettagli ci fornisci, più preciso sarà il preventivo.
        </p>

        <div class="flex flex-col gap-4 mb-5">
          <div class="flex flex-col gap-1.5">
            <label class="form-label">Descrivi la tua esigenza *</label>
            <textarea
              v-model="form.message"
              rows="5"
              required
              placeholder="Descrivici il tipo di merce, le tratte, la frequenza di trasporto..."
              class="form-input resize-none"
            />
          </div>
        </div>

        <label class="flex items-start gap-3 cursor-pointer mb-6">
          <input
            v-model="form.privacy"
            type="checkbox"
            required
            class="mt-0.5 accent-[#E5322D]"
          >
          <span class="text-[#666] dark:text-[#999]" style="font-size:0.8125rem;line-height:1.55">
            Accetto la
            <a href="#" class="underline text-[#E5322D]">Privacy Policy</a>
            e autorizzo il trattamento dei dati personali.
          </span>
        </label>

        <button
          type="submit"
          class="cta-premium w-full inline-flex items-center justify-center gap-2 py-3.5 text-white rounded-full relative overflow-hidden"
          :style="{ background: RED, fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }"
          :disabled="isSubmitting || !form.privacy"
        >
          <span v-if="!isSubmitting" class="flex items-center gap-2">
            Invia Richiesta <ArrowRight :size="16" />
          </span>
          <span v-else class="flex items-center gap-2">
            <span class="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Invio in corso…
          </span>
        </button>
      </form>

      <!-- ════════════════ DONE: Success ═════════════════════════════════════ -->
      <div v-else class="flex flex-col items-center text-center py-10 gap-5">
        <div
          class="w-16 h-16 rounded-full flex items-center justify-center"
          :style="{ background: RED }"
        >
          <Check :size="32" class="text-white" />
        </div>
        <div>
          <h3
            class="text-[#111] dark:text-white mb-2"
            style="font-size:1.35rem;font-weight:800"
          >
            Richiesta inviata!
          </h3>
          <p class="text-[#666] dark:text-[#999]" style="font-size:0.9rem;line-height:1.65">
            Il nostro team ti contatterà entro 24 ore lavorative<br>
            all'indirizzo <strong class="text-[#333] dark:text-white">{{ form.email }}</strong>.
          </p>
        </div>
        <button
          class="mt-2 text-sm text-[#E5322D] underline underline-offset-2 hover:text-[#c02020] transition-colors"
          @click="step = 1; selectedSvc = ''; Object.assign(form, { name: '', company: '', email: '', phone: '', message: '', privacy: false })"
        >
          Invia un'altra richiesta
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #555;
}

.dark .form-label { color: #aaa; }

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #f5f5f3;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-size: 0.9375rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
}

.dark .form-input {
  background: #1a1a1a;
  border-color: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.form-input:focus {
  border-color: #e5322d;
  box-shadow: 0 0 0 3px rgba(229, 50, 45, 0.12);
}

.form-input::placeholder {
  color: #bbb;
}

.dark .form-input::placeholder {
  color: #555;
}

button:disabled {
  cursor: not-allowed;
}
</style>

import { useState } from 'react';
import { ArrowRight, MapPin, Star, ChevronDown, BriefcaseBusiness, Users, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../context/LangContext';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';

const RED = '#E5322D';

const HERO_IMG = 'https://images.unsplash.com/photo-1768554058655-ffc14e476826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920';
const OFFICE_IMG = 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900';

const TEAM_STATS = [
  { label: 'Posizioni aperte', value: '12+' },
  { label: 'Tempo medio risposta', value: '48h' },
  { label: 'Percorsi di crescita', value: '100%' },
];

function PositionCard({
  item,
  applyLabel,
}: {
  item: { title: string; type: string; location: string; desc: string };
  applyLabel: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border border-black/10 dark:border-white/10 hover:border-[#E5322D]/30 transition-colors bg-white dark:bg-[#111111] glass-elevated"
      whileHover={{ y: -4 }}
      layout
    >
      <button
        className="w-full flex items-start gap-4 p-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span
              className="px-2 py-0.5 text-white"
              style={{ background: RED, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              {item.type}
            </span>
            <span
              className="flex items-center gap-1 text-[#666666] dark:text-[#999999]"
              style={{ fontSize: '0.75rem', fontWeight: 400 }}
            >
              <MapPin size={12} style={{ color: RED }} />
              {item.location}
            </span>
          </div>
          <h3 className="text-[#111111] dark:text-white" style={{ fontSize: '1rem', fontWeight: 700 }}>
            {item.title}
          </h3>
        </div>
        <motion.div
          className="flex-shrink-0 mt-1 text-[#666666] dark:text-[#999999]"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <div className="px-6 pb-6 flex flex-col gap-4">
          <p className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '0.9375rem', fontWeight: 400, lineHeight: 1.65 }}>
            {item.desc}
          </p>
          <motion.button
            className="self-start inline-flex items-center gap-2 px-5 py-2.5 text-white hover:opacity-90 transition-opacity"
            style={{ background: RED, fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {applyLabel}
            <ArrowRight size={14} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function LavoraConNoi() {
  const { t } = useLang();
  const { lavoraPage: pg } = t;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: 560 }}>
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Careers"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent" />
          <div className="absolute -top-24 -right-12 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(229, 50, 45, 0.35)' }} />
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(229, 50, 45, 0.22)' }} />
        </div>
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: RED }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="relative z-10 flex flex-col justify-end py-24 lg:py-36 px-6 sm:px-10 lg:px-16">
          <div className="max-w-[1440px] mx-auto w-full">
            <motion.span
              className="block mb-4"
              style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: RED }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {pg.hero.tag}
            </motion.span>
            <motion.h1
              className="text-white mb-4 max-w-2xl"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {pg.hero.title}
            </motion.h1>
            <motion.p
              className="text-white/60 max-w-lg"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', fontWeight: 400, lineHeight: 1.65 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              {pg.hero.subtitle}
            </motion.p>
            <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl" staggerDelay={0.08}>
              {TEAM_STATS.map((stat) => (
                <StaggerItem key={stat.label} variant="fadeUp">
                  <motion.div className="px-4 py-4 bg-white/10 backdrop-blur border border-white/15" whileHover={{ y: -3 }}>
                    <p className="text-white" style={{ fontSize: '1.25rem', fontWeight: 900 }}>
                      {stat.value}
                    </p>
                    <p className="text-white/70" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
                      {stat.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {pg.perks.map((perk, i) => (
              <StaggerItem key={perk.title} variant="fadeUp">
                <motion.div
                  className="p-6 border border-black/10 dark:border-white/10 flex flex-col gap-4 hover:border-[#E5322D]/30 transition-colors h-full group"
                  whileHover={{ y: -6 }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: RED }}
                  >
                    <Star size={18} className="text-white" />
                  </div>
                  <h3 className="text-[#111111] dark:text-white" style={{ fontSize: '1rem', fontWeight: 700 }}>
                    {perk.title}
                  </h3>
                  <p className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.7 }}>
                    {perk.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#F5F5F5] dark:bg-[#111111]">
        <div className="max-w-[1440px] mx-auto">
          <AnimateOnScroll variant="fadeUp" className="mb-12">
            <span
              className="block mb-3"
              style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: RED }}
            >
              {pg.positions.title}
            </span>
            <h2
              className="text-[#111111] dark:text-white"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 900, lineHeight: 1.15 }}
            >
              {pg.positions.title}
            </h2>
          </AnimateOnScroll>
          <div className="flex flex-col gap-3">
            {pg.positions.items.map((item) => (
              <PositionCard key={item.title} item={item} applyLabel={pg.positions.apply} />
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Flow */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-[#FDF3F2] dark:bg-[#151010]">
        <div className="max-w-[1440px] mx-auto">
          <AnimateOnScroll variant="fadeUp" className="mb-10">
            <h2 className="text-[#111111] dark:text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.15rem)', fontWeight: 900 }}>
              Processo di selezione rapido e trasparente
            </h2>
          </AnimateOnScroll>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {[
              { icon: BriefcaseBusiness, title: 'Candidatura', desc: 'Invii il CV e ci racconti il tuo profilo in pochi minuti.' },
              { icon: Users, title: 'Colloquio', desc: 'Confronto diretto con HR e responsabile di funzione.' },
              { icon: Rocket, title: 'Onboarding', desc: 'Ingresso strutturato con tutor e piano di crescita.' },
            ].map((step, i) => (
              <StaggerItem key={step.title} variant="fadeUp">
                <div className="relative p-6 bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 h-full">
                  <span className="absolute top-4 right-4 text-[#E5322D]/20" style={{ fontSize: '2rem', fontWeight: 900 }}>
                    0{i + 1}
                  </span>
                  <div className="w-10 h-10 mb-4 flex items-center justify-center text-white" style={{ background: RED }}>
                    <step.icon size={18} />
                  </div>
                  <h3 className="text-[#111111] dark:text-white mb-2" style={{ fontSize: '1rem', fontWeight: 800 }}>{step.title}</h3>
                  <p className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimateOnScroll variant="fadeLeft">
              <span
                className="block mb-4"
                style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: RED }}
              >
                {pg.form.title}
              </span>
              <h2
                className="text-[#111111] dark:text-white mb-4"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, lineHeight: 1.15 }}
              >
                {pg.form.title}
              </h2>
              <p
                className="text-[#666666] dark:text-[#999999] mb-8"
                style={{ fontSize: '1rem', fontWeight: 400, lineHeight: 1.7 }}
              >
                {pg.form.subtitle}
              </p>
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img src={OFFICE_IMG} alt="Office" className="w-full h-full object-cover" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeRight" delay={0.1}>
              {submitted ? (
                <div className="flex flex-col items-start gap-4 py-12">
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ background: RED }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <ArrowRight size={24} className="text-white" />
                  </motion.div>
                  <h3 className="text-[#111111] dark:text-white" style={{ fontSize: '1.5rem', fontWeight: 900 }}>
                    Candidatura inviata!
                  </h3>
                  <p className="text-[#666666] dark:text-[#999999]">
                    Ti risponderemo il prima possibile. Grazie per il tuo interesse.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {[
                    { key: 'name', type: 'text' },
                    { key: 'email', type: 'email' },
                    { key: 'phone', type: 'tel' },
                    { key: 'position', type: 'text' },
                  ].map(({ key, type }) => (
                    <motion.div
                      key={key}
                      className="flex flex-col gap-1.5"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label
                        className="text-[#333333] dark:text-[#CCCCCC]"
                        style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                      >
                        {pg.form[key as keyof typeof pg.form] as string}
                      </label>
                      <input
                        type={type}
                        required={key !== 'phone'}
                        className="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 text-[#333333] dark:text-white focus:outline-none focus:border-[#E5322D] focus:shadow-[0_0_0_3px_rgba(229,50,45,0.15)] transition-all interactive-control"
                        style={{ fontSize: '0.9375rem', fontWeight: 400 }}
                      />
                    </motion.div>
                  ))}
                  <motion.div className="flex flex-col gap-1.5" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <label
                      className="text-[#333333] dark:text-[#CCCCCC]"
                      style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                    >
                      {pg.form.message}
                    </label>
                    <textarea
                      rows={4}
                      className="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 text-[#333333] dark:text-white focus:outline-none focus:border-[#E5322D] focus:shadow-[0_0_0_3px_rgba(229,50,45,0.15)] transition-all resize-none interactive-control"
                      style={{ fontSize: '0.9375rem', fontWeight: 400 }}
                    />
                  </motion.div>
                  <motion.div className="flex flex-col gap-1.5" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <label
                      className="text-[#333333] dark:text-[#CCCCCC]"
                      style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                    >
                      {pg.form.cv}
                    </label>
                    <div className="px-4 py-6 border border-dashed border-black/20 dark:border-white/20 flex items-center justify-center text-[#999999] hover:border-[#E5322D]/50 transition-colors cursor-pointer" style={{ fontSize: '0.875rem' }}>
                      + {pg.form.cv}
                    </div>
                  </motion.div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1 flex-shrink-0 accent-[#E5322D]" />
                    <span className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '0.8125rem', fontWeight: 400 }}>
                      {pg.form.privacy}
                    </span>
                  </label>
                  <motion.button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-white hover:opacity-90 transition-opacity self-start"
                    style={{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {pg.form.submit}
                    <ArrowRight size={16} />
                  </motion.button>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}

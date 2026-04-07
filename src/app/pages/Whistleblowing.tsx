import { useState } from 'react';
import { ArrowRight, ShieldCheck, Lock, EyeOff, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../context/LangContext';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';

const RED = '#E5322D';
const guaranteeIcons = [EyeOff, ShieldCheck, Lock, Clock];

export function Whistleblowing() {
  const { t } = useLang();
  const { whistlePage: pg } = t;
  const [anonymous, setAnonymous] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0A0A0A] dark:bg-[#050505] py-24 lg:py-36 px-4 sm:px-6 lg:px-10 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: RED }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl">
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
              className="text-white mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {pg.hero.title}
            </motion.h1>
            <motion.p
              className="text-white/60"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', fontWeight: 400, lineHeight: 1.65 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              {pg.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Info + Guarantees */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
            <AnimateOnScroll variant="fadeLeft">
              <h2
                className="mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1, color: RED }}
              >
                {pg.info.title}
              </h2>
              <p
                className="text-[#555555] dark:text-[#AAAAAA]"
                style={{ fontSize: 'clamp(1rem, 1.2vw, 1.0625rem)', fontWeight: 400, lineHeight: 1.8 }}
              >
                {pg.info.desc}
              </p>
            </AnimateOnScroll>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
              {pg.info.guarantees.map((g, i) => {
                const Icon = guaranteeIcons[i];
                return (
                  <StaggerItem key={g} variant="scaleIn">
                    <div className="p-5 bg-[#F5F5F5] dark:bg-[#111111] border border-black/5 dark:border-white/5 flex flex-col gap-3 h-full">
                      <div className="w-9 h-9 flex items-center justify-center" style={{ background: RED }}>
                        <Icon size={16} className="text-white" />
                      </div>
                      <p className="text-[#444444] dark:text-[#CCCCCC]" style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 }}>
                        {g}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Legal badge */}
          <AnimateOnScroll variant="fadeUp">
            <div className="flex items-center gap-4 p-5 border border-black/10 dark:border-white/10 bg-[#F5F5F5] dark:bg-[#111111] mb-16">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center" style={{ background: RED }}>
                <ShieldCheck size={18} className="text-white" />
              </div>
              <p className="text-[#444444] dark:text-[#CCCCCC]" style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 }}>
                <strong className="text-[#111111] dark:text-white">D.Lgs. 24/2023</strong> · Recepimento della Direttiva UE 2019/1937 relativa alla protezione delle persone che segnalano violazioni del diritto dell&apos;Unione.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#F5F5F5] dark:bg-[#111111]">
        <div className="max-w-[800px] mx-auto">
          <AnimateOnScroll variant="fadeUp" className="mb-10">
            <span
              className="block mb-3"
              style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: RED }}
            >
              {pg.form.title}
            </span>
            <h2
              className="text-[#111111] dark:text-white mb-3"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, lineHeight: 1.15 }}
            >
              {pg.form.title}
            </h2>
            <p className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '0.9375rem', fontWeight: 400 }}>
              {pg.form.subtitle}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fadeUp" delay={0.1}>
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-12 px-8 bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10">
                <motion.div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ background: RED }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ShieldCheck size={24} className="text-white" />
                </motion.div>
                <h3 className="text-[#111111] dark:text-white" style={{ fontSize: '1.5rem', fontWeight: 900 }}>
                  Segnalazione ricevuta
                </h3>
                <p className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '0.9375rem', lineHeight: 1.65 }}>
                  La segnalazione è stata registrata nel sistema. Ti verrà fornito un codice di tracciamento entro 7 giorni lavorativi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white dark:bg-[#0A0A0A] p-8 border border-black/10 dark:border-white/10 flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#333333] dark:text-[#CCCCCC]" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {pg.form.category}
                  </label>
                  <select
                    required
                    className="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 text-[#333333] dark:text-white focus:outline-none focus:border-[#E5322D] transition-colors appearance-none"
                    style={{ fontSize: '0.9375rem', fontWeight: 400 }}
                  >
                    <option value="">—</option>
                    {pg.form.categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#333333] dark:text-[#CCCCCC]" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {pg.form.description}
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder={pg.form.descPlaceholder}
                    className="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 text-[#333333] dark:text-white placeholder-[#AAAAAA] focus:outline-none focus:border-[#E5322D] transition-colors resize-none"
                    style={{ fontSize: '0.9375rem', fontWeight: 400 }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#333333] dark:text-[#CCCCCC]" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {pg.form.attachments}
                  </label>
                  <div className="px-4 py-5 border border-dashed border-black/20 dark:border-white/20 flex items-center justify-center text-[#999999] hover:border-[#E5322D]/50 transition-colors cursor-pointer" style={{ fontSize: '0.875rem' }}>
                    + {pg.form.attachments}
                  </div>
                </div>

                <div className="flex items-center gap-3 py-4 border-t border-b border-black/10 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setAnonymous(!anonymous)}
                    className="relative w-12 h-6 flex-shrink-0 transition-colors"
                    style={{ background: anonymous ? RED : '#CCCCCC', borderRadius: 999 }}
                    aria-label="Toggle anonymous"
                  >
                    <motion.span
                      className="absolute top-1 w-4 h-4 bg-white rounded-full"
                      animate={{ left: anonymous ? 'calc(100% - 20px)' : '4px' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    />
                  </button>
                  <span className="text-[#333333] dark:text-[#CCCCCC]" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                    {pg.form.anonymous}
                  </span>
                </div>

                {!anonymous && (
                  <motion.div
                    className="flex flex-col gap-4 p-5 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/5 dark:border-white/5"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[{ label: pg.form.name, type: 'text' }, { label: pg.form.email, type: 'email' }].map(({ label, type }) => (
                      <div key={label} className="flex flex-col gap-1.5">
                        <label className="text-[#555555] dark:text-[#999999]" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                          {label}
                        </label>
                        <input
                          type={type}
                          className="px-4 py-3 bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 text-[#333333] dark:text-white focus:outline-none focus:border-[#E5322D] transition-colors"
                          style={{ fontSize: '0.9375rem', fontWeight: 400 }}
                        />
                      </div>
                    ))}
                  </motion.div>
                )}

                <p className="text-[#999999]" style={{ fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.65 }}>
                  {pg.form.disclaimer}
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-white hover:opacity-90 transition-opacity self-start"
                  style={{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  {pg.form.submit}
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
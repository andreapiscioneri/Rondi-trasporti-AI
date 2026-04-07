import { useState } from 'react';
import { ArrowRight, Phone, Mail, Clock, MapPin, MessageSquareText, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../context/LangContext';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';

const RED = '#E5322D';

const HQ_IMG = 'https://images.unsplash.com/photo-1762344682624-176d89eb3bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900';

// Static office map placeholders with city images
const OFFICE_MAPS = [
  'https://images.unsplash.com/photo-1638636206910-49cdd0af6d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  'https://images.unsplash.com/photo-1762344682624-176d89eb3bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
];

function OfficeCard({
  office,
  imgSrc,
}: {
  office: { name: string; address: string; phone: string; email: string; hours: string };
  imgSrc: string;
}) {
  return (
    <motion.div
      className="flex flex-col border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111] hover:border-[#E5322D]/30 transition-colors overflow-hidden group glass-elevated"
      whileHover={{ y: -6 }}
    >
      <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={imgSrc}
          alt={office.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-[#111111] dark:text-white" style={{ fontSize: '1rem', fontWeight: 700 }}>
          {office.name}
        </h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <MapPin size={16} style={{ color: RED, flexShrink: 0, marginTop: 2 }} />
            <p
              className="text-[#555555] dark:text-[#AAAAAA] whitespace-pre-line"
              style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.65 }}
            >
              {office.address}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} style={{ color: RED, flexShrink: 0 }} />
            <a
              href={`tel:${office.phone.replace(/\s/g, '')}`}
              className="text-[#333333] dark:text-[#CCCCCC] hover:underline"
              style={{ fontSize: '0.875rem', fontWeight: 500 }}
            >
              {office.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} style={{ color: RED, flexShrink: 0 }} />
            <a
              href={`mailto:${office.email}`}
              className="text-[#333333] dark:text-[#CCCCCC] hover:underline"
              style={{ fontSize: '0.875rem', fontWeight: 500 }}
            >
              {office.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={16} style={{ color: RED, flexShrink: 0 }} />
            <span className="text-[#555555] dark:text-[#AAAAAA]" style={{ fontSize: '0.875rem', fontWeight: 400 }}>
              {office.hours}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Contatti() {
  const { t } = useLang();
  const { contattiPage: pg } = t;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0A0A0A] dark:bg-[#050505] py-24 lg:py-36 px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HQ_IMG}
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-[#0A0A0A]/50" />
          <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(229, 50, 45, 0.35)' }} />
          <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(229, 50, 45, 0.22)' }} />
        </div>
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: RED }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="max-w-[1440px] mx-auto relative z-10 max-w-2xl">
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
          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3" staggerDelay={0.08}>
            {[
              { icon: Clock, title: 'Risposta', value: '< 24h' },
              { icon: MessageSquareText, title: 'Canali attivi', value: 'Mail + Phone' },
              { icon: Truck, title: 'Copertura', value: 'Italia + Estero' },
            ].map((item) => (
              <StaggerItem key={item.title} variant="fadeUp">
                <motion.div className="px-4 py-4 bg-white/10 border border-white/15 backdrop-blur" whileHover={{ y: -3 }}>
                  <div className="flex items-center gap-2 mb-2 text-white/80">
                    <item.icon size={14} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{item.title}</span>
                  </div>
                  <p className="text-white" style={{ fontSize: '1rem', fontWeight: 800 }}>{item.value}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Three Offices */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#F5F5F5] dark:bg-[#111111]">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {pg.offices.map((office, i) => (
              <StaggerItem key={office.id} variant="fadeUp">
                <OfficeCard office={office} imgSrc={OFFICE_MAPS[i]} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: info */}
            <AnimateOnScroll variant="fadeLeft">
              <span
                className="block mb-4"
                style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: RED }}
              >
                {pg.form.title}
              </span>
              <h2
                className="text-[#111111] dark:text-white mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, lineHeight: 1.15 }}
              >
                {pg.form.title}
              </h2>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-[#F5F5F5] dark:bg-[#111111] border border-black/10 dark:border-white/10">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center" style={{ background: RED }}>
                    <Clock size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#333333] dark:text-[#CCCCCC]" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                      Risposta garantita entro 24h
                    </p>
                    <p className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '0.8125rem', fontWeight: 400 }}>
                      Per i preventivi urgenti contattaci telefonicamente
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.a
                    href="tel:+390000000000"
                    className="p-4 border border-black/10 dark:border-white/10 hover:border-[#E5322D]/40 transition-colors bg-white dark:bg-[#111111]"
                    whileHover={{ y: -3 }}
                  >
                    <p className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '0.75rem', fontWeight: 600 }}>Telefono diretto</p>
                    <p className="text-[#111111] dark:text-white" style={{ fontSize: '1rem', fontWeight: 800 }}>+39 000 000 0000</p>
                  </motion.a>
                  <motion.a
                    href="mailto:info@trasportirondi.it"
                    className="p-4 border border-black/10 dark:border-white/10 hover:border-[#E5322D]/40 transition-colors bg-white dark:bg-[#111111]"
                    whileHover={{ y: -3 }}
                  >
                    <p className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '0.75rem', fontWeight: 600 }}>Email ufficio</p>
                    <p className="text-[#111111] dark:text-white" style={{ fontSize: '1rem', fontWeight: 800 }}>info@trasportirondi.it</p>
                  </motion.a>
                </div>
              </div>
              <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img src={HQ_IMG} alt="HQ" className="w-full h-full object-cover" />
              </div>
            </AnimateOnScroll>

            {/* Right: form */}
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
                    <Mail size={24} className="text-white" />
                  </motion.div>
                  <h3 className="text-[#111111] dark:text-white" style={{ fontSize: '1.5rem', fontWeight: 900 }}>
                    Messaggio inviato!
                  </h3>
                  <p className="text-[#666666] dark:text-[#999999]">
                    Ti risponderemo entro 24 ore lavorative.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { key: 'name', type: 'text', required: true },
                      { key: 'company', type: 'text', required: false },
                      { key: 'email', type: 'email', required: true },
                      { key: 'phone', type: 'tel', required: false },
                    ].map(({ key, type, required }) => (
                      <motion.div key={key} className="flex flex-col gap-1.5" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                        <label
                          className="text-[#333333] dark:text-[#CCCCCC]"
                          style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                        >
                          {pg.form[key as keyof typeof pg.form] as string}
                        </label>
                        <input
                          type={type}
                          required={required}
                          className="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 text-[#333333] dark:text-white focus:outline-none focus:border-[#E5322D] focus:shadow-[0_0_0_3px_rgba(229,50,45,0.15)] transition-all interactive-control"
                          style={{ fontSize: '0.9375rem', fontWeight: 400 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div className="flex flex-col gap-1.5" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <label
                      className="text-[#333333] dark:text-[#CCCCCC]"
                      style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                    >
                      {pg.form.subject}
                    </label>
                    <select
                      required
                      className="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 text-[#333333] dark:text-white focus:outline-none focus:border-[#E5322D] focus:shadow-[0_0_0_3px_rgba(229,50,45,0.15)] transition-all appearance-none interactive-control"
                      style={{ fontSize: '0.9375rem', fontWeight: 400 }}
                    >
                      <option value="">—</option>
                      {pg.form.subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </motion.div>
                  <motion.div className="flex flex-col gap-1.5" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <label
                      className="text-[#333333] dark:text-[#CCCCCC]"
                      style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                    >
                      {pg.form.message}
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="px-4 py-3 bg-[#F5F5F5] dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 text-[#333333] dark:text-white focus:outline-none focus:border-[#E5322D] focus:shadow-[0_0_0_3px_rgba(229,50,45,0.15)] transition-all resize-none interactive-control"
                      style={{ fontSize: '0.9375rem', fontWeight: 400 }}
                    />
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

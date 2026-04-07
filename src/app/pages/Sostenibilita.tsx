import { Link } from 'react-router';
import { ArrowRight, Leaf, Zap, BarChart3, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../context/LangContext';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';

const RED = '#E5322D';
const sectionIcons = [Zap, Leaf, BarChart3];

const SECTION_IMAGES = [
  'https://images.unsplash.com/photo-1655300256620-680cb0f1cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1638636206910-49cdd0af6d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1768323555231-5497afb0b6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
];

export function Sostenibilita() {
  const { t } = useLang();
  const { sostenibilitaPage: pg } = t;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A0A0A] dark:bg-[#050505]" style={{ minHeight: 480 }}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1655300256620-680cb0f1cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
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
          </div>
        </div>
      </section>

      {/* Env Stats Strip */}
      <section className="py-12 px-4 sm:px-6 lg:px-10" style={{ background: RED }}>
        <StaggerContainer
          className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {pg.envStats.map((stat) => (
            <StaggerItem key={stat.label} variant="scaleIn">
              <div className="flex flex-col items-center text-center gap-1">
                <span className="text-white tabular-nums" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 900, lineHeight: 1 }}>
                  {stat.value}
                </span>
                <span className="text-white/75" style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {stat.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Three pillars */}
      {pg.sections.map((section, i) => {
        const Icon = sectionIcons[i];
        const isEven = i % 2 === 0;
        return (
          <section
            key={section.title}
            className={`py-20 lg:py-28 px-4 sm:px-6 lg:px-10 ${isEven ? 'bg-white dark:bg-[#0A0A0A]' : 'bg-[#F5F5F5] dark:bg-[#111111]'}`}
          >
            <div className="max-w-[1440px] mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                <AnimateOnScroll variant={isEven ? 'fadeLeft' : 'fadeRight'}>
                  <div className={`relative overflow-hidden group ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div style={{ aspectRatio: '4/3' }} className="overflow-hidden">
                      <img
                        src={SECTION_IMAGES[i]}
                        alt={section.tag}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div
                      className="absolute -top-4 -right-4 w-16 h-16 hidden lg:flex items-center justify-center"
                      style={{ background: RED }}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll variant={isEven ? 'fadeRight' : 'fadeLeft'} delay={0.1}>
                  <div className={!isEven ? 'lg:col-start-1' : ''}>
                    <span
                      className="inline-flex items-center gap-2 mb-4"
                      style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: RED }}
                    >
                      <Icon size={14} />
                      {section.tag}
                    </span>
                    <h2
                      className="text-[#111111] dark:text-white mb-6"
                      style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}
                    >
                      {section.title}
                    </h2>
                    <p
                      className="text-[#666666] dark:text-[#999999]"
                      style={{ fontSize: 'clamp(1rem, 1.2vw, 1.0625rem)', fontWeight: 400, lineHeight: 1.8 }}
                    >
                      {section.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </section>
        );
      })}

      {/* Certifications */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#0A0A0A] dark:bg-[#050505]">
        <div className="max-w-[1440px] mx-auto">
          <AnimateOnScroll variant="fadeUp" className="text-center mb-14">
            <span
              className="block mb-3 text-white/30"
              style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              {pg.certs.title}
            </span>
            <h2
              className="text-white max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 900, lineHeight: 1.2 }}
            >
              {pg.certs.subtitle}
            </h2>
            <div className="mt-4 mx-auto w-12 h-0.5" style={{ background: RED }} />
          </AnimateOnScroll>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
            {pg.certs.items.map((cert) => (
              <StaggerItem key={cert.code} variant="scaleIn">
                <div className="border border-white/10 p-6 flex flex-col gap-4 hover:border-[#E5322D]/40 transition-colors h-full">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="px-2 py-1 text-white"
                      style={{ background: RED, fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.05em' }}
                    >
                      {cert.code}
                    </span>
                    <ShieldCheck size={20} className="text-white/20 flex-shrink-0 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2" style={{ fontSize: '0.9375rem', fontWeight: 700 }}>
                      {cert.name}
                    </h3>
                    <p className="text-white/50" style={{ fontSize: '0.8125rem', fontWeight: 400, lineHeight: 1.6 }}>
                      {cert.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A] border-t border-black/10 dark:border-white/10">
        <AnimateOnScroll variant="fadeUp" className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-[#111111] dark:text-white mb-2"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900 }}
            >
              {t.ctaBanner.title}
            </h2>
            <p className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '1rem' }}>
              {t.ctaBanner.subtitle}
            </p>
          </div>
          <Link
            to="/contatti"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 text-white hover:opacity-90 transition-opacity"
            style={{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            {t.ctaBanner.cta} <ArrowRight size={16} />
          </Link>
        </AnimateOnScroll>
      </section>
    </div>
  );
}

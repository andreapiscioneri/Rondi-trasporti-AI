import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Truck, Globe, Maximize2, Wrench, Package } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../context/LangContext';
import { HeroSlideshow } from '../components/HeroSlideshow';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';

const RED = '#E5322D';

// ── Images ──────────────────────────────────────────────────────────────
const HERO_SLIDES_IT = [
  {
    image: 'https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Dal 1998 · Trasporto Industriale',
    title: 'La Forza del\nTrasporto.',
    subtitle: 'Soluzioni logistiche nazionali, internazionali ed eccezionali per l\'industria italiana.',
    cta: 'Richiedi Preventivo',
    ctaHref: '/contatti',
    ctaSecondary: 'Scopri i Servizi',
    ctaSecondaryHref: '/servizi',
  },
  {
    image: 'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Trasporti Internazionali · 30+ Paesi',
    title: 'Oltre i Confini,\ncon Precisione.',
    subtitle: 'Rotte consolidate verso oltre 30 paesi con gestione interna della documentazione doganale.',
    cta: 'Scopri il Servizio',
    ctaHref: '/servizi#internazionali',
  },
  {
    image: 'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Gru & Movimentazioni · fino a 1000t',
    title: 'Potenza di\nSollevamento.',
    subtitle: 'Gru fino a 1000 tonnellate, operatori certificati e pianificazione tecnica per ogni intervento.',
    cta: 'Scopri il Servizio',
    ctaHref: '/servizi#gru',
  },
  {
    image: 'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Logistica Integrata · Supply Chain',
    title: 'La Tua Supply\nChain, Ottimizzata.',
    subtitle: 'Magazzini certificati, distribuzione last-mile e sdoganamento completo in un unico partner.',
    cta: 'Scopri il Servizio',
    ctaHref: '/servizi#logistica',
  },
];

const HERO_SLIDES_EN = [
  {
    image: 'https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Since 1998 · Industrial Transport',
    title: 'The Power of\nTransport.',
    subtitle: 'National, international and exceptional logistics for Italian industry.',
    cta: 'Get a Quote',
    ctaHref: '/contatti',
    ctaSecondary: 'Our Services',
    ctaSecondaryHref: '/servizi',
  },
  {
    image: 'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'International Transport · 30+ Countries',
    title: 'Beyond Borders,\nPrecisely.',
    subtitle: 'Established routes to 30+ countries with full in-house customs documentation.',
    cta: 'Discover',
    ctaHref: '/servizi#internazionali',
  },
  {
    image: 'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Crane & Handling · up to 1000t',
    title: 'Lifting\nPower.',
    subtitle: 'Cranes up to 1000 tonnes, certified operators and technical planning for every operation.',
    cta: 'Discover',
    ctaHref: '/servizi#gru',
  },
  {
    image: 'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    tag: 'Integrated Logistics · Supply Chain',
    title: 'Your Supply\nChain, Optimized.',
    subtitle: 'Certified warehouses, last-mile distribution and full customs clearance. One partner.',
    cta: 'Discover',
    ctaHref: '/servizi#logistica',
  },
];

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
];

const SUSTAIN_IMG = 'https://images.unsplash.com/photo-1638636206910-49cdd0af6d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900';
const SUSTAIN_SOLAR = 'https://images.unsplash.com/photo-1655300256620-680cb0f1cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400';
const SUSTAIN_ROAD = 'https://images.unsplash.com/photo-1768323555231-5497afb0b6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400';
const SUSTAIN_PORT = 'https://images.unsplash.com/photo-1614571272828-2d8289ff8fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400';

// ── Count-up stat ────────────────────────────────────────────────────────
function useCountUp(target: string, inView: boolean) {
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    const suffix = target.replace(/[0-9.]/g, '');
    if (isNaN(num)) { setDisplay(target); return; }
    const duration = 1600;
    const start = performance.now();
    const raf = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const current = Math.floor(ease * num * 10) / 10;
      setDisplay(current % 1 === 0 ? `${Math.floor(current)}${suffix}` : `${current}${suffix}`);
      if (p < 1) requestAnimationFrame(raf);
      else setDisplay(`${num}${suffix}`);
    };
    requestAnimationFrame(raf);
  }, [inView, target]);
  return display;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const display = useCountUp(value, inView);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className="tabular-nums"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: RED, lineHeight: 1 }}
      >
        {display}
      </span>
      <span
        className="text-center text-white/50"
        style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}
      >
        {label}
      </span>
    </motion.div>
  );
}

const serviceIcons = [Truck, Globe, Maximize2, Wrench, Package];

export function Home() {
  const { t, lang } = useLang();
  const slides = lang === 'it' ? HERO_SLIDES_IT : HERO_SLIDES_EN;

  return (
    <div>
      {/* ── HERO SLIDESHOW ── */}
      <HeroSlideshow slides={slides} />

      {/* ── SERVICES GRID ── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <AnimateOnScroll variant="fadeUp" className="mb-12">
            <span
              className="block mb-3"
              style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: RED }}
            >
              {t.services.tag}
            </span>
            <h2
              className="text-[#111111] dark:text-white mb-4 max-w-2xl"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 900, lineHeight: 1.15 }}
            >
              {t.services.title}
            </h2>
            <p
              className="text-[#666666] dark:text-[#999999] max-w-xl"
              style={{ fontSize: 'clamp(1rem, 1.2vw, 1.125rem)', fontWeight: 400, lineHeight: 1.7 }}
            >
              {t.services.subtitle}
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6" staggerDelay={0.08}>
            {t.services.items.map((item, i) => {
              const Icon = serviceIcons[i];
              return (
                <StaggerItem key={item.title}>
                  <div className="group flex flex-col border border-black/10 dark:border-white/10 hover:border-[#E5322D]/50 transition-all duration-300 bg-white dark:bg-[#111111] overflow-hidden h-full hover:shadow-lg hover:shadow-red-500/5">
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                      <img
                        src={SERVICE_IMAGES[i]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div
                        className="absolute bottom-3 left-3 w-9 h-9 flex items-center justify-center"
                        style={{ background: RED }}
                      >
                        <Icon size={18} className="text-white" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <h3
                        className="text-[#111111] dark:text-white"
                        style={{ fontSize: '0.9375rem', fontWeight: 700, lineHeight: 1.3 }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#666666] dark:text-[#999999] flex-1"
                        style={{ fontSize: '0.8125rem', fontWeight: 400, lineHeight: 1.65 }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <div className="px-5 pb-4">
                      <motion.div
                        className="h-0.5"
                        style={{ background: RED, scaleX: 0, transformOrigin: 'left' }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimateOnScroll variant="fadeUp" delay={0.2} className="mt-10 flex justify-center sm:justify-start">
            <Link
              to="/servizi"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 text-[#111111] dark:text-white hover:bg-[#E5322D] hover:text-white hover:border-[#E5322D] transition-all duration-300"
              style={{ borderColor: '#111111', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
            >
              {t.services.cta}
              <ArrowRight size={16} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── SUSTAINABILITY ── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#F5F5F5] dark:bg-[#111111]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Visual */}
            <AnimateOnScroll variant="fadeLeft">
              <div className="relative flex gap-3">
                <div className="flex-1 overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <img
                    src={SUSTAIN_IMG}
                    alt="Green Fleet"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 w-28 flex-shrink-0 self-end">
                  {[SUSTAIN_SOLAR, SUSTAIN_ROAD, SUSTAIN_PORT].map((src, i) => (
                    <div key={i} className="overflow-hidden" style={{ aspectRatio: '3/2' }}>
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                {/* Red accent */}
                <div
                  className="absolute -bottom-4 -left-4 w-20 h-20 hidden lg:block"
                  style={{ background: RED, opacity: 0.15 }}
                />
              </div>
            </AnimateOnScroll>

            {/* Text */}
            <AnimateOnScroll variant="fadeRight" delay={0.15}>
              <span
                className="block mb-4"
                style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: RED }}
              >
                {t.sustainability.tag}
              </span>
              <h2
                className="text-[#111111] dark:text-white mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 900, lineHeight: 1.15 }}
              >
                {t.sustainability.title}
              </h2>
              <p
                className="text-[#555555] dark:text-[#AAAAAA] mb-4"
                style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}
              >
                {t.sustainability.subtitle}
              </p>
              <p
                className="text-[#666666] dark:text-[#999999] mb-8"
                style={{ fontSize: 'clamp(1rem, 1.2vw, 1.0625rem)', fontWeight: 400, lineHeight: 1.75 }}
              >
                {t.sustainability.desc}
              </p>
              <div className="mb-8">
                <p
                  className="text-[#333333] dark:text-[#CCCCCC] mb-4"
                  style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                >
                  {t.sustainability.certTitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.sustainability.certs.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1.5 border border-black/20 dark:border-white/20 text-[#333333] dark:text-[#CCCCCC]"
                      style={{ fontSize: '0.75rem', fontWeight: 700 }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/sostenibilita"
                className="inline-flex items-center gap-2 px-6 py-3 text-white transition-all hover:gap-3"
                style={{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
              >
                {t.sustainability.cta}
                <ArrowRight size={16} />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#0A0A0A] dark:bg-[#050505] relative overflow-hidden">
        {/* Decorative lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 12.5%)' }} />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <AnimateOnScroll variant="fadeUp" className="text-center mb-14">
            <span
              className="block mb-3 text-white/30"
              style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              {t.stats.tag}
            </span>
            <h2
              className="text-white"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 900, lineHeight: 1.2 }}
            >
              {t.stats.title}
            </h2>
            <div className="mt-4 mx-auto w-12 h-0.5" style={{ background: RED }} />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {t.stats.items.map((item) => (
              <StatItem key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.2)' }}
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(229,50,45,0.85) 0%, rgba(0,0,0,0.7) 100%)' }} />

        <AnimateOnScroll variant="fadeUp" className="relative z-10 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-white mb-3"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.15 }}
            >
              {t.ctaBanner.title}
            </h2>
            <p
              className="text-white/70"
              style={{ fontSize: 'clamp(1rem, 1.2vw, 1.0625rem)', fontWeight: 400 }}
            >
              {t.ctaBanner.subtitle}
            </p>
          </div>
          <Link
            to="/contatti"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#111111] hover:bg-[#F5F5F5] transition-all whitespace-nowrap"
            style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            {t.ctaBanner.cta}
            <ArrowRight size={16} />
          </Link>
        </AnimateOnScroll>
      </section>
    </div>
  );
}

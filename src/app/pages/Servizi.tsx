import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { ArrowRight, CheckCircle2, Truck, Globe, Maximize2, Wrench, Package } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../context/LangContext';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';

const RED = '#E5322D';
const serviceIcons = [Truck, Globe, Maximize2, Wrench, Package];

const SERVICE_IMAGES = [
  'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1772959785247-e0904e476455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
  'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
];

export function Servizi() {
  const { t } = useLang();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
      }
    }
  }, [location.hash]);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0A0A0A] dark:bg-[#050505] py-24 lg:py-36 px-4 sm:px-6 lg:px-10 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        </div>
        {/* Red accent line */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: RED }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.span
            className="block mb-4"
            style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: RED }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t.serviziPage.hero.tag}
          </motion.span>
          <motion.h1
            className="text-white mb-4 max-w-2xl"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.serviziPage.hero.title}
          </motion.h1>
          <motion.p
            className="text-white/60 max-w-lg"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', fontWeight: 400, lineHeight: 1.65 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            {t.serviziPage.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Service nav pills */}
      <div className="sticky top-[72px] z-30 bg-white dark:bg-[#0A0A0A] border-b border-black/10 dark:border-white/10 overflow-x-auto">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex gap-1 py-2 whitespace-nowrap">
          {t.serviziPage.items.map((item, i) => {
            const Icon = serviceIcons[i];
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-[#555555] dark:text-[#999999] hover:text-[#111111] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                style={{ fontSize: '0.8125rem', fontWeight: 500 }}
              >
                <Icon size={14} style={{ color: RED }} />
                {item.tag}
              </a>
            );
          })}
        </div>
      </div>

      {/* Service sections */}
      <div>
        {t.serviziPage.items.map((item, i) => {
          const Icon = serviceIcons[i];
          const isEven = i % 2 === 0;
          return (
            <section
              key={item.id}
              id={item.id}
              className={`py-20 lg:py-28 px-4 sm:px-6 lg:px-10 ${isEven ? 'bg-white dark:bg-[#0A0A0A]' : 'bg-[#F5F5F5] dark:bg-[#111111]'}`}
            >
              <div className="max-w-[1440px] mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <AnimateOnScroll variant={isEven ? 'fadeLeft' : 'fadeRight'}>
                    <div className={`relative overflow-hidden group ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div style={{ aspectRatio: '4/3' }} className="overflow-hidden">
                        <img
                          src={SERVICE_IMAGES[i]}
                          alt={item.tag}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div
                        className="absolute -bottom-4 -left-4 w-20 h-20 hidden lg:flex items-center justify-center"
                        style={{ background: RED }}
                      >
                        <Icon size={36} className="text-white" />
                      </div>
                    </div>
                  </AnimateOnScroll>

                  {/* Content */}
                  <AnimateOnScroll variant={isEven ? 'fadeRight' : 'fadeLeft'} delay={0.1}>
                    <div className={!isEven ? 'lg:col-start-1' : ''}>
                      <span
                        className="block mb-3"
                        style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: RED }}
                      >
                        {item.tag}
                      </span>
                      <h2
                        className="text-[#111111] dark:text-white mb-4"
                        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1 }}
                      >
                        {item.title}
                      </h2>
                      <p
                        className="text-[#666666] dark:text-[#999999] mb-8"
                        style={{ fontSize: 'clamp(1rem, 1.2vw, 1.0625rem)', fontWeight: 400, lineHeight: 1.75 }}
                      >
                        {item.desc}
                      </p>
                      <StaggerContainer className="flex flex-col gap-3 mb-8" baseDelay={0.1} staggerDelay={0.07}>
                        {item.features.map((feat) => (
                          <StaggerItem key={feat} variant="fadeLeft">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 size={18} style={{ color: RED, flexShrink: 0, marginTop: 2 }} />
                              <span
                                className="text-[#444444] dark:text-[#CCCCCC]"
                                style={{ fontSize: '0.9375rem', fontWeight: 400, lineHeight: 1.5 }}
                              >
                                {feat}
                              </span>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                      <Link
                        to="/contatti"
                        className="inline-flex items-center gap-2 px-6 py-3 text-white transition-all hover:gap-3"
                        style={{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                      >
                        {t.serviziPage.cta}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.15)' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-[#0A0A0A]/80" />
        <AnimateOnScroll variant="fadeUp" className="relative z-10 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-white mb-2"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 900, lineHeight: 1.2 }}
            >
              {t.ctaBanner.title}
            </h2>
            <p className="text-white/50" style={{ fontSize: '1rem', fontWeight: 400 }}>
              {t.ctaBanner.subtitle}
            </p>
          </div>
          <Link
            to="/contatti"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 text-white hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            {t.ctaBanner.cta}
            <ArrowRight size={16} />
          </Link>
        </AnimateOnScroll>
      </section>
    </div>
  );
}

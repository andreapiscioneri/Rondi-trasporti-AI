import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '../context/LangContext';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';

const RED = '#E5322D';

const STORIA_IMG_1 = 'https://images.unsplash.com/photo-1614571272828-2d8289ff8fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600';
const STORIA_IMG_2 = 'https://images.unsplash.com/photo-1638636206910-49cdd0af6d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600';
const STORIA_IMG_3 = 'https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200';

// Map timeline years to images
const TIMELINE_IMAGES = [
  'https://images.unsplash.com/photo-1668532070017-1956f52f097f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1622103358651-97d6cb0df332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1716512060259-d114cfba13e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1763824391332-60f6df9b92e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1655300256620-680cb0f1cec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1768796372610-f844d490a734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1638636206910-49cdd0af6d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  'https://images.unsplash.com/photo-1614571272828-2d8289ff8fc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
];

export function Storia() {
  const { t } = useLang();
  const { storiaPage: pg } = t;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'right' ? 360 : -360, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-white dark:bg-[#0A0A0A] py-20 lg:py-28 px-4 sm:px-6 lg:px-10 border-b border-black/10 dark:border-white/10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll variant="fadeLeft">
              <span
                className="block mb-4"
                style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: RED }}
              >
                {pg.hero.tag}
              </span>
              <h1
                className="text-[#111111] dark:text-white mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em' }}
              >
                {pg.hero.title}
              </h1>
              <p
                className="text-[#666666] dark:text-[#999999]"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', fontWeight: 400, lineHeight: 1.7 }}
              >
                {pg.hero.subtitle}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeRight" delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <img src={STORIA_IMG_1} alt="1998" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden mt-8" style={{ aspectRatio: '1/1' }}>
                  <img src={STORIA_IMG_2} alt="2024" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-2 overflow-hidden" style={{ aspectRatio: '16/7' }}>
                  <img src={STORIA_IMG_3} alt="Fleet" className="w-full h-full object-cover" />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── DESKTOP: Horizontal timeline ─── */}
      <section className="hidden md:block py-20 lg:py-28 bg-[#F5F5F5] dark:bg-[#111111] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-10">
          <AnimateOnScroll variant="fadeUp" className="flex items-center justify-between">
            <h2
              className="text-[#111111] dark:text-white"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 900 }}
            >
              Timeline
              <span className="ml-3 inline-block" style={{ color: RED }}>1998 → 2024</span>
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => scrollBy('left')}
                disabled={!canScrollLeft}
                className="w-10 h-10 flex items-center justify-center border border-black/20 dark:border-white/20 text-[#333333] dark:text-white disabled:opacity-30 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Scroll left"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => scrollBy('right')}
                disabled={!canScrollRight}
                className="w-10 h-10 flex items-center justify-center border border-black/20 dark:border-white/20 text-[#333333] dark:text-white disabled:opacity-30 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Scroll right"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </AnimateOnScroll>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto pb-8"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
        >
          <div className="flex items-start px-4 sm:px-6 lg:px-10 gap-0 min-w-max">
            {pg.timeline.map((item, i) => (
              <div key={item.year} className="flex flex-col items-center" style={{ width: 300 }}>
                {/* Top content (odd) */}
                <div className="h-52 px-5 flex flex-col justify-end pb-4" style={{ opacity: i % 2 === 1 ? 1 : 0, pointerEvents: i % 2 === 1 ? 'auto' : 'none' }}>
                  {i % 2 === 1 && (
                    <>
                      <div className="overflow-hidden mb-3 rounded-none" style={{ width: 80, height: 80 }}>
                        <img src={TIMELINE_IMAGES[i]} alt={item.year} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-[#111111] dark:text-white mb-1" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                        {item.title}
                      </h3>
                      <p className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.5 }}>
                        {item.desc}
                      </p>
                    </>
                  )}
                </div>

                {/* Timeline line + dot */}
                <div className="flex items-center w-full">
                  <div className="flex-1 h-px bg-[#CCCCCC] dark:bg-[#444444]" style={{ opacity: i === 0 ? 0 : 1 }} />
                  <div className="flex flex-col items-center flex-shrink-0">
                    <motion.div
                      className="w-4 h-4 rounded-full border-2 border-white dark:border-[#111111]"
                      style={{ background: RED }}
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    />
                    <span className="mt-2" style={{ fontSize: '1.1rem', fontWeight: 900, color: RED }}>
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-[#CCCCCC] dark:bg-[#444444]" style={{ opacity: i === pg.timeline.length - 1 ? 0 : 1 }} />
                </div>

                {/* Bottom content (even) */}
                <div className="h-52 px-5 flex flex-col justify-start pt-4" style={{ opacity: i % 2 === 0 ? 1 : 0, pointerEvents: i % 2 === 0 ? 'auto' : 'none' }}>
                  {i % 2 === 0 && (
                    <>
                      <div className="overflow-hidden mb-3" style={{ width: 80, height: 80 }}>
                        <img src={TIMELINE_IMAGES[i]} alt={item.year} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-[#111111] dark:text-white mb-1" style={{ fontSize: '0.875rem', fontWeight: 700 }}>
                        {item.title}
                      </h3>
                      <p className="text-[#666666] dark:text-[#999999]" style={{ fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.5 }}>
                        {item.desc}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MOBILE: Vertical ─── */}
      <section className="md:hidden bg-[#F5F5F5] dark:bg-[#111111] py-10 px-4">
        <h2 className="mb-8 px-2" style={{ fontSize: '1.5rem', fontWeight: 900, color: RED }}>
          Timeline
        </h2>
        <div className="flex flex-col gap-0">
          {pg.timeline.map((item, i) => (
            <div key={item.year} className="flex gap-4 pb-8">
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: RED }} />
                {i < pg.timeline.length - 1 && (
                  <div className="flex-1 w-px mt-2" style={{ background: '#CCCCCC', minHeight: 40 }} />
                )}
              </div>
              <div className="flex-1 pb-2">
                <span className="block mb-2" style={{ fontSize: '1.25rem', fontWeight: 900, color: RED }}>
                  {item.year}
                </span>
                <h3 className="text-[#111111] dark:text-white mb-2" style={{ fontSize: '1rem', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-[#666666] dark:text-[#999999] mb-4" style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.65 }}>
                  {item.desc}
                </p>
                <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img src={TIMELINE_IMAGES[i]} alt={item.year} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop cards */}
      <section className="hidden md:block py-20 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.07}>
            {pg.timeline.map((item, i) => (
              <StaggerItem key={item.year} variant="fadeUp">
                <div className="border border-black/10 dark:border-white/10 flex flex-col hover:border-[#E5322D]/30 transition-colors overflow-hidden group h-full">
                  <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={TIMELINE_IMAGES[i]}
                      alt={item.year}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <span style={{ fontSize: '1.5rem', fontWeight: 900, color: RED }}>{item.year}</span>
                    <h3 className="text-[#111111] dark:text-white" style={{ fontSize: '0.9375rem', fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p className="text-[#666666] dark:text-[#999999] flex-1" style={{ fontSize: '0.8125rem', fontWeight: 400, lineHeight: 1.65 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={STORIA_IMG_3}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.15)' }}
          />
        </div>
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        <AnimateOnScroll variant="fadeUp" className="relative z-10 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="text-white" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.2 }}>
            {pg.cta}
          </h2>
          <Link
            to="/lavora-con-noi"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 text-white hover:opacity-90 transition-opacity"
            style={{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            {t.nav.lavora} <ArrowRight size={16} />
          </Link>
        </AnimateOnScroll>
      </section>
    </div>
  );
}

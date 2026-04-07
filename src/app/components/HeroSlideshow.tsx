import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const RED = '#E5322D';

export interface HeroSlide {
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaHref: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
}

interface HeroSlideshowProps {
  slides: HeroSlide[];
}

export function HeroSlideshow({ slides }: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, slides.length, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: '100svh', height: '100svh', maxHeight: '900px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images with Ken Burns */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ opacity: { duration: 1.2, ease: 'easeInOut' }, scale: { duration: 7, ease: 'linear' } }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.45)' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />

      {/* Animated red accent line */}
      <motion.div
        className="absolute left-0 top-0 w-1 bg-[#E5322D]"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16 pb-24 lg:pb-28">
        <div className="max-w-[1440px] mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Tag */}
              <motion.span
                className="inline-flex items-center gap-2 mb-5 text-white/60"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase' }}
              >
                <span className="w-6 h-px bg-[#E5322D]" />
                {slide.tag}
              </motion.span>

              {/* Title */}
              <motion.h1
                className="text-white mb-5 max-w-4xl whitespace-pre-line"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em' }}
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-white/70 mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', fontWeight: 400, lineHeight: 1.7 }}
              >
                {slide.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Link
                  to={slide.ctaHref}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white transition-all hover:gap-3"
                  style={{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  {slide.cta}
                  <ArrowRight size={16} />
                </Link>
                {slide.ctaSecondary && slide.ctaSecondaryHref && (
                  <Link
                    to={slide.ctaSecondaryHref}
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 hover:border-white/70 transition-all"
                    style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                  >
                    {slide.ctaSecondary}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Controls & Progress — bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 sm:px-10 lg:px-16 pb-7">
        {/* Progress dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className="group flex items-center gap-2"
              aria-label={`Slide ${i + 1}`}
            >
              <div className="relative h-0.5 overflow-hidden bg-white/20 transition-all" style={{ width: i === current ? 40 : 16 }}>
                {i === current && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-[#E5322D]"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5.5, ease: 'linear' }}
                    key={`progress-${current}-${paused}`}
                  />
                )}
                {i !== current && (
                  <div className="absolute inset-0 bg-white/50 group-hover:bg-white/80 transition-colors" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Arrow controls */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 hover:border-white/50 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white/10 hover:border-white/50 transition-all"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Slide counter */}
        <div className="hidden sm:flex items-center gap-1 text-white/40" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
          <span className="text-white">{String(current + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}

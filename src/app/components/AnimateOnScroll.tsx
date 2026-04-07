import { useRef, useEffect, useState, type ReactNode } from 'react';
import { motion } from 'motion/react';

type Variant = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn';

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

const variants: Record<Variant, { hidden: object; visible: object }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function AnimateOnScroll({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.65,
  className = '',
  threshold = 0.15,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  const v = variants[variant];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={v}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Staggered children container
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  baseDelay = 0,
  threshold = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: baseDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

// Item for use inside StaggerContainer
export function StaggerItem({
  children,
  variant = 'fadeUp',
  className = '',
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const v = variants[variant];
  return (
    <motion.div
      className={className}
      variants={{ hidden: v.hidden, visible: { ...v.visible, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
    >
      {children}
    </motion.div>
  );
}

import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div
      className="min-h-screen flex flex-col bg-white dark:bg-[#0A0A0A] text-[#333333] dark:text-white transition-colors duration-300"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="site-atmosphere" />
      <Header />
      <main className="flex-1 pt-[72px] relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

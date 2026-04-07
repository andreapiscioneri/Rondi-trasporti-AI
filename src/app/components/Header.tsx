import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';
import type { Lang } from '../context/translations';
import logoRondi from '../../assets/trasporti_rondi_logo.png';

const RED = '#E5322D';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.servizi, href: '/servizi' },
    { label: t.nav.sostenibilita, href: '/sostenibilita' },
    { label: t.nav.storia, href: '/storia' },
    { label: t.nav.lavora, href: '/lavora-con-noi' },
    { label: t.nav.contatti, href: '/contatti' },
  ];

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  const bgClass = scrolled
    ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md shadow-sm'
    : 'bg-white dark:bg-[#0A0A0A]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/10 dark:border-white/10 ${bgClass}`}
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[72px] flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 group">
            <img
              src={logoRondi}
              alt="Trasporti Rondi"
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative px-3 py-2 transition-colors duration-200 group"
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: isActive(link.href) ? RED : undefined,
                }}
              >
                <span className={`${isActive(link.href) ? '' : 'text-[#333333] dark:text-[#CCCCCC] group-hover:text-[#111111] dark:group-hover:text-white'} transition-colors`}>
                  {link.label}
                </span>
                {isActive(link.href) && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[2px]"
                    style={{ background: RED }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Lang toggle */}
            <button
              onClick={() => setLang((lang === 'it' ? 'en' : 'it') as Lang)}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 transition-colors"
              style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: '#333333' }}
            >
              <span className="dark:text-white">{t.nav.langSwitch}</span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 transition-colors text-[#333333] dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* CTA */}
            <Link
              to="/contatti"
              className="hidden md:flex items-center px-4 py-2 text-white transition-opacity hover:opacity-90"
              style={{ background: RED, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              {lang === 'it' ? 'Preventivo' : 'Get a Quote'}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-[#333333] dark:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
        style={{ background: 'rgba(0,0,0,0.5)' }}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-white dark:bg-[#0A0A0A] lg:hidden transition-transform duration-300 flex flex-col`}
        style={{ transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)', fontFamily: "'Roboto', sans-serif" }}
      >
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-black/10 dark:border-white/10">
          <img src={logoRondi} alt="Trasporti Rondi" className="h-9 w-auto object-contain" />
          <button onClick={() => setMobileOpen(false)} className="text-[#333333] dark:text-white">
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="flex items-center py-3 border-b border-black/5 dark:border-white/5 transition-colors"
              style={{
                fontSize: '1rem',
                fontWeight: isActive(link.href) ? 700 : 400,
                color: isActive(link.href) ? RED : undefined,
              }}
            >
              <span className={isActive(link.href) ? '' : 'text-[#333333] dark:text-[#CCCCCC]'}>
                {link.label}
              </span>
            </Link>
          ))}
          <Link
            to="/whistleblowing"
            className="flex items-center py-3 border-b border-black/5 dark:border-white/5"
            style={{ fontSize: '1rem', fontWeight: 400 }}
          >
            <span className={`${isActive('/whistleblowing') ? '' : 'text-[#333333] dark:text-[#CCCCCC]'}`} style={{ color: isActive('/whistleblowing') ? RED : undefined }}>
              {t.nav.whistleblowing}
            </span>
          </Link>
        </nav>
        <div className="p-6 border-t border-black/10 dark:border-white/10 flex gap-3">
          <button
            onClick={() => setLang((lang === 'it' ? 'en' : 'it') as Lang)}
            className="flex-1 py-2 border border-black/20 dark:border-white/20 text-[#333333] dark:text-white"
            style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}
          >
            {t.nav.langSwitch}
          </button>
          <button
            onClick={toggleTheme}
            className="flex-1 py-2 border border-black/20 dark:border-white/20 text-[#333333] dark:text-white flex items-center justify-center gap-2"
            style={{ fontSize: '0.75rem', fontWeight: 700 }}
          >
            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </>
  );
}

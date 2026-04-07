import { Link } from 'react-router';
import { useLang } from '../context/LangContext';

const RED = '#E5322D';

export function NotFound() {
  const { lang } = useLang();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <span style={{ fontSize: '6rem', fontWeight: 900, color: RED, lineHeight: 1 }}>404</span>
      <h1 className="text-[#111111] dark:text-white mt-4 mb-2" style={{ fontSize: '2rem', fontWeight: 900 }}>
        {lang === 'it' ? 'Pagina non trovata' : 'Page not found'}
      </h1>
      <p className="text-[#666666] dark:text-[#999999] mb-8" style={{ fontSize: '1rem' }}>
        {lang === 'it'
          ? 'La pagina che cerchi non esiste o è stata spostata.'
          : "The page you're looking for doesn't exist or has been moved."}
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 text-white"
        style={{ background: RED, fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
      >
        {lang === 'it' ? 'Torna alla Home' : 'Back to Home'}
      </Link>
    </div>
  );
}
import { Link } from 'react-router';
import { useLang } from '../context/LangContext';
import logoRondi from '../../assets/trasporti_rondi_logo.png';

const RED = '#E5322D';

export function Footer() {
  const { t } = useLang();

  return (
    <footer
      className="bg-[#0A0A0A] dark:bg-[#050505] text-white"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center mb-6">
              <img src={logoRondi} alt="Trasporti Rondi" className="h-11 w-auto object-contain" />
            </Link>
            <p className="text-white/50" style={{ fontSize: '0.8125rem', fontWeight: 400, lineHeight: 1.7 }}>
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {['LI', 'FB', 'IG'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:border-white/50 hover:text-white/70 transition-colors"
                  style={{ fontSize: '0.625rem', fontWeight: 700 }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-white mb-4"
                style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/50 hover:text-white transition-colors"
                      style={{ fontSize: '0.8125rem', fontWeight: 400 }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30" style={{ fontSize: '0.6875rem', fontWeight: 400 }}>
            {t.footer.legal}
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: RED }} />
            <span className="text-white/30" style={{ fontSize: '0.6875rem', fontWeight: 400 }}>
              Trasporti Rondi S.p.A.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

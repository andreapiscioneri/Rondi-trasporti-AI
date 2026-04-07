import { createContext, useContext, useState } from 'react';
import { translations, type Lang, type Translations } from './translations';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextValue>({
  lang: 'it',
  setLang: () => {},
  t: translations.it,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('it');

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

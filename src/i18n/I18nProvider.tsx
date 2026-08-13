import React from 'react';
import { en, type Dictionary } from './en';
import { ms } from './ms';

export type Locale = 'en' | 'ms';

const dictionaries: Record<Locale, Dictionary> = { en, ms };

const STORAGE_KEY = '12gig-locale';

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'ms';
}

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored)) return stored;
  const nav = window.navigator.language.toLowerCase();
  if (nav.startsWith('ms')) return 'ms';
  return 'en';
}

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale === 'ms' ? 'ms' : 'en';
}

type I18nContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const I18nContext = React.createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(() => detectLocale());

  React.useEffect(() => {
    applyDocumentLocale(locale);
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value = React.useMemo<I18nContextValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
    }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = React.useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

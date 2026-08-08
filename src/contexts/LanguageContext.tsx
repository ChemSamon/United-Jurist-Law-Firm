import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language, LocalizedString } from '../types';
import { en } from '../i18n/en';
import { km } from '../i18n/km';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyPath: string) => any;
  localize: (obj: LocalizedString | undefined) => string;
  isKhmer: boolean;
}

const dictionaries = { en, km };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('ujl_language') as Language;
    if (saved === 'en' || saved === 'km') return saved;
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ujl_language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (keyPath: string): any => {
    const keys = keyPath.split('.');
    let current: any = dictionaries[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if key missing in Khmer
        let fallback: any = dictionaries['en'];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return keyPath;
          }
        }
        return fallback !== undefined ? fallback : keyPath;
      }
    }
    return current !== undefined ? current : keyPath;
  };

  const localize = (obj: LocalizedString | undefined): string => {
    if (!obj) return '';
    return obj[language] || obj.en || '';
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        localize,
        isKhmer: language === 'km',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

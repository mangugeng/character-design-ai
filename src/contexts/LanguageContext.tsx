'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { enTranslations } from '../translations/en';
import { idTranslations } from '../translations/id';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof enTranslations) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => enTranslations[key] || (key as string),
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const translations = language === 'en' ? enTranslations : idTranslations;
  const t = (key: keyof typeof enTranslations) => translations[key] || (key as string);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext); 
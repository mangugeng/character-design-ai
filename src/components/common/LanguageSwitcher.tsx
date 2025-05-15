'use client';

import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageSwitcher.css';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="language-switcher">
      <label htmlFor="languageSelect">{t('language')}: </label>
      <select 
        id="languageSelect" 
        value={language} 
        onChange={(e) => setLanguage(e.target.value as 'en' | 'id')}
      >
        <option value="en">{t('english')}</option>
        <option value="id">{t('indonesian')}</option>
      </select>
    </div>
  );
}; 
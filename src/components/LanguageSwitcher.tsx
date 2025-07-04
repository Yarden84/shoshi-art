'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50 transition-colors text-sm font-medium"
    >
      {language === 'en' ? 'עברית' : 'English'}
    </button>
  );
} 
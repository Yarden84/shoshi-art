'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2"  style={{direction: 'ltr'}} > 
      <button
        onClick={() => setLanguage('en')}
        className={`border-none font-[Art1-he] text-xs cursor-pointer hover:text-black ${
          language === 'en' ? 'text-black' : 'text-gray-300'
        }`}
      >
        EN
      </button>
      <span className='border-l-2 border-gray-300 h-4 ml-1'></span>
      <button
        onClick={() => setLanguage('he')}
        className={`border-none font-[Art1-he] text-m pb-1 cursor-pointer hover:text-black ${
          language === 'he' ? 'text-black' : 'text-gray-300'
        }`}
      >
        עב
      </button>
    </div>
  );
} 
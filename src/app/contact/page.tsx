'use client';

import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  return (
    <div className="relative min-h-screen bg-gray-50 py-12 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/contact-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
          filter: 'blur(2px) brightness(1.1)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl text-gray-900 mb-4 ${language === 'he' ? 'font-bold' : ''}`}>
            {language === 'he' ? 'צור קשר' : 'Contact Me'}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'he' 
              ? 'אשמח לשמוע ממכם!'
              : 'Feel free to reach out — I’m always happy to connect'
            }
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <ContactForm language={language} />
        </div>
      </div>
    </div>
  );
} 
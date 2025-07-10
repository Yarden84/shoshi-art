'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ThankYouPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          {language === 'he' ? 'תודה!' : 'Thank You!'}
        </h1>
        <p className="text-lg text-gray-700">
          {language === 'he'
            ? 'ההודעה שלך נשלחה בהצלחה. נחזור אליך בהקדם.'
            : 'Your message has been sent successfully. We will get back to you soon.'}
        </p>
      </div>
    </div>
  );
} 
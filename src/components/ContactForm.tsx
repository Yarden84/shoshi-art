'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactForm() {
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
          <form 
            name="contact"
            method="POST"
            action="/"
            className="space-y-4"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {language === 'he' ? 'שם' : 'Name'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {language === 'he' ? 'אימייל' : 'Email'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {language === 'he' ? 'נושא' : 'Subject'}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {language === 'he' ? 'הודעה' : 'Message'}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              {language === 'he' ? 'שלח הודעה' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 
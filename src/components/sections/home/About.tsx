'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AboutContent, getAboutContent } from '@/lib/cms';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [content, setContent] = useState<AboutContent | null>(null);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage(); // Get the current language from the LanguageContext

  useEffect(() => {
    async function fetchAboutContent() {
      try {
        const data = await getAboutContent(language);
        setContent(data);
      } catch (error) {
        console.error('Error fetching about content:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAboutContent();
  }, [language]); 

  const defaultContent = {
    title: 'About Me',
    content: 'Shoshi Haizler is a passionate artist who loves painting, drawing, and sculpting. Her work is inspired by the beauty of everyday life and the vibrant colors of nature. With years of experience and a unique artistic vision, Shoshi brings her creations to life in her studio.',
    button: 'Continue Reading'
  };

  const displayContent = content || defaultContent;

  // Truncate content to approximately 7 lines for the main page
  const truncateContent = (text: string, maxLines: number = 7) => {
    const words = text.split(' ');
    const wordsPerLine = 12; // Approximate words per line
    const maxWords = maxLines * wordsPerLine;
    
    if (words.length <= maxWords) {
      return text;
    }
    
    return words.slice(0, maxWords).join(' ') + '...';
  };

  const truncatedContent = truncateContent(displayContent.content);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-gray-600">Loading about content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen" style={{ backgroundColor: '#f5f1e8' }}>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        className="w-full h-screen flex items-center justify-center"
      >
        <div className="flex flex-col md:flex-row w-full max-md:w-92 max-w-6xl h-[70vh] max-md:h-[82vh] shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
            <img
              src="/images/about.jpg"
              alt="Shoshi Haizler working on sculpture"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#e2b24a]/80 mix-blend-multiply" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 bg-white">
            <h2 className={`uppercase tracking-widest text-gray-700 ${language === 'he' ? 'text-2xl' : 'text-sm'} mb-4`}>
              {displayContent.title}
            </h2>
            <p className={`text-2xl ${language === 'he' ? 'md:text-2xl' : 'md:text-3xl'} font-light text-gray-800 mb-8 leading-snug`} style={{ display: '-webkit-box', WebkitLineClamp: 7, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {truncatedContent}
            </p>
            <Link href="/about">
              <button className="mt-4 px-8 py-3 bg-gray-900 text-white rounded shadow hover:bg-gray-700 transition-colors text-lg cursor-pointer">
                {displayContent.button}
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 
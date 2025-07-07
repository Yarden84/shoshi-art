'use client';

import { useState, useEffect } from 'react';
import { getAboutContent, AboutContent } from '@/lib/strapi';
import { useLanguage } from '@/contexts/LanguageContext';
// import StrapiImage from '@/components/ui/StrapiImage';

export default function AboutPage() {
  const [aboutContent, setAboutContent] = useState<AboutContent | null>(null);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    async function fetchAboutContent() {
      try {
        const data = await getAboutContent(language);
        setAboutContent(data);
      } catch (error) {
        console.error('Error fetching about content:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchAboutContent();
  }, [language]); // Re-fetch when language changes

  const defaultContent = {
    title: 'About Me',
    content: `
      <p>Shoshi Haizler is a passionate artist who loves painting, drawing, and sculpting. Her work is inspired by the beauty of everyday life and the vibrant colors of nature.</p>
      <p>With years of experience and a unique artistic vision, Shoshi brings her creations to life in her studio. She believes that art has the power to connect people and evoke emotions that words cannot express.</p>
      <p>Her artistic journey began at a young age, and she has been honing her craft ever since. She draws inspiration from the world around her, from the changing seasons to the people she meets.</p>
    `,
    bio: 'Shoshi Haizler is a passionate artist who loves painting, drawing, and sculpting. Her work is inspired by the beauty of everyday life and the vibrant colors of nature.',
  };

  const displayContent = aboutContent || defaultContent;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading about content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 py-12 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
          filter: 'blur(2px) brightness(1.1)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-96 lg:h-full">
              <img
                src="/images/about.jpg"
                alt="Shoshi Haizler"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {displayContent.title}
              </h1>

              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {displayContent.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
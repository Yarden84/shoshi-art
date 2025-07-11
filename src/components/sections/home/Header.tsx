'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { getHeaderContent, HeaderContent } from '@/lib/cms';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: image1Ref, inView: image1InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: image2Ref, inView: image2InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: image3Ref, inView: image3InView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const [content, setContent] = useState<HeaderContent | null>(null);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    async function fetchHeaderContent() {
      try {
        const data = await getHeaderContent(language);
        setContent(data);
      } catch (error) {
        console.error('Error fetching header content:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchHeaderContent();
  }, [language]); 

  const defaultContent = {
    title: 'Welcome to my Gallery',
    subtitle: 'My name is Shoshi Haizler',
    small: 'I love painting, drawing and sculpting.',
    button: 'Enjoy your visit!'
  };

  const displayContent = content || defaultContent;

  if (loading) {
    return (
      <section className="w-full h-screen flex items-center justify-center bg-[#f8f7f4]">
        <div className="text-center">
          <p className="text-gray-600">Loading header content...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full h-screen flex items-center justify-center bg-[#f8f7f4]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 gap-8 mb-auto mt-16">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: -60 }}
          animate={textInView ? { opacity: 1, x: 0 } : {opacity: 0, x: -60}}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex-1 flex flex-col justify-center items-start space-y-4 max-md:block max-md:absolute max-md:left-[0] max-md:top-[0] max-md:w-full max-md:h-screen"
        >
          <h1 className={`text-gray-800 mb-12 relative max-md:absolute ${language === 'he' ? 'left-3 md:text-[7.5rem] max-md:self-end text-[3.2rem] max-md:w-[10rem] max-md:font-[700] max-md:top-[310px]' : 'xl:text-8xl md:text-7xl text-[2rem] max-md:w-[10rem] max-md:left-10 max-md:top-[320px]'}`}>{displayContent.title}</h1>
          <h3 className={`w-[300px] max-md:w-[12rem] text-gray-600 text-lg mb-8 max-md:absolute ${language === 'en' ? 'max-md:self-end max-md:mr-5 xl:text-2xl md:text-xl max-md:right-0' : 'max-md:mr-10 md:text-2xl'} max-md:top-[480px]`}>{displayContent.subtitle}</h3>
          <h5 className={`text-gray-600 text-base md:text-lg max-md:absolute ${language === 'en' ? ' max-md:self-end max-md:mr-32 max-md:right-0' : 'max-md:mr-10'} max-md:top-[580px]`}>{displayContent.small}</h5>
        </motion.div>
        <div className="flex-1 flex items-center justify-center relative min-h-[82vh]">
          <motion.div 
            ref={image1Ref}
            initial={{ opacity: 0, y: -80 }}
            animate={image1InView ? { opacity: 1, y: 0 } : {opacity: 0, y: -80}}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className={`w-87.5 h-87.5 max-xl:w-75 max-lg:w-60 max-lg:h-60 max-xl:h-75 max-md:w-50 max-md:h-50 rounded-lg shadow-lg absolute left-8 max-xl:left-auto max-lg:right-38 max-xl:right-50 top-0 max-md:top-[100] z-10 border-4 border-white flex items-center justify-center overflow-hidden ${language === 'he' ? 'max-md:left-auto max-md:right-[-220]' : 'max-md:left-3'}`}
            style={{ zIndex: 10 }}
          >
            <div className="w-126 h-126 max-md:w-80 max-md:h-80 bg-[url('/images/header-1.jpg')] bg-cover bg-center shrink-0 animate-spin-slower"></div>
          </motion.div>
          
          <motion.div 
            ref={image2Ref}
            initial={{ opacity: 0, x: 40 }}
            animate={image2InView ? { opacity: 1, x: 0 } : {opacity: 0, x: 80}}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }} 
            className="w-62.5 max-lg:w-47 max-md:w-50 max-sm:w-[40vw] rounded-lg shadow-md object-cover absolute right-0 max-md:right-[-5] max-sm:right-[30] top-[30%] max-md:top-[350] z-20 border-4 border-white shine">
              
            <img
              src="/images/header-2.jpg"
              alt="Shoshi Haizler"
              className="w-[100%] rounded-lg"
              style={{ zIndex: 20 }}
            />
          </motion.div>
          <motion.div 
            ref={image3Ref}
            initial={{ opacity: 0, y: 40 }}
            animate={image3InView ? { opacity: 1, y: 0 } : {opacity: 0, y: 40}}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}  className={`w-67.5 max-xl:w-58 max-md:w-45 rounded-lg shadow object-cover absolute left-0 bottom-0 max-xl:left-auto max-xl:right-80 ${language === 'he' ? 'max-lg:w-45 max-lg:right-50 max-lg:bottom-20' : 'max-lg:right-52'} max-md:right-[-45] max-md:bottom-auto max-md:top-[-50] z-10 border-4 border-white shine`}>
              <img
                src="/images/header-3.jpg"
                alt="Shoshi Haizler"
                className="w-[100%] rounded-lg"
              />
          </motion.div>
          </div>
      </div>
    </section>
  );
} 

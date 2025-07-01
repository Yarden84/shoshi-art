'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AboutContent } from '@/lib/strapi';
import StrapiImage from '@/components/ui/StrapiImage';

interface AboutProps {
  content?: any;
}

export default function About({ content }: AboutProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const defaultContent = {
    title: 'About Me',
    bio: 'Shoshi Haizler is a passionate artist who loves painting, drawing, and sculpting. Her work is inspired by the beauty of everyday life and the vibrant colors of nature. With years of experience and a unique artistic vision, Shoshi brings her creations to life in her studio.',
  };

  const displayContent = content?.attributes || defaultContent;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
      className="w-full h-screen flex items-center justify-center bg-white"
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-[70vh] shadow-lg rounded-lg overflow-hidden">
        <div className="relative w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
          {content?.attributes.artistImage?.data ? (
            <StrapiImage
              image={content.attributes.artistImage.data}
              alt="Shoshi Haizler working on sculpture"
              fill
              className="object-cover object-center"
            />
          ) : (
            <img
              src="/images/about/1.jpg"
              alt="Shoshi Haizler working on sculpture"
              className="w-full h-full object-cover object-center"
            />
          )}
          <div className="absolute inset-0 bg-[#e2b24a]/80 mix-blend-multiply" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 bg-white">
          <h2 className="uppercase tracking-widest text-gray-700 text-sm mb-4">
            {displayContent.title}
          </h2>
          <p className="text-2xl md:text-3xl font-light text-gray-800 mb-8 leading-snug">
            {displayContent.bio}
          </p>
          <Link href="/about">
            <button className="mt-4 px-8 py-3 bg-gray-900 text-white rounded shadow hover:bg-gray-700 transition-colors text-lg cursor-pointer">
              Continue Reading
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
} 
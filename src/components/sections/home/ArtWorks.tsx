'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GalleryItem } from '@/lib/cms';
import { useLanguage } from '@/contexts/LanguageContext';

interface ArtWorksProps {
  artworks: GalleryItem[];
}

const categoryArtworks = [
  {
    title: 'Paintings',
    img: '/images/header-1.jpg',
    href: '/gallery?filter=paintings',
  },
  {
    title: 'Children',
    img: '/images/header-2.jpg',
    href: '/gallery?filter=children',
  },
  {
    title: 'Sculpture',
    img: '/images/header-3.jpg',
    href: '/gallery?filter=sculpture',
  },
  {
    title: 'Other',
    img: '/images/header-4.jpg',
    href: '/gallery?filter=other',
  },
];

export default function ArtWorks({ artworks }: ArtWorksProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { language } = useLanguage();
  console.log("artworks: ", artworks);
  console.log("artworks.items.length: ", artworks?.length);
  const displayArtworks = artworks.length > 0 
    ? artworks.map((artwork) => {
        return {
          title: (language === 'he' ? artwork.title_he : artwork.title) || 'Untitled',
          img: artwork?.images?.[0]
            ? artwork.images[0].url
            : '/images/gallery/painting-2.jpg',
          href: `/gallery?filter=${language === 'he' ? artwork.title_he : artwork.title || 'untitled'}`,
        };
      })
    : categoryArtworks;

  console.log('Display Artworks:', displayArtworks);

  return (
    <div className="w-full h-screen" style={{ backgroundColor: '#fefcf6' }}>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        className="w-full h-screen flex flex-col items-center justify-center relative"
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
        <h1 className="text-4xl text-gray-800 mb-12 z-10">{language === 'he' ? 'העבודות שלי' : 'My Artwork'}</h1>
        <div className="flex flex-row flex-wrap justify-center gap-8 z-10">
          {displayArtworks.map((art, index) => (
            <Link
              key={index}
              href={art.href}
              className="group"
            >
              <div className="w-64 h-64 max-md:w-48 max-md:h-48 rounded-lg shadow-lg border-4 border-white overflow-hidden flex items-center justify-center relative group">
                <img
                  src={art.img}
                  alt={art.title}
                  className="w-[350px] h-[350px] object-cover animate-none group-hover:scale-110 transition-all duration-700"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white text-3xl bg-black/30 group-hover:bg-black/50 transition-colors capitalize">
                  {art.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </div>
  );
} 
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Artwork } from '@/lib/strapi';

interface ArtWorksProps {
  artworks: Artwork[];
}

const categoryArtworks = [
  {
    title: 'Paintings',
    img: '/images/gallery/painting-2.jpg',
    href: '/gallery?filter=Paintings',
  },
  {
    title: 'Children',
    img: '/images/gallery/children-1.jpg',
    href: '/gallery?filter=Children',
  },
  {
    title: 'Sculpture',
    img: '/images/gallery/sculpture-3.jpg',
    href: '/gallery?filter=Sculpture',
  },
  {
    title: 'Other',
    img: '/images/gallery/other-4.jpg',
    href: '/gallery?filter=Other',
  },
];

export default function ArtWorks({ artworks }: ArtWorksProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  console.log('Artworks from Strapi:', artworks);

  const displayArtworks = artworks.length > 0 
    ? artworks.slice(0, 4).map((artwork) => {
        return {
          title: artwork.title || 'Untitled',
          img: artwork?.images?.[0]
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${artwork.images[0].url}`
            : '/images/gallery/painting-2.jpg',
          href: `/gallery?filter=${artwork.title || 'Untitled'}`,
        };
      })
    : categoryArtworks;

  console.log('Display Artworks:', displayArtworks);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
      className="w-full h-screen flex flex-col items-center justify-center relative"
      style={{ backgroundColor: '#fefcf6' }}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <h1 className="text-4xl font-bold text-gray-800 mb-12 z-10">My Artwork</h1>
      <div className="flex flex-row gap-8 z-10">
        {displayArtworks.map((art, index) => (
          <Link
            key={index}
            href={art.href}
            className="group"
          >
            <div className="w-[250px] h-[250px] rounded-lg shadow-lg border-4 border-white overflow-hidden flex items-center justify-center relative group">
              <img
                src={art.img}
                alt={art.title}
                className="w-[350px] h-[350px] object-cover animate-none group-hover:scale-110 transition-all duration-700"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white text-3xl bg-black/30 group-hover:bg-black/50 transition-colors">
                {art.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
} 
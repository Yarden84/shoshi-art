'use client';

import { useState, useEffect } from 'react';
import Header from "@/components/sections/home/Header";
import ArtWorks from "@/components/sections/home/ArtWorks";
import About from "@/components/sections/home/About";
import { getArtworks, Artwork } from "@/lib/strapi";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    async function fetchArtworks() {
      try {
        const data = await getArtworks(language);
        setArtworks(data);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchArtworks();
  }, [language]); // Re-fetch when language changes

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <ArtWorks artworks={artworks} />
      <About />
    </div>
  );
}

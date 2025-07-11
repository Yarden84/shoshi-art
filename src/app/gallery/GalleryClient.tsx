'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import FilterDropdown from '@/components/FilterDropdown';
import { GalleryItem } from '@/lib/cms';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GalleryClient({ galleryItems }: { galleryItems: GalleryItem[] }) {
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  
  const urlFilter = searchParams.get('filter');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    if (urlFilter) {
      setFilter(urlFilter);
    }
  }, [urlFilter]);

  const generateFilterOptions = (galleryItems: GalleryItem[]): string[] => {
    const categories = new Set<string>();
    
    galleryItems.forEach(galleryItem => {
      if (galleryItem.title) categories.add(language === 'en' ? galleryItem.title : galleryItem.title_he);
    });
    console.log("galleryItems: ");
    console.log(galleryItems);
    
    return ['All', ...Array.from(categories).sort()];
  };

  const filterOptions = generateFilterOptions(galleryItems);

  // Reset filter when language changes and current filter is not valid
  useEffect(() => {
    if (!filterOptions.includes(filter)) {
      setFilter('All');
    }
  }, [language, filterOptions, filter]);

  const filteredGalleryItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(galleryItem => language === 'en' ? galleryItem.title === filter : galleryItem.title_he === filter);

  const allImages: Array<{ galleryItem: GalleryItem; image: { url: string }; imageIndex: number }> = [];
  filteredGalleryItems.forEach(galleryItem => {
    if (galleryItem.images && galleryItem.images.length > 0) {
      galleryItem.images.forEach((image, imageIndex) => {
        allImages.push({ galleryItem, image, imageIndex });
      });
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between mb-8">
          <h1 className={`text-4xl ${language === 'he' ? 'font-bold' : ''} text-gray-800`}>{language === 'en' ? 'Gallery' : 'גלריה'}</h1>
          <FilterDropdown
            options={filterOptions}
            value={filter}
            onChange={setFilter}
          />
        </div>
        {allImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No gallery items available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allImages.map(({ galleryItem, image, imageIndex }) => (
              <div key={`${galleryItem.title}-${imageIndex}`} className="w-full aspect-square rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-gray-50 flex items-center justify-center group border-4 border-white">
                <img
                  src={image.url}
                  alt={`${galleryItem.title || 'Gallery Item'} - Image ${imageIndex + 1}`}
                  className="h-full animate-none group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 
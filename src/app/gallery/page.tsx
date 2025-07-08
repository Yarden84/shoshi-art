'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import FilterDropdown from '@/components/FilterDropdown';
import { getGalleryItems, GalleryItem } from '@/lib/cms';
import { useLanguage } from '@/contexts/LanguageContext';

function GalleryPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filter, setFilter] = useState('All');
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  const generateFilterOptions = (galleryItems: GalleryItem[]): string[] => {
    const categories = new Set<string>();
    
    galleryItems.forEach(galleryItem => {
      if (galleryItem.title) {
        categories.add(galleryItem.title);
      }
    });
    
    return ['All', ...Array.from(categories).sort()];
  };

  const filterOptions = generateFilterOptions(galleryItems);

  useEffect(() => {
    const urlFilter = searchParams.get('filter');
    
    if (urlFilter && filterOptions.includes(urlFilter)) {
      setFilter(urlFilter);
    } else if (!urlFilter) {
      setFilter('All');
    }
  }, [searchParams, filterOptions]);

  useEffect(() => {
    async function fetchGalleryItems() {
      try {
        const data = await getGalleryItems();
        setGalleryItems(data);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGalleryItems();
  }, [language]); 

  const handleFilterChange = (value: string) => {
    setFilter(value);
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (value === 'All') {
      params.delete('filter');
    } else {
      params.set('filter', value);
    }
    router.replace(`?${params.toString()}`);
  };

  const filteredGalleryItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(galleryItem => galleryItem.title === filter);

  const allImages: Array<{ galleryItem: GalleryItem; image: { url: string }; imageIndex: number }> = [];
  
  filteredGalleryItems.forEach(galleryItem => {
    if (galleryItem.images && galleryItem.images.length > 0) {
      galleryItem.images.forEach((image, imageIndex) => {
        allImages.push({ galleryItem, image, imageIndex });
      });
    }
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">Loading gallery items...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{language == 'en' ?'Gallery' : 'גלריה'}</h1>
          <FilterDropdown
            options={filterOptions}
            value={filter}
            onChange={handleFilterChange}
          />
        </div>

        {allImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {filter === 'All' 
                ? (language === 'he' ? 'אין יצירות זמינות עדיין.' : 'No gallery items available yet.')
                : (language === 'he' ? `לא נמצאו יצירות עבור ${filter}.` : `No gallery items found for ${filter}.`)
              }
            </p>
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

export default function GalleryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">Loading gallery...</p>
          </div>
        </div>
      </div>
    }>
      <GalleryPageContent />
    </Suspense>
  );
} 

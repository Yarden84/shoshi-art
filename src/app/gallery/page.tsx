'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import FilterDropdown from '@/components/FilterDropdown';
import { getArtworks } from '@/lib/strapi';
import { Artwork } from '@/lib/strapi';

export default function GalleryPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filter, setFilter] = useState('All');
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  const generateFilterOptions = (artworks: Artwork[]): string[] => {
    const categories = new Set<string>();
    
    artworks.forEach(artwork => {
      if (artwork.title) {
        categories.add(artwork.title);
      }
    });
    
    return ['All', ...Array.from(categories).sort()];
  };

  const filterOptions = generateFilterOptions(artworks);

  useEffect(() => {
    const urlFilter = searchParams.get('filter');
    if (urlFilter && filterOptions.includes(urlFilter)) {
      setFilter(urlFilter);
    }
  }, [searchParams, filterOptions]);

  useEffect(() => {
    async function fetchArtworks() {
      try {
        const data = await getArtworks();
        console.log('All artworks fetched:', data);
        setArtworks(data);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchArtworks();
  }, []);

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

  const filteredArtworks = filter === 'All'
    ? artworks
    : artworks.filter(artwork => artwork.title === filter);

  const allImages: Array<{ artwork: Artwork; image: any; imageIndex: number }> = [];
  
  filteredArtworks.forEach(artwork => {
    if (artwork.images && artwork.images.length > 0) {
      artwork.images.forEach((image, imageIndex) => {
        allImages.push({ artwork, image, imageIndex });
      });
    }
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">Loading artworks...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Gallery</h1>
          <FilterDropdown
            options={filterOptions}
            value={filter}
            onChange={handleFilterChange}
          />
        </div>

        {allImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {filter === 'All' ? 'No artworks available yet.' : `No artworks found for ${filter}.`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allImages.map(({ artwork, image, imageIndex }, index) => (
              <div key={`${artwork.id}-${imageIndex}`} className="w-full aspect-square rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-gray-50 flex items-center justify-center group border-4 border-white">
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${image.url}`}
                  alt={`${artwork.title || 'Artwork'} - Image ${imageIndex + 1}`}
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
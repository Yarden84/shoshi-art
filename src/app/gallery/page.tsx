'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import FilterDropdown from '@/components/FilterDropdown';

const images = [
  'painting-1.jpg', 'painting-2.jpg', 'painting-3.jpg', 'painting-4.jpg', 'painting-5.jpg', 'painting-6.jpg', 'painting-7.jpg', 'painting-8.jpg',
  'children-1.jpg', 'children-2.jpg', 'children-3.jpg', 'children-4.jpg', 'children-5.jpg', 'children-6.jpg',
  'sculpture-1.jpg', 'sculpture-2.jpg', 'sculpture-3.jpg', 'sculpture-4.jpg',
  'other-1.jpg', 'other-2.jpg', 'other-3.jpg', 'other-4.jpg', 'other-5.jpg', 'other-6.jpg', 'other-7.jpg',
];

const filterOptions = ['All', 'Paintings', 'Children', 'Sculpture', 'Other'];

function getCategory(filename: string) {
  if (filename.startsWith('painting-')) return 'Paintings';
  if (filename.startsWith('children-')) return 'Children';
  if (filename.startsWith('sculpture-')) return 'Sculpture';
  if (filename.startsWith('other-')) return 'Other';
  return 'Other';
}

export default function Gallery() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const urlFilter = searchParams.get('filter');
    if (urlFilter && filterOptions.includes(urlFilter)) {
      setFilter(urlFilter);
    }
  }, [searchParams]);

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

  const filteredImages = filter === 'All'
    ? images
    : images.filter(img => getCategory(img) === filter);

  return (
    <div className="min-h-screen bg-white px-4 py-8 relative">
      <div className="max-w-6xl mx-auto pt-16">
        <div className="flex flex-row items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Gallery</h1>
          <FilterDropdown
            options={filterOptions}
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map(img => (
            <div key={img} className="w-full aspect-square rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-gray-50 flex items-center justify-center group border-4 border-white">
              <img
                src={`/images/gallery/${img}`}
                alt={img}
                className="h-full animate-none group-hover:scale-110 transition-all duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
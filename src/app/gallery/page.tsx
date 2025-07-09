import { GalleryItem } from '@/lib/cms';
import GalleryClient from './GalleryClient';

async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/data/gallery.json`, { cache: 'no-store' });

    if (!res.ok) return [];
    const data = await res.json();

    return data.items || [];
  } catch(error) {
    return []
  }
}

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();

  return <GalleryClient galleryItems={galleryItems} />;
} 

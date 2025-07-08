// New CMS integration for Decap CMS
export interface HeaderContent {
    title: string;
    subtitle: string;
    small: string;
  }
  
  export interface AboutContent {
    title: string;
    content: string;
    button: string;
    bio?: string;
  }
  
  export interface GalleryItem {
    title: string;
    category: string;
    images: Array<{ url: string }>;
    description?: string;
    date: string;
  }
  
  export async function getHeaderContent(locale = 'en'): Promise<HeaderContent | null> {
    try {
      const response = await fetch(`/data/header-${locale}.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch header content');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching header content:', error);
      return null;
    }
  }
  
  export async function getAboutContent(locale = 'en'): Promise<AboutContent | null> {
    try {
      const response = await fetch(`/data/about-${locale}.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch about content');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching about content:', error);
      return null;
    }
  }
  
  export async function getGalleryItems(): Promise<GalleryItem[]> {
    try {
      const response = await fetch('/data/gallery.json');

      if (!response.ok) {
        throw new Error('Failed to fetch gallery items');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching gallery items:', error);
      return [];
    }
  }
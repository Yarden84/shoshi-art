const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface HeaderContent {
  id: number;
  title: string;
  subtitle: string;
  small: string;
  button: string;
}

export interface StrapiImage {
  id: number;
  name: string;
  url: string;
}

export interface Artwork {
  id: number;
  title?: string;
  images?: StrapiImage[];
}

export interface AboutContent {
  id: number;
  title: string;
  content: string;
  button: string;
  bio?: string;
}

export async function fetchAPI<T>(endpoint: string): Promise<StrapiResponse<T>> {
  try {
    const res = await fetch(`${STRAPI_URL}/api${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch API: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching from Strapi: ${error}`);
    throw new Error('Strapi is not running or not accessible. Please start Strapi first.');
  }
}

export async function getHeaderContent(locale = 'en'): Promise<HeaderContent | null> {
  try {
    const response = await fetchAPI<HeaderContent>(`/header?locale=${locale}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching header content:', error);
    
    if (locale === 'he') {
      try {
        const fallbackResponse = await fetchAPI<HeaderContent>('/header?locale=en');
        return fallbackResponse.data;
      } catch (fallbackError) {
        console.error('Error fetching fallback header content:', fallbackError);
        return null;
      }
    }
    return null;
  }
}

export async function getArtworks(locale = 'en'): Promise<Artwork[]> {
  try {
    const response = await fetchAPI<Artwork[]>(`/galleries?populate=*&locale=${locale}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artworks:', error);
    
    if (locale === 'he') {
      try {
        const fallbackResponse = await fetchAPI<Artwork[]>('/galleries?populate=*&locale=en');
        return fallbackResponse.data;
      } catch (fallbackError) {
        console.error('Error fetching fallback artworks:', fallbackError);
        return [];
      }
    }
    return [];
  }
}

export async function getAboutContent(locale = 'en'): Promise<AboutContent | null> {
  try {
    const response = await fetchAPI<AboutContent>(`/about?locale=${locale}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching about content:', error);
    // Fallback to English if Hebrew fails
    if (locale === 'he') {
      try {
        const fallbackResponse = await fetchAPI<AboutContent>('/about?locale=en');
        return fallbackResponse.data;
      } catch (fallbackError) {
        console.error('Error fetching fallback about content:', fallbackError);
        return null;
      }
    }
    return null;
  }
}

export function getStrapiURL(path: string = ''): string {
  return `${STRAPI_URL}${path}`;
} 
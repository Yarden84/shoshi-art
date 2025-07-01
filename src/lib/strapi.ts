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

export async function getArtworks(featured?: boolean): Promise<Artwork[]> {
  try {
    const response = await fetchAPI<Artwork[]>('/galleries?populate=*');
    console.log('Strapi response:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching artworks:', error);
    return [];
  }
}

export async function getAboutContent(): Promise<AboutContent | null> {
  try {
    console.log('Fetching about content from:', `${STRAPI_URL}/api/about`);
    const response = await fetchAPI<AboutContent>('/about');
    console.log('Raw about response:', response);
    console.log('About data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}

export function getStrapiURL(path: string = ''): string {
  return `${STRAPI_URL}${path}`;
} 
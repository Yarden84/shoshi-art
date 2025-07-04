import Image from 'next/image';
import { StrapiImage as StrapiImageType } from '@/lib/strapi';

interface StrapiImageProps {
  image: StrapiImageType;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function StrapiImage({
  image,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fill = false,
  width,
  height,
}: StrapiImageProps) {
  const imageUrl = image.url.startsWith('http')
    ? image.url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${image.url}`;

  const imageAlt = alt || image.name;

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        style={{ objectFit: 'cover' }}
      />
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={imageAlt}
      width={width || 400}
      height={height || 400}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
} 
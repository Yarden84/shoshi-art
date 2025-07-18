'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
}

export default function Lightbox({ isOpen, onClose, imageUrl, alt }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors cursor-pointer z-10"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
} 
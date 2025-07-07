'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();

  const navLinks = [
    { name: {en: 'Home', he: 'ראשי'}, href: '/' },
    { name: {en: 'Gallery', he: 'גלריה'}, href: '/gallery' },
    { name: {en: 'About', he: 'אודות'}, href: '/about' },
    { name: {en: 'Contact', he: 'צור קשר'}, href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16" style={{direction: 'ltr'}}>
          <div className="flex-shrink-0">
          <svg className='w-[120px] relative top-[7px]'  viewBox="0 0 609 287" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="46" width="535" height="116" fill="#FFF7CA" fillOpacity="0.72"/>
            <path d="M69.096 76.727C65.64 76.727 62.824 77.559 60.648 79.223C58.472 80.887 57.384 83.223 57.384 86.231C57.384 89.687 58.824 92.791 61.704 95.543C63.752 97.527 66.376 99.639 69.576 101.879C72.84 104.055 75.08 105.623 76.296 106.583C77.512 107.543 78.984 108.855 80.712 110.519C83.848 113.655 85.416 117.271 85.416 121.367C85.416 126.679 83.624 130.711 80.04 133.463C76.52 136.151 71.56 137.495 65.16 137.495C58.824 137.495 53.512 135.831 49.224 132.503L51.528 129.143C55.88 132.087 60.488 133.559 65.352 133.559C70.216 133.559 73.992 132.535 76.68 130.487C79.432 128.439 80.808 125.559 80.808 121.847C80.808 118.647 79.432 115.703 76.68 113.015C74.76 111.095 72.168 109.015 68.904 106.775C65.704 104.535 63.464 102.935 62.184 101.975C60.904 100.951 59.4 99.607 57.672 97.943C54.408 94.679 52.776 90.903 52.776 86.615C52.776 82.327 54.28 78.967 57.288 76.535C60.36 74.103 64.584 72.887 69.96 72.887C75.336 72.887 80.168 73.943 84.456 76.055L82.824 79.607C78.856 77.687 74.28 76.727 69.096 76.727ZM150.826 136.343V104.855H107.53V136.343H103.114V74.039H107.53V100.919H150.826V74.039H155.242V136.343H150.826ZM205.853 137.303C196.957 137.303 189.501 134.199 183.485 127.991C177.469 121.783 174.461 114.199 174.461 105.239C174.461 96.215 177.469 88.599 183.485 82.391C189.501 76.183 196.957 73.079 205.853 73.079C214.749 73.079 222.205 76.183 228.221 82.391C234.237 88.599 237.245 96.215 237.245 105.239C237.245 114.199 234.237 121.783 228.221 127.991C222.205 134.199 214.749 137.303 205.853 137.303ZM205.853 77.015C198.173 77.015 191.773 79.735 186.653 85.175C181.597 90.615 179.069 97.303 179.069 105.239C179.069 113.111 181.597 119.767 186.653 125.207C191.773 130.583 198.173 133.271 205.853 133.271C213.597 133.271 219.997 130.583 225.053 125.207C230.109 119.767 232.637 113.111 232.637 105.239C232.637 97.303 230.109 90.615 225.053 85.175C219.997 79.735 213.597 77.015 205.853 77.015ZM269.065 76.727C265.609 76.727 262.793 77.559 260.617 79.223C258.441 80.887 257.353 83.223 257.353 86.231C257.353 89.687 258.793 92.791 261.673 95.543C263.721 97.527 266.345 99.639 269.545 101.879C272.809 104.055 275.049 105.623 276.265 106.583C277.481 107.543 278.953 108.855 280.681 110.519C283.817 113.655 285.385 117.271 285.385 121.367C285.385 126.679 283.593 130.711 280.009 133.463C276.489 136.151 271.529 137.495 265.129 137.495C258.793 137.495 253.481 135.831 249.193 132.503L251.497 129.143C255.849 132.087 260.457 133.559 265.321 133.559C270.185 133.559 273.961 132.535 276.649 130.487C279.401 128.439 280.777 125.559 280.777 121.847C280.777 118.647 279.401 115.703 276.649 113.015C274.729 111.095 272.137 109.015 268.873 106.775C265.673 104.535 263.433 102.935 262.153 101.975C260.873 100.951 259.369 99.607 257.641 97.943C254.377 94.679 252.745 90.903 252.745 86.615C252.745 82.327 254.249 78.967 257.257 76.535C260.329 74.103 264.553 72.887 269.929 72.887C275.305 72.887 280.137 73.943 284.425 76.055L282.793 79.607C278.825 77.687 274.249 76.727 269.065 76.727ZM350.795 136.343V104.855H307.499V136.343H303.083V74.039H307.499V100.919H350.795V74.039H355.211V136.343H350.795ZM516.645 136.343V74.327C522.149 73.879 526.821 73.655 530.661 73.655C536.549 73.655 541.413 75.191 545.253 78.263C549.093 81.271 551.013 85.591 551.013 91.223C551.013 94.999 549.925 98.487 547.749 101.687C545.573 104.887 543.109 107.479 540.357 109.463C547.973 119.575 552.677 125.623 554.469 127.607C558.117 131.383 562.085 133.527 566.373 134.039L566.277 137.015C562.693 136.951 559.781 136.439 557.541 135.479C555.301 134.455 553.061 132.759 550.821 130.391C548.645 128.023 543.813 121.655 536.325 111.287C531.141 111.287 526.053 111.127 521.061 110.807V136.343H516.645ZM533.925 107.639C536.421 107.639 539.109 105.975 541.989 102.647C544.869 99.319 546.309 95.447 546.309 91.031C546.309 86.615 544.805 83.255 541.797 80.951C538.789 78.647 534.885 77.495 530.085 77.495C527.525 77.495 524.517 77.623 521.061 77.879V107.159C525.669 107.479 529.957 107.639 533.925 107.639ZM581.687 77.975H560.567V74.039H607.127V77.975H586.007V136.343H581.687V77.975Z" fill="#2D3756"/>
            <path d="M435 0L528.531 215.25H341.469L435 0Z" fill="#3D3C3C"/>
          </svg>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4"  style={{direction: language === 'he' ? 'rtl' : 'ltr'}}>
              {navLinks.map((link) => (
                <Link
                  key={link.name[language]}
                  href={link.href}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    pathname === link.href
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  } ${language === 'he' ? 'font-4xl font-bold  tracking-[0.05em]' : 'text-sm'}`}
                >
                  {link.name[language]}
                </Link>
              ))}
              <span className={`${language === 'he' ? 'order-first ml-[20px]' : ''}`}>
                <LanguageSwitcher /> 
              </span>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t border-gray-200">
          {navLinks.map((link, index) => (
            <Link
              key={link.name[language]}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 transform ${
                pathname === link.href
                  ? 'text-gray-900 bg-gray-100'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              } ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-2 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name[language]}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 
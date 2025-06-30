export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-[90%] mx-auto text-center">
        <p className="text-sm uppercase mb-4">
          Copyright © Shoshi Haizler {currentYear}
        </p>
        <p className="text-sm">
          Designed and Developed by <a href="https://www.yarden-amir.com" target="_blank" rel="noopener noreferrer" className="underline">T & Y</a>
        </p>
      </div>
    </footer>
  );
} 
import React, { useState, useRef } from 'react';

interface FilterDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function FilterDropdown({ options, value, onChange, className = '' }: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // const handleFocus = () => setOpen(true);
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!wrapperRef.current?.contains(e.relatedTarget as Node)) {
      setOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value); 
    setOpen(false); 
  };

  const handleSelectClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      tabIndex={-1}
      ref={wrapperRef}
      onBlur={handleBlur}
    >
      <select
        className={`appearance-none px-4 py-2 rounded border border-gray-300 bg-white shadow focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200 hover:border-gray-500 cursor-pointer pr-10`}
        value={value}
        onChange={handleChange}
        onMouseDown={handleSelectClick}
      >
        {options.map(option => (
          <option key={option} value={option} onMouseDown={() =>setOpen(false)}>
            {option}
          </option>
        ))}
      </select>
      <span
        className={`pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8L10 12L14 8" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
} 
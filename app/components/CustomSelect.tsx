"use client";

import { useState, useRef, useEffect } from 'react';

export default function CustomSelect({ 
  name, 
  options, 
  placeholder 
}: { 
  name: string, 
  options: { value: string, label: string }[], 
  placeholder: string 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find(o => o.value === selected)?.label || placeholder;

  return (
    <div className="relative" ref={dropdownRef}>
      <input type="hidden" name={name} value={selected} required />
      
      <button 
        type="button" 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left bg-transparent border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-trust-blue/20 dark:focus:ring-indigo-500/20 focus:border-trust-blue dark:focus:border-indigo-400 transition-all font-body-md shadow-sm flex items-center justify-between ${
          isOpen ? 'border-trust-blue dark:border-indigo-400' : 'border-slate-300 dark:border-slate-700'
        }`}
      >
        <span className={selected ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}>
          {selectedLabel}
        </span>
        <span className={`material-symbols-outlined text-[20px] text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl py-2 animate-[fadeIn_0.15s_ease-out] max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between group ${
                selected === option.value 
                  ? 'bg-indigo-50 dark:bg-indigo-900/40 text-trust-blue dark:text-indigo-400 font-semibold' 
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
              onClick={() => {
                setSelected(option.value);
                setIsOpen(false);
              }}
            >
              <span>{option.label}</span>
              {selected === option.value && (
                <span className="material-symbols-outlined text-[18px]">check</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import LogoImage from '../Screenshot 2025-12-15 181929-Photoroom.png';

const LogoMark = () => (
  <div className="flex items-center gap-3">
    <div className="relative w-11 h-11 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <img
        src={LogoImage}
        alt="Web logo"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <span className="font-black text-xl tracking-widest uppercase">Web</span>
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-4 md:px-12 flex items-center justify-between relative z-50">
      <LogoMark />

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <div className="flex gap-8 text-sm font-semibold text-gray-300 uppercase tracking-[0.2em]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-brand-pink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <button className="gradient-border-button px-6 py-2 text-xs font-bold uppercase tracking-wide transition-colors hover:bg-white/10">
          Contact Me
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white ml-auto"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-card border-t border-gray-800 flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-brand-pink text-lg font-medium uppercase"
            >
              {item.label}
            </a>
          ))}
          <button className="gradient-border-button text-white px-8 py-3 rounded-full font-semibold transition-colors hover:bg-white/10">
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
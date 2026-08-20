import React from 'react';
import { useLenis } from 'lenis/react';

export const Navbar = () => {
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(`#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-50 bg-gradient-to-b from-verdant-bg/80 to-transparent backdrop-blur-sm">
      <div className="flex items-center gap-12">
        <span className="text-2xl font-bold tracking-tighter text-verdant-primary">VERDANT MARKET</span>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold opacity-60 text-verdant-text">
          <a href="#market" onClick={(e) => handleScroll(e, 'market')} className="hover:opacity-100 transition-opacity">Market</a>
          <a href="#farm" onClick={(e) => handleScroll(e, 'farm')} className="hover:opacity-100 transition-opacity">The Farm</a>
          <a href="#seasonal" onClick={(e) => handleScroll(e, 'seasonal')} className="hover:opacity-100 transition-opacity">Seasonal</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:opacity-100 transition-opacity">About</a>
        </div>
      </div>
      <div className="flex items-center gap-8 text-verdant-text">
        <div className="hidden md:block text-[11px] uppercase tracking-[0.2em] font-semibold cursor-pointer hover:opacity-70 transition-opacity">Search</div>
        <div className="relative flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 rounded-full border border-verdant-primary/10 flex items-center justify-center group-hover:border-verdant-primary/30 transition-colors">
            <div className="w-2 h-2 bg-verdant-primary rounded-full group-hover:scale-110 transition-transform"></div>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest group-hover:opacity-70 transition-opacity">Cart (3)</span>
        </div>
      </div>
    </nav>
  );
};

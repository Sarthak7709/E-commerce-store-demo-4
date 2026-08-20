import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer id="about" className="relative w-full bg-verdant-primary pt-32 pb-12 px-6 md:px-16 lg:px-24 overflow-hidden z-10 rounded-t-[3rem]">
      {/* Decorative large background text */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-5">
        <span className="text-[20vw] font-serif text-white whitespace-nowrap">VERDANT</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif text-white mb-6">Verdant Market</h2>
              <p className="text-white/70 max-w-sm font-light">
                Fresh from Nature. Designed for Tomorrow. Redefining the organic grocery experience.
              </p>
            </div>
            
            <div className="mt-12 md:mt-0">
              <p className="text-white/50 text-sm mb-4 uppercase tracking-widest">Join our newsletter</p>
              <div className="flex relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-transparent border-b border-white/20 pb-2 w-full text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
                />
                <button className="absolute right-0 bottom-2 text-white font-medium uppercase text-xs tracking-widest hover:text-verdant-accent transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-8 flex flex-col gap-4">
            <h4 className="text-white/50 text-xs uppercase tracking-widest mb-2">Shop</h4>
            <a href="#" className="text-white font-light hover:text-verdant-secondary transition-colors">Vegetables</a>
            <a href="#" className="text-white font-light hover:text-verdant-secondary transition-colors">Fruits</a>
            <a href="#" className="text-white font-light hover:text-verdant-secondary transition-colors">Bakery</a>
            <a href="#" className="text-white font-light hover:text-verdant-secondary transition-colors">Dairy</a>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white/50 text-xs uppercase tracking-widest mb-2">About</h4>
            <a href="#" className="text-white font-light hover:text-verdant-secondary transition-colors">Our Story</a>
            <a href="#" className="text-white font-light hover:text-verdant-secondary transition-colors">Farms</a>
            <a href="#" className="text-white font-light hover:text-verdant-secondary transition-colors">Journal</a>
            <a href="#" className="text-white font-light hover:text-verdant-secondary transition-colors">Careers</a>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-4">
            <h4 className="text-white/50 text-xs uppercase tracking-widest mb-2">Social</h4>
            <a href="#" className="text-white font-light hover:text-verdant-secondary transition-colors">Instagram</a>
            <a href="#" className="text-white font-light hover:text-verdant-secondary transition-colors">Twitter</a>
            <a href="#" className="text-white font-light hover:text-verdant-secondary transition-colors">Pinterest</a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">© 2024 Verdant Market. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

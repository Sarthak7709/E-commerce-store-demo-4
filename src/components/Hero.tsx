import React from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';

export const Hero = () => {
  const lenis = useLenis();

  const handleScroll = (id: string) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-24 pb-12 z-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-1/2 flex flex-col items-start z-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-verdant-secondary text-xs font-bold uppercase tracking-[0.3em] mb-6"
          >
            Fresh from Nature. Designed for Tomorrow.
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-[88px] leading-[0.85] font-semibold tracking-tight text-verdant-primary mb-10"
          >
            <span className="font-serif italic font-light block">Nature</span>
            deserves
            <br />
            better shopping.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button onClick={() => handleScroll('market')} className="px-10 py-5 bg-verdant-primary text-verdant-bg rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#153826] transition-colors duration-300 shadow-lg shadow-verdant-primary/20 cursor-pointer">
              Shop Fresh
            </button>
            <button onClick={() => handleScroll('farm')} className="px-10 py-5 border border-verdant-primary/20 text-verdant-text rounded-full text-xs font-bold uppercase tracking-widest hover:bg-verdant-primary/5 transition-colors duration-300 cursor-pointer">
              Explore Story
            </button>
          </motion.div>
        </div>

        {/* The right side will be occupied by the global 3D canvas, so we leave it empty here or put a placeholder */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen pointer-events-none"></div>

        <div className="absolute bottom-8 right-8 w-12 h-12 flex items-center justify-center pointer-events-none z-30">
          <div className="w-6 h-10 rounded-full border-2 border-verdant-primary/20 relative">
            <motion.div 
              className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-verdant-secondary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute -top-16 right-0 whitespace-nowrap text-[9px] uppercase tracking-[0.3em] rotate-90 font-bold text-verdant-primary opacity-30 origin-right">
            Scroll for the Story
          </div>
        </div>
      </div>
    </section>
  );
};

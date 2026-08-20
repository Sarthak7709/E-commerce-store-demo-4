import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const PremiumProduct = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.6, 0.9], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <section className="relative w-full min-h-screen bg-white py-24 z-10 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 h-full flex flex-col justify-center items-center">
        
        <div className="w-full text-center mb-12">
          <p className="text-verdant-primary uppercase tracking-widest text-sm font-semibold mb-4">Featured Harvest</p>
          <h2 className="text-6xl md:text-8xl font-serif text-verdant-text">
            Heirloom Tomato
          </h2>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="relative w-full max-w-4xl aspect-square md:aspect-[16/9] bg-verdant-bg rounded-[3rem] overflow-hidden flex items-center justify-center group"
        >
          {/* This acts as a stage for the 3D tomato, but we can put a fallback or UI around it */}
          <div className="absolute top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <h4 className="text-2xl font-serif text-verdant-primary mb-2">Nutrition</h4>
            <ul className="space-y-2 text-sm text-verdant-text/70">
              <li>Calories: 22</li>
              <li>Vitamin C: 28% DV</li>
              <li>Potassium: 237mg</li>
            </ul>
          </div>

          <div className="absolute bottom-10 right-10 flex items-end gap-6">
            <div className="text-right">
              <span className="block text-4xl font-light text-verdant-text">$4.99</span>
              <span className="text-sm text-verdant-text/50 uppercase tracking-widest">per lb</span>
            </div>
            
            <button className="h-16 w-16 md:w-auto md:px-8 bg-verdant-primary text-white rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 shadow-xl shadow-verdant-primary/20 overflow-hidden group/btn">
              <span className="hidden md:block font-medium whitespace-nowrap">Add to Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:rotate-12 transition-transform">
                <circle cx="8" cy="21" r="1"/>
                <circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
            </button>
          </div>
          
          {/* Subtle lighting effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/40 pointer-events-none rounded-[3rem]"></div>
        </motion.div>

      </div>
    </section>
  );
};

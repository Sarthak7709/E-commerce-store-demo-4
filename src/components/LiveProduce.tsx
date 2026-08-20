import React from 'react';
import { motion } from 'framer-motion';

export const LiveProduce = () => {
  return (
    <section id="seasonal" className="relative w-full min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden bg-verdant-primary z-10 rounded-[3rem] my-12">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-white mb-8"
        >
          Alive with flavor.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white/80 font-light max-w-2xl mx-auto mb-16"
        >
          Our produce isn't sitting on a shelf for weeks. It's living, breathing, and ready to nourish you. Experience the difference of true freshness.
        </motion.p>
        
        {/* Placeholder for floating 3D veg */}
        <div className="h-[40vh] w-full border border-white/10 rounded-3xl backdrop-blur-sm bg-white/5 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:opacity-0 transition-opacity duration-500"></div>
          <p className="text-white/40 uppercase tracking-widest text-sm font-medium relative z-10">Interactive Produce Experience</p>
        </div>
      </div>
    </section>
  );
};

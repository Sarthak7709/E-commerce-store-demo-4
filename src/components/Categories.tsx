import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Categories = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const categories = [
    { name: 'Vegetables' },
    { name: 'Fruits' },
    { name: 'Organic Drinks' },
    { name: 'Bakery' },
    { name: 'Dairy' },
    { name: 'Healthy Snacks' }
  ];

  return (
    <section id="market" ref={containerRef} className="relative w-full min-h-screen py-24 px-6 md:px-16 lg:px-24 bg-white z-10 rounded-[3rem] shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-verdant-secondary mb-2">Categories</h2>
            <motion.div 
              className="text-2xl font-serif italic text-verdant-primary"
              style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
            >
              Curated by Season
            </motion.div>
          </div>
          <div className="text-xs font-bold text-verdant-primary underline underline-offset-8 decoration-verdant-secondary/50 cursor-pointer">
            View All Produce
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex-1 bg-white p-6 rounded-3xl border border-white shadow-sm flex flex-col justify-between group hover:border-verdant-accent transition-colors cursor-pointer min-h-[160px] relative overflow-hidden"
            >
              <div className="flex justify-between items-start z-10 relative">
                <div className="w-10 h-10 bg-verdant-bg rounded-full flex items-center justify-center">
                  <div className="w-2 h-4 bg-verdant-accent rounded-full transform rotate-45"></div>
                </div>
                <div className="text-[10px] font-bold text-verdant-primary/40 uppercase tracking-widest">
                  0{index + 1}
                </div>
              </div>
              <div className="text-lg font-semibold text-verdant-primary z-10 relative mt-4">
                {cat.name}
              </div>
              
              {/* This is where the 3D produce will visually overlay from the canvas, but we can add some HTML hints */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/5 to-transparent" />
                {/* Simulated floating particles on hover */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-verdant-accent/40 blur-[1px]"
                    initial={{ x: Math.random() * 100, y: 150, opacity: 0 }}
                    whileInView={{ 
                      y: [150, Math.random() * 50],
                      x: [null, Math.random() * 100],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2 + Math.random() * 2, 
                      repeat: Infinity,
                      ease: "linear",
                      delay: Math.random()
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

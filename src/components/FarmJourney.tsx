import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const FarmJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const stages = [
    { title: 'The Farm', desc: 'Regenerative soil, untouched by chemicals.', img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=800' },
    { title: 'Harvest', desc: 'Hand-picked at peak ripeness.', img: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800' },
    { title: 'Cleaning', desc: 'Washed with pure, natural spring water.', img: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=800' },
    { title: 'Packing', desc: 'Plastic-free, biodegradable boxing.', img: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800' },
    { title: 'Delivery', desc: 'Zero-emission transport to your door.', img: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=800' },
    { title: 'Your Kitchen', desc: 'Freshness you can taste immediately.', img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800' },
  ];

  return (
    <section id="farm" ref={containerRef} className="relative w-full h-[400vh] bg-verdant-bg z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center pt-20">
        
        <div className="absolute top-12 left-6 md:left-24 z-20">
          <h2 className="text-4xl md:text-5xl font-serif text-verdant-primary">The Journey</h2>
        </div>

        <motion.div style={{ x }} className="flex h-full items-center px-[10vw]">
          {stages.map((stage, index) => (
            <div 
              key={index} 
              className="w-[80vw] md:w-[60vw] lg:w-[40vw] h-[60vh] shrink-0 mx-8 flex flex-col justify-center relative"
            >
              <div className="w-full h-full rounded-[2rem] bg-white shadow-xl shadow-verdant-primary/5 p-8 md:p-12 flex flex-col overflow-hidden border border-verdant-primary/10 relative">
                
                <div className="absolute inset-0 w-full h-full">
                  <img src={stage.img} alt={stage.title} className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>

                <div className="absolute top-8 left-8 text-6xl font-serif text-verdant-primary/30 z-10 font-bold">
                  0{index + 1}
                </div>
                
                <div className="flex-1 flex items-center justify-center relative z-10">
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className="text-3xl font-medium text-verdant-primary mb-4 drop-shadow-sm">{stage.title}</h3>
                  <p className="text-lg text-verdant-text/90 max-w-md font-medium">{stage.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

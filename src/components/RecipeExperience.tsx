import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const RecipeExperience = () => {
  const [hoveredRecipe, setHoveredRecipe] = useState<number | null>(null);

  const recipes = [
    {
      id: 1,
      title: "Avocado Toast with Heirloom Tomato",
      time: "10 min",
      cals: 320,
      ingredients: ["Avocado", "Heirloom Tomato", "Sourdough", "Microgreens", "Olive Oil"]
    },
    {
      id: 2,
      title: "Roasted Lemon Broccoli Bowl",
      time: "25 min",
      cals: 410,
      ingredients: ["Broccoli", "Lemon", "Quinoa", "Almonds", "Tahini"]
    },
    {
      id: 3,
      title: "Fresh Mint & Orange Salad",
      time: "15 min",
      cals: 210,
      ingredients: ["Orange", "Fresh Mint", "Feta", "Pomegranate", "Honey"]
    }
  ];

  return (
    <section className="relative w-full min-h-screen py-24 px-6 md:px-16 lg:px-24 bg-white z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-verdant-text/10 pb-10">
          <h2 className="text-5xl lg:text-7xl font-serif text-verdant-primary max-w-2xl">
            From our farm to your plate.
          </h2>
          <button className="mt-8 md:mt-0 text-verdant-text font-medium uppercase tracking-wider text-sm hover:text-verdant-primary transition-colors flex items-center gap-2">
            View all recipes
            <span className="w-8 h-[1px] bg-current inline-block"></span>
          </button>
        </div>

        <div className="flex flex-col gap-12">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              className="relative py-8 border-b border-verdant-text/5 group cursor-pointer"
              onHoverStart={() => setHoveredRecipe(recipe.id)}
              onHoverEnd={() => setHoveredRecipe(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between z-10 relative">
                <h3 className="text-3xl md:text-5xl font-light text-verdant-text group-hover:text-verdant-accent transition-colors duration-500">
                  {recipe.title}
                </h3>
                
                <div className="flex items-center gap-8 mt-4 md:mt-0 opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-verdant-text/50">Time</span>
                    <span className="font-medium">{recipe.time}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-verdant-text/50">Calories</span>
                    <span className="font-medium">{recipe.cals}</span>
                  </div>
                </div>
              </div>

              {/* Floating Ingredients visualization */}
              <motion.div 
                className="overflow-hidden mt-6 flex flex-wrap gap-3"
                initial={false}
                animate={{
                  height: hoveredRecipe === recipe.id ? 'auto' : 0,
                  opacity: hoveredRecipe === recipe.id ? 1 : 0
                }}
                transition={{ duration: 0.4 }}
              >
                {recipe.ingredients.map((ing, i) => (
                  <motion.span
                    key={ing}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredRecipe === recipe.id ? 1 : 0,
                      y: hoveredRecipe === recipe.id ? 0 : 10
                    }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="px-4 py-2 bg-verdant-bg rounded-full text-sm font-medium text-verdant-primary"
                  >
                    {ing}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { Canvas } from '@react-three/fiber';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FarmJourney } from './components/FarmJourney';
import { LiveProduce } from './components/LiveProduce';
import { RecipeExperience } from './components/RecipeExperience';
import { PremiumProduct } from './components/PremiumProduct';
import { Footer } from './components/Footer';
import { Scene } from './components/Scene';

export default function App() {
  // Ensure Lenis smooth scrolling applies to the body
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="relative w-full min-h-screen">
        <CustomCursor />
        
        {/* Fixed 3D Canvas */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
            <Scene />
          </Canvas>
        </div>

        {/* Scrolling HTML Content */}
        <div className="relative z-10 w-full flex flex-col">
          <Navbar />
          <Hero />
          <Categories />
          <FarmJourney />
          <LiveProduce />
          <RecipeExperience />
          <PremiumProduct />
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Tomato = ({ position, scale = 1 }: any) => {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial 
          color="#ff3b30" 
          roughness={0.1} 
          clearcoat={1} 
          clearcoatRoughness={0.1}
        />
      </mesh>
      {/* Stem */}
      <mesh position={[0, 0.95, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.2]} />
        <meshStandardMaterial color="#2d5a27" />
      </mesh>
      {/* Leaves */}
      {[0, 1, 2, 3, 4].map(i => (
        <mesh key={i} position={[0, 0.9, 0]} rotation={[0.2, (i * Math.PI * 2) / 5, 0]} castShadow>
          <planeGeometry args={[0.4, 0.8]} />
          <meshStandardMaterial color="#2d5a27" side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
};

const Orange = ({ position, scale = 1 }: any) => {
  return (
    <mesh position={position} scale={scale} castShadow receiveShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial 
        color="#ff9500" 
        roughness={0.6} 
        bumpScale={0.02}
        clearcoat={0.1}
      />
    </mesh>
  );
};

const Lemon = ({ position, scale = 1 }: any) => {
  return (
    <mesh position={position} scale={scale} castShadow receiveShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial 
        color="#ffcc00" 
        roughness={0.4} 
        clearcoat={0.2}
      />
    </mesh>
  );
};

const Avocado = ({ position, scale = 1 }: any) => {
  return (
    <mesh position={position} scale={scale} castShadow receiveShadow>
      {/* Simplified avocado shape */}
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial 
        color="#1f3d17" 
        roughness={0.8} 
        clearcoat={0.1}
      />
    </mesh>
  );
};

const WaterDroplet = ({ position, scale = 0.1 }: any) => (
  <mesh position={position} scale={scale}>
    <sphereGeometry args={[1, 16, 16]} />
    <MeshTransmissionMaterial 
      backside 
      thickness={0.5} 
      roughness={0} 
      transmission={1} 
      ior={1.5} 
      chromaticAberration={0.04} 
    />
  </mesh>
);

const FruitGroup = () => {
  const group = useRef<THREE.Group>(null);
  const { size, viewport } = useThree();
  
  // Create an array of fruit data
  const fruitsData = useMemo(() => [
    { type: 'orange', id: 1, basePos: [0.5, 0.5, 0.5], targetHeroPos: [2, 0, 0], scatterPos: [-3, 2, -1], finalPos: [0, 0, 0] },
    { type: 'tomato', id: 2, basePos: [-0.5, 0.5, -0.5], targetHeroPos: [1.5, 1, 0.5], scatterPos: [3, -1, 1], finalPos: [-1, 0, 1] },
    { type: 'lemon', id: 3, basePos: [0, -0.5, 0.5], targetHeroPos: [2.5, -1, -0.5], scatterPos: [-2, -3, 2], finalPos: [1, 0, 1] },
    { type: 'avocado', id: 4, basePos: [0, 0, -0.8], targetHeroPos: [1, -0.5, -1], scatterPos: [4, 2, -2], finalPos: [0, 1, -1] },
    { type: 'orange', id: 5, basePos: [0.8, -0.3, -0.2], targetHeroPos: [3, 0.5, -0.2], scatterPos: [1, 4, 0], finalPos: [-1, 1, -0.5] },
  ], []);

  const fruitRefs = useRef<(THREE.Group | THREE.Mesh | null)[]>([]);

  useFrame(() => {
    if (!group.current) return;
    
    // Calculate scroll progress (0 to 1 approximate)
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    
    // Phase 1: Hero (0 - 0.15) - tightly clustered on the right
    // Phase 2: Explode (0.15 - 0.4) - scattered across screen
    // Phase 3: Float slowly (0.4 - 0.7)
    // Phase 4: Reassemble (0.7 - 1.0)
    
    fruitRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const data = fruitsData[index];
      const targetPos = new THREE.Vector3();
      
      if (progress < 0.15) {
        // Hero phase
        const localProgress = progress / 0.15;
        // Shift a bit based on scroll
        targetPos.set(
          data.targetHeroPos[0] + (viewport.width > 8 ? 2 : 0), 
          data.targetHeroPos[1] + localProgress, 
          data.targetHeroPos[2]
        );
        ref.rotation.x += 0.01;
        ref.rotation.y += 0.005;
      } else if (progress < 0.5) {
        // Explode / Scatter phase
        const localProgress = (progress - 0.15) / 0.35;
        // Interpolate between hero pos and scatter pos
        targetPos.set(
          THREE.MathUtils.lerp(data.targetHeroPos[0], data.scatterPos[0], localProgress),
          THREE.MathUtils.lerp(data.targetHeroPos[1], data.scatterPos[1], localProgress),
          THREE.MathUtils.lerp(data.targetHeroPos[2], data.scatterPos[2], localProgress)
        );
        ref.rotation.x += 0.005;
        ref.rotation.y += 0.01;
      } else if (progress < 0.8) {
        // Float phase
        targetPos.set(data.scatterPos[0], data.scatterPos[1], data.scatterPos[2]);
        ref.position.y += Math.sin(Date.now() * 0.001 + index) * 0.005;
      } else {
        // Reassemble phase
        const localProgress = (progress - 0.8) / 0.2;
        targetPos.set(
          THREE.MathUtils.lerp(data.scatterPos[0], data.finalPos[0], localProgress),
          THREE.MathUtils.lerp(data.scatterPos[1], data.finalPos[1], localProgress),
          THREE.MathUtils.lerp(data.scatterPos[2], data.finalPos[2], localProgress)
        );
      }

      // Smoothly move to target
      ref.position.lerp(targetPos, 0.05);
    });
    
    // Rotate the whole group slowly
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, progress * Math.PI * 2, 0.02);
  });

  return (
    <group ref={group}>
      {fruitsData.map((data, i) => {
        const props = {
          key: data.id,
          ref: (el: any) => (fruitRefs.current[i] = el),
          position: new THREE.Vector3(...data.targetHeroPos),
          scale: 0.6 + Math.random() * 0.4
        };
        
        switch (data.type) {
          case 'tomato': return <Tomato {...props} />;
          case 'orange': return <Orange {...props} />;
          case 'lemon': return <Lemon {...props} />;
          case 'avocado': return <Avocado {...props} scale={props.scale * 0.8} />;
          default: return <Orange {...props} />;
        }
      })}

      {/* Floating droplets */}
      {[...Array(15)].map((_, i) => (
        <Float key={`drop-${i}`} speed={2} rotationIntensity={1} floatIntensity={2}>
          <WaterDroplet 
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 5
            ]} 
            scale={0.05 + Math.random() * 0.05} 
          />
        </Float>
      ))}
    </group>
  );
};

export const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#4CAF50" />
      <Environment preset="sunset" />
      <FruitGroup />
    </>
  );
};

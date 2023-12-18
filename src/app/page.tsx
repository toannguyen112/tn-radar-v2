'use client';

import { OrbitControls, Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

import pointsInner from '@/app/utils';

const HomePage = () => {
  return (
    <div className='relative'>
      <Canvas className='h-screen bg-[#101010]' style={{ height: '100hv' }}>
        <OrbitControls />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation!.z = clock.getElapsedTime() * 0.05;
  });
  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
      />
    </Sphere>
  );
};
export default HomePage;

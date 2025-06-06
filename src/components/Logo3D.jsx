import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

const Modelo = ({ path, scale, position }) => {
  const { scene } = useGLTF(path);
  return (
    <primitive object={scene} scale={scale} position={position} rotation={[0, 0, 0]} />
  );
};

const Logo3D = ({ path, scale = 1.5, position = [0, 0, 0] }) => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <Canvas style={{ height: 200 }}>
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Modelo path={path} scale={scale} position={position} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  </motion.div>
);

export default Logo3D;
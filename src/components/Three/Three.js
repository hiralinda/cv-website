import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./Three.css";

const Earth = () => {
  const earth = useGLTF(process.env.PUBLIC_URL + "/suzanne/textrubiks.glb");
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={earth.scene}
      scale={0.7}
      position-x={0.5}
      rotation-x={0.5}
      position-y={0.5}
      rotation-y={5.5}
      position-z={-1.5}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Earth />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        target={[0.5, 0.5, -1.5]}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />
    </Canvas>
  );
};

export default EarthCanvas;

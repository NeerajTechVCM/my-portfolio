import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei";

// Simple loader
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <p className="text-white text-sm animate-pulse">{progress.toFixed(0)}% loading...</p>
    </Html>
  );
}

// 3D Model
function About3DModel() {
  const gltf = useGLTF("/models/about-model.glb");
  return <primitive object={gltf.scene} scale={0.35} position={[0, -1.5, 0]} />;
}

// Final Component
export default function AboutModel() {
  return (
    <Canvas camera={{ position: [1.5, 1.2, 3.5], fov: 45 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.6} />
      {/* Optional: Keep if you really want light direction */}
      {/* <directionalLight position={[3, 3, 3]} intensity={0.8} /> */}

      <Suspense fallback={<Loader />}>
        <About3DModel />
      </Suspense>

      {/* Remove OrbitControls if you don't want interaction */}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
}

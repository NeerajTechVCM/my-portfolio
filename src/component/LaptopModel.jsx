import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei";

// Loader with centered text
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <p className="text-white text-sm animate-pulse">
        {progress.toFixed(0)}% loading...
      </p>
    </Html>
  );
}

// 3D Laptop Model
function LaptopModel() {
  const { scene } = useGLTF("/models/laptop.glb");
  return <primitive object={scene} scale={0.55} position={[0, -1.5, 0]} />;
}

// Viewer Component
export default function LaptopViewer() {
  return (
    <Canvas
      camera={{ position: [2, 1.4, 4], fov: 45 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      {/* Optional light — can be removed if unnecessary */}
      {/* <directionalLight position={[3, 3, 3]} intensity={0.8} /> */}

      <Suspense fallback={<Loader />}>
        <LaptopModel />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
}

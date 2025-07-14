import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei";

// Loader with % progress
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-lg font-semibold animate-pulse">
        {progress.toFixed(0)}% loading...
      </div>
    </Html>
  );
}

// 3D Model component
function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1.8} />;
}

// Optimized Viewer
export default function ModelViewer({ path }) {
  return (
    <Canvas
      camera={{ position: [2, -3.5, 3.5], fov: 50 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[1, 1, 1]} intensity={1} />

      <Suspense fallback={<Loader />}>
        <Model path={path} />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false} // disabled for performance
      />
    </Canvas>
  );
}

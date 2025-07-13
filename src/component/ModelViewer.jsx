import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Html, useProgress } from "@react-three/drei";

// Loader with % progress
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <p className="text-white">{progress.toFixed(0)}% loading</p>
    </Html>
  );
}

// 3D Model component
function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={2} />;
}

// Viewer
export default function ModelViewer({ path }) {
  return (
    <Canvas
     dpr={[1, 1.5]}
      camera={{ position: [2, -3.5, 3.5], fov: 50 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      <Suspense fallback={<Loader />}>
        <Model path={path} />
        <Environment preset="sunset" />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}

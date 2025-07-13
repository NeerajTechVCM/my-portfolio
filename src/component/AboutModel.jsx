import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center><p className="text-white">{progress.toFixed(0)}%</p></Html>;
}

function About3DModel() {
  const gltf = useGLTF("/models/about-model.glb");
  return <primitive object={gltf.scene} scale={0.4} position={[0, -1.6, -1]}  />;
}


export default function AboutModel() {
  return (
   
      <Canvas   camera={{ position: [2, 1.5, 4], fov: 50 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={<Loader />}>
          <About3DModel />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
  
  );
}

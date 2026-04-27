"use client";

import { Canvas } from "@react-three/fiber";
import { SceneController } from "@/components/three/scene-controller";

export function SceneShell() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 5, 4]} intensity={1.0} color="#bfe7ff" />
        <pointLight position={[-3, -1, 3]} intensity={0.7} color="#8b5cf6" />
        <pointLight position={[0.4, 1.2, 2.1]} intensity={1.1} color="#67e8f9" />
        <pointLight position={[1.8, 0.4, 2.4]} intensity={0.75} color="#e0f2fe" />

        <SceneController />
      </Canvas>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,transparent_0%,rgba(2,4,12,0.22)_26%,rgba(2,4,12,0.56)_58%,rgba(2,4,12,0.88)_100%)]" />
    </div>
  );
}
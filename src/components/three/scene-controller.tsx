"use client";

import { Float } from "@react-three/drei";
import { VisiMoveEyeModel } from "@/components/three/visimove-eye-model";
import { useScenePhase } from "@/hooks/use-scene-phase";

export function SceneController() {
  const phase = useScenePhase();

  return (
    <Float speed={0.72} rotationIntensity={0.06} floatIntensity={0.1}>
      <VisiMoveEyeModel phase={phase} />
    </Float>
  );
}

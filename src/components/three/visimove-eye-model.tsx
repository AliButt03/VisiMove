"use client";

import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RefObject, useEffect, useRef } from "react";
import { Mesh } from "three";
import type { Group } from "three";
import type { ScenePhase } from "@/hooks/use-scene-phase";

type VisiMoveEyeModelProps = {
  phase: RefObject<ScenePhase>;
};

function lerp(start: number, end: number, alpha: number) {
  return start + (end - start) * alpha;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function EyeModelScene({ phase }: VisiMoveEyeModelProps) {
  const groupRef = useRef<Group | null>(null);
  const modelRef = useRef<Group | null>(null);
  const gltf = useGLTF("/models/visimove-eye.glb");

  useEffect(() => {
    if (!gltf?.scene) return;

    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [gltf]);

  useFrame((state) => {
    const { section, sectionProgress, globalProgress } = phase.current;
    const t = state.clock.elapsedTime;
    const viewportWidth = state.size.width;
    const isMobile = viewportWidth < 768;
    const isTablet = viewportWidth >= 768 && viewportWidth < 1024;

    let targetX = 1.52;
    let targetY = -0.16;
    let targetZ = -1.6;
    let targetRotY = 0;
    let targetRotX = 0;
    let targetScale = 1.34;

    if (section === "hero") {
      const heroExit = clamp((sectionProgress - 0.58) / 0.42, 0, 1);
      const heroX = isMobile ? 0.74 : isTablet ? 1.18 : 2.18;
      const heroY = isMobile ? 1.04 : isTablet ? 0.62 : -0.24;
      const heroZ = isMobile ? -1.92 : isTablet ? -1.72 : -1.32;
      const heroScale = isMobile ? 0.72 : isTablet ? 1.02 : 1.48;

      targetX = lerp(heroX, 1.18, heroExit);
      targetY = lerp(heroY, -0.2, heroExit);
      targetZ = lerp(heroZ, -1.62, heroExit);
      targetRotY = lerp(0, -0.08, heroExit);
      targetRotX = lerp(0, -0.02, heroExit);
      targetScale = lerp(heroScale, 1.34, heroExit);
    } else if (section === "about") {
      targetX = lerp(1.1, 0.88, sectionProgress);
      targetY = lerp(0.02, -0.02, sectionProgress);
      targetZ = lerp(-1.46, -1.56, sectionProgress);
      targetRotY = lerp(-0.04, 0.08, sectionProgress);
      targetRotX = lerp(0, -0.01, sectionProgress);
      targetScale = lerp(1.3, 1.22, sectionProgress);
    } else if (section === "how-it-works") {
      targetX = lerp(0.88, 0.7, sectionProgress);
      targetY = lerp(-0.02, -0.08, sectionProgress);
      targetZ = lerp(-1.56, -1.64, sectionProgress);
      targetRotY = lerp(0.08, 0.18, sectionProgress);
      targetRotX = lerp(-0.01, -0.03, sectionProgress);
      targetScale = lerp(1.22, 1.14, sectionProgress);
    } else if (section === "features") {
      targetX = lerp(0.7, 0.78, sectionProgress);
      targetY = lerp(-0.08, -0.12, sectionProgress);
      targetZ = lerp(-1.64, -1.7, sectionProgress);
      targetRotY = lerp(0.18, 0.24, sectionProgress);
      targetRotX = lerp(-0.03, -0.04, sectionProgress);
      targetScale = lerp(1.14, 1.08, sectionProgress);
    } else if (section === "technology") {
      targetX = lerp(0.78, 0.62, sectionProgress);
      targetY = lerp(-0.12, -0.18, sectionProgress);
      targetZ = lerp(-1.7, -1.78, sectionProgress);
      targetRotY = lerp(0.24, 0.12, sectionProgress);
      targetRotX = lerp(-0.04, -0.06, sectionProgress);
      targetScale = lerp(1.08, 1.0, sectionProgress);
    } else if (section === "download") {
      targetX = lerp(0.62, 0.44, sectionProgress);
      targetY = lerp(-0.18, -0.26, sectionProgress);
      targetZ = lerp(-1.78, -1.86, sectionProgress);
      targetRotY = lerp(0.12, 0.04, sectionProgress);
      targetRotX = lerp(-0.06, -0.08, sectionProgress);
      targetScale = lerp(1.0, 0.94, sectionProgress);
    }

    // Past the hero the eye sat behind centred copy (e.g. the features intro); keep it at the
    // right edge as an accent so text stays readable.
    if (section !== "hero") {
      targetX = isMobile ? 1.55 : isTablet ? 2.5 : 3.25;
      targetScale *= isMobile ? 0.6 : 0.75;
    }

    if (groupRef.current) {
      groupRef.current.position.x = lerp(
        groupRef.current.position.x,
        targetX + Math.cos(t * 0.42) * 0.01,
        0.06,
      );
      groupRef.current.position.y = lerp(
        groupRef.current.position.y,
        targetY + Math.sin(t * 0.72) * 0.018,
        0.06,
      );
      groupRef.current.position.z = lerp(
        groupRef.current.position.z,
        targetZ,
        0.06,
      );
      groupRef.current.rotation.y = lerp(
        groupRef.current.rotation.y,
        targetRotY + Math.sin(t * 0.35) * 0.02,
        0.06,
      );
      groupRef.current.rotation.x = lerp(
        groupRef.current.rotation.x,
        targetRotX + Math.cos(t * 0.22) * 0.01,
        0.06,
      );
      groupRef.current.rotation.z = lerp(
        groupRef.current.rotation.z,
        Math.sin(t * 0.18) * 0.01 + globalProgress * 0.006,
        0.06,
      );
      groupRef.current.scale.setScalar(
        lerp(groupRef.current.scale.x, targetScale, 0.06),
      );
    }

    if (modelRef.current) {
      modelRef.current.rotation.y = lerp(
        modelRef.current.rotation.y,
        Math.PI / 2,
        0.08,
      );
      modelRef.current.rotation.x = lerp(modelRef.current.rotation.x, 0, 0.08);
      modelRef.current.rotation.z = lerp(modelRef.current.rotation.z, 0, 0.08);
    }
  });

  return (
    <group ref={groupRef} position={[2.18, -0.24, -1.32]}>
      <group ref={modelRef}>
        <primitive object={gltf.scene} />
      </group>
    </group>
  );
}

export function VisiMoveEyeModel({ phase }: VisiMoveEyeModelProps) {
  return <EyeModelScene phase={phase} />;
}

useGLTF.preload("/models/visimove-eye.glb");

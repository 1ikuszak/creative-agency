"use client";

import { Canvas } from "@react-three/fiber";
import React, { ReactNode } from "react";

export interface ModelSceneProps {
  children: ReactNode;
  lightIntensity?: number;
}

export function ModelScene({
  children,
  lightIntensity = 10000,
}: ModelSceneProps) {
  return (
    <Canvas className="canvas z-0 rounded-md">
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={lightIntensity}
      />
      <pointLight position={[-10, -10, -10]} intensity={lightIntensity} />
      {children}
    </Canvas>
  );
}

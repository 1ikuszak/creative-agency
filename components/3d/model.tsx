"use client";

import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useFrame, useLoader } from "@react-three/fiber";
import { Object3D } from "three";

interface ModelProps {
  src: string;
  speed?: number;
  scale?: number;
  positionY?: number;
}

export function Model({
  src,
  speed = 1,
  scale = 0.076,
  positionY = -1.4,
}: ModelProps) {
  const myModel = useLoader(GLTFLoader, src);
  const ref = useRef<Object3D>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += (delta / 4) * speed;
    }
  });

  return (
    <primitive
      object={myModel.scene}
      ref={ref}
      position={[0, positionY, 0]}
      scale={[scale, scale, scale]}
    />
  );
}

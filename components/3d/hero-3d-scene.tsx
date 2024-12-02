"use client";

import dynamic from "next/dynamic";

const ModelScene = dynamic(
  () => import("@/components/3d/model-scene").then((mod) => mod.ModelScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full flex-col items-center justify-center bg-black">
        loading...
      </div>
    ),
  }
);

const Model = dynamic(
  () => import("@/components/3d/model").then((mod) => mod.Model),
  {
    ssr: false,
    loading: () => null,
  }
);

export function Hero3DScene() {
  return (
    <div className="absolute right-0 h-screen overflow-hidden bg-transparent">
      <ModelScene>
        <Model positionY={-3} scale={0.1} src="/ionic_column.glb" />
      </ModelScene>
    </div>
  );
}

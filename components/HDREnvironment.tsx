"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Loading component with cyberpunk ASCII animation
function LoadingAnimation() {
  const [frame, setFrame] = useState(0);
  const frames = [
    `╔════════════════════╗
║ LOADING HDR ENV... ║
║ ▰▰▰▰▱▱▱▱ 50%      ║
╚════════════════════╝`,
    `╔════════════════════╗
║ LOADING HDR ENV... ║
║ ▰▰▰▰▰▰▱▱ 75%      ║
╚════════════════════╝`,
    `╔════════════════════╗
║ LOADING HDR ENV... ║
║ ▰▰▰▰▰▰▰▰ 100%     ║
╚════════════════════╝`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 500);
    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="text-center space-y-4">
        <pre className="font-mono text-green-500 animate-pulse whitespace-pre">
          {frames[frame]}
        </pre>
        <div className="flex gap-2 justify-center">
          <div className="w-2 h-2 bg-green-500 animate-ping" />
          <div className="w-2 h-2 bg-blue-500 animate-ping delay-100" />
          <div className="w-2 h-2 bg-purple-500 animate-ping delay-200" />
        </div>
      </div>
    </div>
  );
}

function HDREnvironmentContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;

    // Performance optimizations
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    camera.position.z = 75;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    // Update mobile controls
    if (window.innerWidth <= 768) {
      controls.enabled = true;
      controls.autoRotate = true;
      controls.rotateSpeed = 0.5;
      controls.enableDamping = true;
      controls.dampingFactor = 0.07;
    }

    // Load HDR
    const loader = new RGBELoader();
    loader.setDataType(THREE.HalfFloatType);

    loader.load(
      "/hdr/rogland_sunset_2k.hdr",
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
      },
      undefined,
      (error) => {
        console.error("Error loading HDR:", error);
        scene.background = new THREE.Color(0x000000);
      }
    );

    // Optimized resize handler
    let resizeTimeout: NodeJS.Timeout;
    const onWindowResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 100);
    };

    window.addEventListener("resize", onWindowResize);

    // Animation loop
    let animationFrameId: number;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      cancelAnimationFrame(animationFrameId);
      scene.clear();
      renderer.dispose();
      controls.dispose();
      if (container?.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Remove the showContent check since we set it immediately
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 flex-1 w-full h-full"
      aria-hidden="true"
    />
  );
}

export default function HDREnvironment() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <HDREnvironmentContent />
    </Suspense>
  );
}

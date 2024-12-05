"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function LoadingAnimation() {
  const [frame, setFrame] = useState(0);
  const frames = [
    `┌────────────────────┐
│ INITIALIZING HDR.. │
│ ⣷⣄⡀⠀⠀⠀ 35%      │
└────────────────────┘`,
    `┌────────────────────┐
│ PROCESSING HDR... │
│ ⣾⣷⣄⡀⠀⠀ 65%      │
└────────────────────┘`,
    `┌────────────────────┐
│ FINALIZING HDR... │
│ ⢿⣻⣷⣄⡀⠀ 85%      │
└────────────────────┘`,
    `┌────────────────────┐
│ HDR READY!         │
│ ⣿⣿⣿⣿⣿⣿ 100       │
└────────────────────┘`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 400);
    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div className="absolute inset-0 flex items-center justify-end bg-white/90 pr-20">
      <div className="text-center space-y-4">
        <pre className="font-mono text-slate-800 whitespace-pre font-semibold">
          {frames[frame]}
        </pre>
        <div className="flex gap-2 justify-center">
          <div className="w-1.5 h-1.5 bg-slate-700 animate-bounce" />
          <div className="w-1.5 h-1.5 bg-slate-800 animate-bounce delay-100" />
          <div className="w-1.5 h-1.5 bg-slate-900 animate-bounce delay-200" />
        </div>
      </div>
    </div>
  );
}

function HDREnvironmentContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const rotationState = useRef({ value: 0 });
  const rafRef = useRef<number>();
  const mountedRef = useRef(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;
    mountedRef.current = true;

    // Initialize Three.js components
    const initThree = async () => {
      try {
        // Renderer setup with proper sizing
        rendererRef.current = new THREE.WebGLRenderer({
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
          depth: false,
        });
        const renderer = rendererRef.current;

        // Get the container's size instead of window
        const width = container.clientWidth;
        const height = container.clientHeight;

        renderer.setPixelRatio(1);
        renderer.setSize(width, height);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        container.appendChild(renderer.domElement);

        // Scene setup
        sceneRef.current = new THREE.Scene();
        const scene = sceneRef.current;

        // Camera setup with container dimensions
        cameraRef.current = new THREE.PerspectiveCamera(
          60,
          width / height,
          1,
          100
        );
        const camera = cameraRef.current;
        camera.position.z = 75;

        // Controls setup
        controlsRef.current = new OrbitControls(camera, renderer.domElement);
        const controls = controlsRef.current;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.0;

        // Mobile optimization
        if (window.innerWidth <= 768) {
          controls.enabled = true;
          controls.autoRotate = true;
          controls.rotateSpeed = 0.5;
          controls.enableDamping = true;
          controls.dampingFactor = 0.07;
        }

        // Simplified HDR loading
        const loadTexture = async (): Promise<THREE.DataTexture> => {
          console.log("Starting HDR texture load...");
          const hdrLoader = new RGBELoader();
          const texture = await hdrLoader.loadAsync(
            "/hdr/rogland_sunset_2k.hdr"
          );
          console.log("HDR texture loaded successfully");
          return texture;
        };

        // Load texture
        const texture = await loadTexture();

        if (mountedRef.current && sceneRef.current) {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          sceneRef.current.background = texture;
          sceneRef.current.environment = texture;
          setIsLoaded(true); // This will hide the loading animation
          setError(null);
        }

        return { renderer, scene, camera, controls };
      } catch (error) {
        console.error("Error loading HDR texture:", error);
        setError(
          error instanceof Error
            ? error.message
            : "Failed to load HDR environment"
        );
        setIsLoaded(true); // Hide loading animation even on error
        return null;
      }
    };

    // Initialize scene
    initThree();

    // Optimized resize handler with debouncing
    let resizeTimeout: number;
    const handleResize = () => {
      if (resizeTimeout) window.cancelAnimationFrame(resizeTimeout);
      resizeTimeout = window.requestAnimationFrame(() => {
        if (cameraRef.current && rendererRef.current && container) {
          const width = container.clientWidth;
          const height = container.clientHeight;

          cameraRef.current.aspect = width / height;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(width, height);
        }
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Optimized animation loop
    const animate = () => {
      if (!mountedRef.current) return;

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        // Update rotation
        rotationState.current.value += 0.001;
        sceneRef.current.rotation.y = rotationState.current.value;

        // Update controls
        if (controlsRef.current) {
          controlsRef.current.update();
        }

        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      mountedRef.current = false;
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeTimeout) cancelAnimationFrame(resizeTimeout);

      if (controlsRef.current) controlsRef.current.dispose();
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }
      if (sceneRef.current) sceneRef.current.clear();

      // Clear refs
      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      controlsRef.current = null;
    };
  }, []);

  return (
    <>
      {!isLoaded && <LoadingAnimation />}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white">
          <div className="text-center p-4">
            <p className="text-red-500">Failed to load environment</p>
            <p className="text-sm opacity-75">{error}</p>
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 flex-1 w-full h-full overflow-hidden"
        aria-hidden="true"
      />
    </>
  );
}

export default function HDREnvironment() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <HDREnvironmentContent />
    </Suspense>
  );
}

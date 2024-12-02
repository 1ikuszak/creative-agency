"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function HDREnvironment() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    // Store ref in a variable for cleanup
    const container = containerRef.current;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 75;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    // HDR Loader
    const loader = new RGBELoader();
    loader.load(
      // Update this path to your HDR file (should be a .hdr file)
      "/autumn_field_puresky_4k.hdr",
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
      },
      (progress) => {
        console.log("Loading:", (progress.loaded / progress.total) * 100 + "%");
      },
      (error) => {
        console.log("Error loading HDR:", error);
        scene.background = new THREE.Color(0x000000);
      }
    );

    // Handle resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);

    // Updated animation loop with automatic rotation
    function animate() {
      requestAnimationFrame(animate);

      // Make sure we're not getting interference from controls
      controls.autoRotate = true;
      controls.autoRotateSpeed = 2.0; // Adjust this value to control rotation speed

      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      scene.clear();
      renderer.dispose();
      controls.dispose();
      if (container?.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 flex-1 w-full h-full"
      aria-hidden="true"
    />
  );
}

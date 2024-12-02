import * as THREE from "three";

export function createReflectiveSphere(
  cubeRenderTarget: THREE.WebGLCubeRenderTarget
) {
  // Create sphere with dynamic reflection material
  const geometry = new THREE.IcosahedronGeometry(15, 8);
  const material = new THREE.MeshStandardMaterial({
    envMap: cubeRenderTarget.texture,
    roughness: 0.05,
    metalness: 1,
    envMapIntensity: 1.0,
  });

  const sphere = new THREE.Mesh(geometry, material);

  // Add animation methods
  const animate = () => {
    sphere.rotation.x += 0.002;
    sphere.rotation.y += 0.003;
  };

  return { sphere, animate };
}

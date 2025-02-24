import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleWave: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const requestRef = useRef<number>();

  // Grid configuration
  const AMOUNTX = 20;            // Number of points along X
  const AMOUNTY = 40;            // Number of points along Z
  const SEPARATION = 70;         // Distance between points in the grid
  const WAVE_AMPLITUDE = 35;     // Wave height (Y)
  const GLOBAL_SCALE = 0.5;      // Scale down the entire wave system so it never touches edges

  let count = 0;
  let camera: THREE.PerspectiveCamera;
  let scene: THREE.Scene;
  let particles: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;

  useEffect(() => {
    if (!mountRef.current) return;

    // Create Scene
    scene = new THREE.Scene();

    // Create Camera
    camera = new THREE.PerspectiveCamera(75, 2, 1, 3000);
    // Slightly further out, so we see the wave fully inside the container
    camera.position.set(0, 0, 1300);

    // Create Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Handle resizing
    const onWindowResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onWindowResize);
    onWindowResize();

    // Create geometry for particles
    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    // Calculate the total dimension if we used the full grid
    // (AMOUNTX - 1)*SEPARATION along X and same idea for Y (Z dimension).
    const totalWidth = (AMOUNTX - 1) * SEPARATION;
    const halfWidth = totalWidth / 2;
    const totalHeight = (AMOUNTY - 1) * SEPARATION;
    const halfHeight = totalHeight / 2;

    let i = 0; // index for positions
    let j = 0; // index for scales

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        // Convert ix in [0..AMOUNTX-1] to [-halfWidth..+halfWidth]
        const xFrac = ix / (AMOUNTX - 1); // from 0..1
        const xPos = THREE.MathUtils.lerp(-halfWidth, halfWidth, xFrac);

        // Convert iy in [0..AMOUNTY-1] to [-halfHeight..+halfHeight]
        const yFrac = iy / (AMOUNTY - 1); // 0..1
        const zPos = THREE.MathUtils.lerp(-halfHeight, halfHeight, yFrac);

        positions[i] = xPos;  // x
        positions[i + 1] = 0; // y
        positions[i + 2] = zPos; // z

        scales[j] = 1.0; // initial scale for each particle

        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // Custom Shaders
    const vertexShader = `
      attribute float scale;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        // Keep a consistent point size in screen space
        gl_PointSize = scale * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      uniform vec3 color;
      void main() {
        // Circular shape for each point
        if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
        gl_FragColor = vec4(color, 1.0);
      }
    `;
    const isDarkMode = 
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

    // Shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(isDarkMode ? 0x000000 :  0xffffff) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });
    particles = new THREE.Points(geometry, material);

    // Scale down the entire particle system so it never hits container edges
    particles.scale.set(GLOBAL_SCALE, GLOBAL_SCALE, GLOBAL_SCALE);

    scene.add(particles);

    // Animation loop
    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);

      // Automatic camera orbit
      // If you want a fixed camera, remove or comment out these lines:
      const orbitRadius = 1300;
      const orbitSpeed = 0.0015;
      camera.position.x = Math.sin(count * orbitSpeed) * orbitRadius;
      camera.position.z = Math.cos(count * orbitSpeed) * orbitRadius;
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      // Update wave motion
      const posArray = particles.geometry.attributes.position.array as Float32Array;
      const scaleArray = particles.geometry.attributes.scale.array as Float32Array;

      let i = 0;
      let s = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          // y position wave
          posArray[i + 1] =
            Math.sin((ix + count) * 0.3) * WAVE_AMPLITUDE +
            Math.sin((iy + count) * 0.5) * WAVE_AMPLITUDE;

          // Pulsing scale based on wave
          scaleArray[s] =
            (Math.sin((ix + count) * 0.3) + 1) * 8 +
            (Math.sin((iy + count) * 0.5) + 1) * 8;

          i += 3;
          s++;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;

      renderer.render(scene, camera);
      count += 0.1;
    };

    animate();

    // Cleanup
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", onWindowResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "50%",
        height: "500px",
        position: "relative",
        overflow: "hidden",
      }}
    />
  );
};

export default ParticleWave;

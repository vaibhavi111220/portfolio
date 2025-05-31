import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setup variables
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;
    let animationFrameId: number;

    // Initialize the scene
    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

      if (containerRef.current) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);
      }

      // Create particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 5000;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
      }

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: "#2196f3",
      });

      particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      camera.position.z = 2;

      // Handle scroll animation
      window.addEventListener("scroll", onScroll);
    };

    // Scroll handler
    const onScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      if (particles) {
        gsap.to(particles.rotation, {
          y: scrollPercent * Math.PI * 2,
          duration: 0.5,
        });
      }
    };

    // Animation loop
    const animate = () => {
      animationFrameId = window.requestAnimationFrame(animate);
      if (particles) {
        particles.rotation.x += 0.0001;
        particles.rotation.y += 0.0002;
      }
      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      if (containerRef.current) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    // Initialize and start animation
    init();
    animate();
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
      if (containerRef.current && renderer.domElement) {
        try {
          containerRef.current.removeChild(renderer.domElement);
        } catch (e) {
          console.log("Error removing renderer:", e);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="three-background fixed inset-0 w-full h-screen -z-10"
    />
  );
};

export default ThreeBackground;
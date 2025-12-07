import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import './vital-stats.css';

gsap.registerPlugin(ScrollTrigger);

const VitalStats = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const sphereRef = useRef(null);

  useEffect(() => {
    // Initialize Three.js scene
    const initThreeJS = () => {
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current = renderer;

      // Create sphere geometry
      const geometry = new THREE.SphereGeometry(1, 32, 32);

      // Load Earth texture
      const textureLoader = new THREE.TextureLoader();
      const earthTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');

      const material = new THREE.MeshBasicMaterial({
        map: earthTexture,
        transparent: true
      });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      sphereRef.current = sphere;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.005; // Slower rotation on Y-axis only
        renderer.render(scene, camera);
      };
      animate();
    };

    // Initialize GSAP ScrollTrigger
    const initScrollTrigger = () => {
      gsap.set(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: true,
          pinSpacing: true,
        }
      });

      // Set initial states for stats
      gsap.set('.stat-item', { opacity: 0, scale: 0.8, y: 100 });

      // Animate stats appearance in sequence
      gsap.to('.stat-item-1', {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: '25% center',
          scrub: true,
        }
      });

      gsap.to('.stat-item-2', {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: '25% center',
          end: '50% center',
          scrub: true,
        }
      });

      gsap.to('.stat-item-3', {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: '50% center',
          end: '75% center',
          scrub: true,
        }
      });

      gsap.to('.stat-item-4', {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: '75% center',
          end: 'bottom center',
          scrub: true,
        }
      });
    };

    initThreeJS();
    initScrollTrigger();

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="vital-stats-section">
      <div className="pin-spacer">
        <div className="vital-stats-container" ref={containerRef}>
          <h1 className="vital-stats-title">Vital Stats</h1>
          <div className="canvas-container">
            <div className="canvas-wrapper">
              <canvas
                ref={canvasRef}
                className="threejs-canvas"
                data-engine="three.js r179"
              ></canvas>
            </div>
          </div>
          <div className="stats-container">
            <div className="stat-item stat-item-1">
              <p className="stat-text">
                <span className="stat-number">[100+]</span>
                Transformative Digital Product Launched Globally
              </p>
            </div>
            <div className="stat-item stat-item-2">
              <p className="stat-text">
                <span className="stat-number">[30M+ AED]</span>
                In Client Growth
              </p>
            </div>
            <div className="stat-item stat-item-3">
              <p className="stat-text">
                <span className="stat-number">[110+]</span>
                Successful Projects Executed Across Industries
              </p>
            </div>
            <div className="stat-item stat-item-4">
              <p className="stat-text">
                <span className="stat-number">[6+]</span>
                Years Delivering Innovative Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitalStats;

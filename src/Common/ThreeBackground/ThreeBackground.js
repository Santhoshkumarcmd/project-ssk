import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x16213e, 15, 30);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0x404060, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff0080, 2, 30);
    pointLight.position.set(0, 10, 0);
    scene.add(pointLight);

    const structure = new THREE.Group();

    const coreGeometry = new THREE.CylinderGeometry(1, 1, 12, 6);
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      emissive: 0x004444,
      shininess: 100,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.castShadow = true;
    structure.add(core);

    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0x442200,
      metalness: 0.9,
      roughness: 0.1,
    });

    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(3.5 + i * 0.5, 0.2, 16, 100);
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.y = -3 + i * 5;
      ring.rotation.x = Math.PI / 2;
      ring.castShadow = true;
      structure.add(ring);
    }

    const platformMaterial = new THREE.MeshPhongMaterial({
      color: 0x10ff90,
      emissive: 0x004422,
      transparent: true,
      opacity: 0.9,
    });

    for (let i = 0; i < 4; i++) {
      const platformGeometry = new THREE.CylinderGeometry(4, 4.5, 0.5, 8);
      const platform = new THREE.Mesh(platformGeometry, platformMaterial);
      platform.position.y = -6 + i * 4;
      platform.castShadow = true;
      structure.add(platform);
    }

    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0080,
      emissive: 0x440022,
      shininess: 90,
      transparent: true,
      opacity: 0.8,
    });

    const spheres = [];
    for (let i = 0; i < 8; i++) {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.8, 32, 32),
        sphereMaterial
      );
      const angle = (i / 8) * Math.PI * 2;
      sphere.position.set(
        Math.cos(angle) * 3.5,
        Math.sin(i * 1.5) * 2,
        Math.sin(angle) * 3.5
      );
      sphere.castShadow = true;
      structure.add(sphere);
      spheres.push(sphere);
    }

    const beamMaterial = new THREE.MeshPhongMaterial({
      color: 0x0088ff,
      emissive: 0x002244,
    });

    for (let i = 0; i < 6; i++) {
      const beamGeometry = new THREE.CylinderGeometry(0.2, 0.2, 12, 12);
      const beam = new THREE.Mesh(beamGeometry, beamMaterial);
      beam.rotation.z = Math.PI / 2;
      const angle = (i / 6) * Math.PI * 2;
      beam.position.set(
        Math.cos(angle) * 2.5,
        0,
        Math.sin(angle) * 2.5
      );
      beam.castShadow = true;
      structure.add(beam);
    }

    scene.add(structure);

    const baseGeometry = new THREE.CylinderGeometry(10, 12, 1, 32);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x204060,
      metalness: 0.4,
      roughness: 0.7,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -8;
    base.receiveShadow = true;
    scene.add(base);

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      structure.rotation.y += 0.004;
      structure.rotation.x += 0.001;
      const scale = 0.9 + Math.sin(Date.now() * 0.002) * 0.1;
      spheres.forEach(sphere => {
        sphere.scale.set(scale, scale, scale);
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationIdRef.current);
      if (rendererRef.current && mount.contains(rendererRef.current.domElement)) {
        mount.removeChild(rendererRef.current.domElement);
      }
      coreGeometry.dispose();
      coreMaterial.dispose();
      baseGeometry.dispose();
      baseMaterial.dispose();
      ringMaterial.dispose();
      platformMaterial.dispose();
      sphereMaterial.dispose();
      beamMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-background" />;
};

export default ThreeBackground;

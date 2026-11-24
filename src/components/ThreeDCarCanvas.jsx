import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll, useSpring } from 'framer-motion';

export default function ThreeDCarCanvas({ containerRef, isLight = true }) {
  const canvasRef = useRef(null);

  // Track scroll progress for 3D rotation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    restDelta: 0.001
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Scene, Camera, WebGL Renderer
    const scene = new THREE.Scene();

    const width = canvas.clientWidth || 1000;
    const height = canvas.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 1.4, 6.2);
    camera.lookAt(0, 0.05, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // 2. High-End Studio Lighting for Light & Dark backgrounds
    scene.add(new THREE.AmbientLight(0xffffff, isLight ? 1.6 : 0.9));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(6, 9, 7);
    scene.add(keyLight);

    // Glowing crimson rim light (#F20D20) for Aman's signature brand glint
    const crimsonRimLight = new THREE.DirectionalLight(0xf20d20, 3.8);
    crimsonRimLight.position.set(-7, 3, -5);
    scene.add(crimsonRimLight);

    const frontFillLight = new THREE.DirectionalLight(0xffffff, 1.6);
    frontFillLight.position.set(0, 2.5, 6);
    scene.add(frontFillLight);

    // 3. 3D Supercar Assembly
    const carGroup = new THREE.Group();
    scene.add(carGroup);

    // --- High-Gloss Automotive Materials ---
    const bodyPaint = new THREE.MeshPhysicalMaterial({
      color: 0x1a1a22,
      metalness: 0.88,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });

    const glassPaint = new THREE.MeshPhysicalMaterial({
      color: 0x08080d,
      metalness: 0.98,
      roughness: 0.06,
      transparent: true,
      opacity: 0.9
    });

    const crimsonGlow = new THREE.MeshStandardMaterial({
      color: 0xf20d20,
      emissive: 0xf20d20,
      emissiveIntensity: 2.6,
      roughness: 0.1
    });

    const ledHeadlight = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 2.8,
      roughness: 0.1
    });

    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x16161a,
      roughness: 0.45,
      metalness: 0.65
    });

    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      metalness: 0.95,
      roughness: 0.12
    });

    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x141414,
      roughness: 0.92,
      metalness: 0.05
    });

    // --- A. Aerodynamic Monocoque Body (Sculpted Side Profile) ---
    const profile = new THREE.Shape();
    profile.moveTo(2.35, -0.22);
    profile.lineTo(2.28, -0.1);
    profile.quadraticCurveTo(1.65, 0.08, 1.02, 0.18);
    profile.quadraticCurveTo(0.62, 0.45, -0.02, 0.62);
    profile.quadraticCurveTo(-0.55, 0.62, -0.88, 0.55);
    profile.quadraticCurveTo(-1.38, 0.42, -1.88, 0.26);
    profile.lineTo(-2.32, 0.32);
    profile.lineTo(-2.38, -0.15);
    profile.lineTo(-2.28, -0.24);
    profile.lineTo(2.35, -0.24);
    profile.closePath();

    const extrudeSettings = {
      steps: 2,
      depth: 1.75,
      bevelEnabled: true,
      bevelThickness: 0.14,
      bevelSize: 0.12,
      bevelSegments: 8
    };

    const bodyGeo = new THREE.ExtrudeGeometry(profile, extrudeSettings);
    bodyGeo.center();
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyPaint);
    carGroup.add(bodyMesh);

    // --- B. Sculpted Glass Cockpit Canopy ---
    const glassProfile = new THREE.Shape();
    glassProfile.moveTo(0.92, 0.22);
    glassProfile.quadraticCurveTo(0.58, 0.48, 0.0, 0.64);
    glassProfile.quadraticCurveTo(-0.52, 0.64, -0.84, 0.57);
    glassProfile.quadraticCurveTo(-1.28, 0.44, -1.72, 0.28);
    glassProfile.lineTo(0.92, 0.22);
    glassProfile.closePath();

    const glassExtrude = {
      steps: 1,
      depth: 1.48,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelSegments: 6
    };
    const glassGeo = new THREE.ExtrudeGeometry(glassProfile, glassExtrude);
    glassGeo.center();
    const glassMesh = new THREE.Mesh(glassGeo, glassPaint);
    glassMesh.position.set(-0.24, 0.08, 0);
    glassMesh.scale.set(0.92, 0.98, 0.92);
    carGroup.add(glassMesh);

    // --- C. Muscular Wheel Haunches / Flared Fenders ---
    const addFender = (x, z) => {
      const fenderGeo = new THREE.CylinderGeometry(0.52, 0.54, 0.22, 18, 1, false, 0, Math.PI);
      fenderGeo.rotateZ(Math.PI / 2);
      const fender = new THREE.Mesh(fenderGeo, bodyPaint);
      fender.position.set(x, -0.06, z);
      carGroup.add(fender);
    };
    addFender(1.32, 0.96);
    addFender(1.32, -0.96);
    addFender(-1.32, 0.96);
    addFender(-1.32, -0.96);

    // --- D. 4 Detailed 3D Wheels with Red Brake Calipers ---
    const wheels = [];
    const frontSteerGroups = [];

    const createWheel = (isFront, zSide) => {
      const wheelGroup = new THREE.Group();

      // Rubber Tire
      const t = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.26, 32), tireMat);
      t.rotateX(Math.PI / 2);
      wheelGroup.add(t);

      // Multi-spoke Alloy Rim
      const r = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.28, 20), rimMat);
      r.rotateX(Math.PI / 2);
      wheelGroup.add(r);

      // Glowing Crimson Caliper (#F20D20)
      const c = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 0.09), crimsonGlow);
      c.position.set(0, 0.14, 0.06 * Math.sign(zSide));
      wheelGroup.add(c);

      return wheelGroup;
    };

    const fl = createWheel(true, 1.04);
    fl.position.set(1.32, -0.22, 1.04);
    carGroup.add(fl);
    frontSteerGroups.push(fl);
    wheels.push(fl);

    const fr = createWheel(true, -1.04);
    fr.position.set(1.32, -0.22, -1.04);
    carGroup.add(fr);
    frontSteerGroups.push(fr);
    wheels.push(fr);

    const rl = createWheel(false, 1.04);
    rl.position.set(-1.32, -0.22, 1.04);
    carGroup.add(rl);
    wheels.push(rl);

    const rr = createWheel(false, -1.04);
    rr.position.set(-1.32, -0.22, -1.04);
    carGroup.add(rr);
    wheels.push(rr);

    // --- E. Glowing Crimson LED Accents (#F20D20) & Headlights ---
    // Dual Front LED Razor Headlights
    const hlL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.35), ledHeadlight);
    hlL.position.set(2.26, -0.04, 0.58);
    hlL.rotation.y = 0.3;
    carGroup.add(hlL);

    const hlR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.35), ledHeadlight);
    hlR.position.set(2.26, -0.04, -0.58);
    hlR.rotation.y = -0.3;
    carGroup.add(hlR);

    // Front Splitter Lip
    const frontGlow = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 1.88), crimsonGlow);
    frontGlow.position.set(2.4, -0.23, 0);
    carGroup.add(frontGlow);

    // Rear Taillight Lightbar
    const rearGlow = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, 1.9), crimsonGlow);
    rearGlow.position.set(-2.4, 0.18, 0);
    carGroup.add(rearGlow);

    // Side Rocker Streaks
    const sideGlowL = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.04, 0.04), crimsonGlow);
    sideGlowL.position.set(0, -0.23, 1.0);
    carGroup.add(sideGlowL);

    const sideGlowR = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.04, 0.04), crimsonGlow);
    sideGlowR.position.set(0, -0.23, -1.0);
    carGroup.add(sideGlowR);

    // Elevated Carbon GT Wing
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.04, 2.12), carbonMat);
    wing.position.set(-2.18, 0.52, 0);
    carGroup.add(wing);

    const strutL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.28, 0.04), carbonMat);
    strutL.position.set(-2.14, 0.38, 0.55);
    carGroup.add(strutL);

    const strutR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.28, 0.04), carbonMat);
    strutR.position.set(-2.14, 0.38, -0.55);
    carGroup.add(strutR);

    // Soft Ambient Under-Car Shadow
    const shadowGeo = new THREE.PlaneGeometry(5.4, 2.8);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d');
    const grad = sCtx.createRadialGradient(64, 64, 20, 64, 64, 64);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
    grad.addColorStop(0.6, 'rgba(242, 13, 32, 0.15)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = grad;
    sCtx.fillRect(0, 0, 128, 128);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: isLight ? 0.6 : 0.85
    });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.set(0, -0.34, 0);
    carGroup.add(shadow);

    // Overall scale and placement in camera frustum
    carGroup.scale.set(1.28, 1.28, 1.28);
    carGroup.position.set(0, -0.05, 0);

    // 4. Pointer / Touch Interactive Parallax
    let targetPointerX = 0;
    let targetPointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;

    const onPointerMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetPointerX = x * 0.22;
      targetPointerY = y * 0.12;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // 5. Smooth 3D Scroll Rotation Engine
    let animationFrameId;

    const render = () => {
      const progress = smoothProgress.get();

      // 3D TURNING MECHANICS (Right to Left on Scroll Down, Left to Right on Scroll Up):
      // When scrolling down (progress goes 0 -> 1):
      // Car starts angled facing right (approx +0.75 rad / +43°)
      // Passes through dynamic 3/4 beauty view at center (0.5)
      // Rotates smoothly to face left (approx -0.75 rad / -43°)
      const targetRotationY = (0.5 - progress) * 1.5;

      // Pointer spring smoothing
      currentPointerX += (targetPointerX - currentPointerX) * 0.05;
      currentPointerY += (targetPointerY - currentPointerY) * 0.05;

      carGroup.rotation.y = targetRotationY + currentPointerX;

      // Realistic Dynamic Body Roll & Banking
      const targetRollZ = (0.5 - progress) * 0.12;
      carGroup.rotation.z = targetRollZ;

      // Subtle nose pitch dive/rise + pointer tracking
      const targetPitchX = Math.abs(0.5 - progress) * 0.08 - 0.02;
      carGroup.rotation.x = targetPitchX - currentPointerY;

      // Front Wheels Dynamic Steering (wheels turn into the 3D corner)
      const steerAngle = (0.5 - progress) * 0.45;
      frontSteerGroups.forEach(w => {
        w.rotation.y = steerAngle;
      });

      // Wheel rotation simulating travel
      wheels.forEach(w => {
        w.children[0].rotation.x = progress * Math.PI * 8;
        w.children[1].rotation.x = progress * Math.PI * 8;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // 6. Responsive Resize Observer
    const handleResize = () => {
      if (!canvas) return;
      const newWidth = canvas.clientWidth || 1000;
      const newHeight = canvas.clientHeight || 600;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight, false);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      resizeObserver.disconnect();
      renderer.dispose();
      scene.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
    };
  }, [isLight, smoothProgress]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
      <canvas
        ref={canvasRef}
        className="w-[840px] sm:w-[1150px] md:w-[1400px] h-[480px] sm:h-[620px] md:h-[720px] max-w-none filter blur-[1.8px] sm:blur-[2.2px] drop-shadow-[0_20px_50px_rgba(242,13,32,0.38)] transition-opacity duration-500 pointer-events-none"
      />
    </div>
  );
}

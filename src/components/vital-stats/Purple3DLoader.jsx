import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

/* =====================================================
   FLAT METAL RING (SIZE + SPEED CONTROLLABLE)
===================================================== */
function FlatRing({
  rotation,
  speed,
  outerRadius,   // ⬅ ring size (bigger = outer ring)
  innerRadius,   // ⬅ hole size (controls band width)
  thickness      // ⬅ ring height / breadth
}) {
  const ref = useRef();

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.absarc(0, 0, outerRadius, 0, Math.PI * 2);

    const hole = new THREE.Path();
    hole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
    shape.holes.push(hole);

    return new THREE.ExtrudeGeometry(shape, {
      depth: thickness,        // 🔧 BREADTH (smaller = flatter)
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 2,
    });
  }, [outerRadius, innerRadius, thickness]);

  /* ROTATION SPEED */
  useFrame((_, d) => {
    ref.current.rotation.x += d * speed[0];
    ref.current.rotation.y += d * speed[1];
    ref.current.rotation.z += d * speed[2];
  });

  return (
    <mesh ref={ref} rotation={rotation} geometry={geometry}>
      <meshPhysicalMaterial
        color="#7c3aed"         // 🎨 BASE COLOR (physically shaded)
        metalness={0.65}
        roughness={0.25}
        clearcoat={1}
        clearcoatRoughness={0.15}
      />
    </mesh>
  );
}

/* =====================================================
   CENTER CORE (BALL)
===================================================== */
function Core() {
  return (
    <mesh>
      <sphereGeometry args={[0.42, 64, 64]} />
      <meshPhysicalMaterial
        color="#7c3aed"
        metalness={0.3}
        roughness={0.1}
        clearcoat={1}
      />
    </mesh>
  );
}

/* =====================================================
   MAIN LOADER
===================================================== */
export default function Purple3DLoader() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 30 }}
      dpr={[1, 2]}
      gl={{
        alpha: true,
        physicallyCorrectLights: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.25,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      <color attach="background" args={["transparent"]} />

      {/* ================= LIGHTING ================= */}
      <ambientLight intensity={0.2} />

      {/* Key light (main highlight) */}
      <directionalLight
        position={[6, 10, 6]}
        intensity={2.2}
        color="#ffffff"
      />

      {/* Fill light (purple bounce) */}
      <directionalLight
        position={[-6, -4, -6]}
        intensity={0.6}
        color="#7c3aed"
      />

      {/* ================= RINGS ================= */}

      {/* INNER RING — smallest & slowest */}
      <FlatRing
        outerRadius={1.7}
        innerRadius={1.5}
        thickness={0.6}
        rotation={[Math.PI / 2.1, 0, 0]}
        speed={[0.35, 0.45, 0.2]}   // ⬅ slow
      />

      {/* MIDDLE RING — medium size & speed */}
      <FlatRing
        outerRadius={2.1}
        innerRadius={1.9}
        thickness={0.6}
        rotation={[0, Math.PI / 2.1, 0]}
        speed={[0.45, 0.55, 0.2]}   // ⬅ medium
      />

      {/* OUTER RING — biggest & fastest */}
      <FlatRing
        outerRadius={2.5}
        innerRadius={2.3}
        thickness={0.6}
        rotation={[0, 0, 0]}
        speed={[0.65, 0.65, 0.2]}   // ⬅ fast
      />

      {/* CENTER BALL */}
      <Core />

      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}

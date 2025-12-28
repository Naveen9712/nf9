import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useEffect, useState } from "react";

/* =====================================================
   FLAT METAL RING (SIZE + SPEED CONTROLLABLE)
===================================================== */
function FlatRing({
  rotation,
  speed,
  outerRadius,
  innerRadius,
  thickness,
}) {
  const ref = useRef();

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.absarc(0, 0, outerRadius, 0, Math.PI * 2);

    const hole = new THREE.Path();
    hole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
    shape.holes.push(hole);

    return new THREE.ExtrudeGeometry(shape, {
      depth: thickness,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 2,
    });
  }, [outerRadius, innerRadius, thickness]);

  useFrame((_, d) => {
    ref.current.rotation.x += d * speed[0];
    ref.current.rotation.y += d * speed[1];
    ref.current.rotation.z += d * speed[2];
  });

  return (
    <mesh ref={ref} rotation={rotation} geometry={geometry}>
      <meshPhysicalMaterial
        color="#7c3aed"
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
      {/* Reduced ball size */}
      <sphereGeometry args={[0.2, 20, 20]} />
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
   RESPONSIVE SCALE WRAPPER
===================================================== */
function ResponsiveScale({ children }) {
  const { size } = useThree();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (size.width <= 468) {
      setScale(0.55); // 📱 very small devices
    } else if (size.width <= 768) {
      setScale(0.7); // 📱 tablets
    } else {
      setScale(1); // 🖥 desktop
    }
  }, [size.width]);

  return <group scale={scale}>{children}</group>;
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

      <directionalLight
        position={[6, 10, 6]}
        intensity={2.2}
        color="#ffffff"
      />

      <directionalLight
        position={[-6, -4, -6]}
        intensity={0.6}
        color="#7c3aed"
      />

      {/* ================= LOADER OBJECT ================= */}
      <ResponsiveScale>
        {/* INNER RING */}
        <FlatRing
          outerRadius={0.4}
          innerRadius={0.35}
          thickness={0.2}
          rotation={[Math.PI / 2.1, 0, 0]}
          speed={[0.45, 0.75, 0.1]}
        />

        {/* MIDDLE RING */}
        <FlatRing
          outerRadius={0.55}
          innerRadius={0.5}
          thickness={0.2}
          rotation={[0, Math.PI / 2.1, 0]}
          speed={[0.55, 0.95, 0.15]}
        />

        {/* OUTER RING */}
        <FlatRing
          outerRadius={0.70}
          innerRadius={0.65}
          thickness={0.2}
          rotation={[0, 0, 0]}
          speed={[0.95, 1.15, 0.2]}
        />

        {/* CENTER BALL */}
        <Core />
      </ResponsiveScale>

      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}

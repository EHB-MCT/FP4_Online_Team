import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function MovingPoints({ color, size, radius, detail }) {
  const pointsRef = useRef();
  const geometryRef = useRef();
  const [hovered, setHovered] = useState(false);
  const positionsRef = useRef([]);
  const timeRef = useRef(0);

  // Capture original vertex positions after mount
  useEffect(() => {
    if (!geometryRef.current) return;

    const posAttr = geometryRef.current.attributes.position;
    const positions = [];
    for (let i = 0; i < posAttr.count; i++) {
      positions.push([posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)]);
    }
    positionsRef.current = positions;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current || !geometryRef.current) return;

    const posAttr = geometryRef.current.attributes.position;
    timeRef.current += delta;

    for (let i = 0; i < posAttr.count; i++) {
      const orig = positionsRef.current[i];
      if (!orig) continue;

      const [ox, oy, oz] = orig;
      const noise = hovered ? 0.1 : 0;

      posAttr.setXYZ(
        i,
        ox + Math.sin(timeRef.current * 5 + i) * noise,
        oy + Math.cos(timeRef.current * 5 + i) * noise,
        oz + Math.sin(timeRef.current * 3 + i) * noise
      );
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points
      ref={pointsRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[radius, detail]} ref={geometryRef} />
      <pointsMaterial color={color} size={size} />
    </points>
  );
}

export const JarvisSphere = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={1.5} />
      <directionalLight intensity={2} position={[0, 5, 4]} />

      <MovingPoints color="yellow" size={0.05} radius={2} detail={10} />
      <MovingPoints color="blue" size={0.05} radius={1} detail={4} />
    </Canvas>
  );
};

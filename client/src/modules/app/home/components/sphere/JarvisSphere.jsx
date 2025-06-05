import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const DistortedPoints = ({ radius, detail, color, size, mouse }) => {
  const pointsRef = useRef();
  const geometryRef = useRef();

  // Original positions of vertices (to reset and distort)
  const originalPositions = useRef();

  useEffect(() => {
    if (geometryRef.current) {
      const posAttr = geometryRef.current.attributes.position;
      originalPositions.current = posAttr.array.slice();
    }
  }, []);

  useFrame(() => {
    if (!pointsRef.current || !geometryRef.current || !originalPositions.current) return;

    const posAttr = geometryRef.current.attributes.position;
    const positions = posAttr.array;

    // Simple distortion based on mouse X/Y
    for (let i = 0; i < positions.length; i += 3) {
      // original x,y,z
      const ox = originalPositions.current[i];
      const oy = originalPositions.current[i + 1];
      const oz = originalPositions.current[i + 2];

      // Distortion factors (adjust amplitude and frequency)
      positions[i] = ox + 0.2 * Math.sin(mouse.current.x * 10 + oy * 5);
      positions[i + 1] = oy + 0.2 * Math.cos(mouse.current.y * 10 + ox * 5);
      positions[i + 2] = oz + 0.2 * Math.sin(mouse.current.x * 5 + oz * 5);
    }

    posAttr.needsUpdate = true;

    // Also rotate the points cloud for extra effect
    pointsRef.current.rotation.y += 0.005 + mouse.current.x * 0.02;
    pointsRef.current.rotation.x += 0.005 + mouse.current.y * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <icosahedronGeometry ref={geometryRef} args={[radius, detail]} />
      <pointsMaterial color={color} size={size} />
    </points>
  );
};

export const JarvisSphere = () => {
  const mouse = useRef({ x: 0, y: 0 });

  // Track normalized mouse position (-1 to 1)
  const onMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <DistortedPoints radius={2} detail={10} color="yellow" size={0.05} mouse={mouse} />
      <DistortedPoints radius={1} detail={4} color="blue" size={0.05} mouse={mouse} />

      <ambientLight intensity={1.5} />
      <directionalLight intensity={2} position={[0, 5, 4]} />
    </Canvas>
  );
};

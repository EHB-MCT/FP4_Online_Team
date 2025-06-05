import { Canvas } from "@react-three/fiber";

export const JarvisSphere = () => {
  return (
    <Canvas>
      <points>
        <icosahedronGeometry args={[2, 10]} />
        <pointsMaterial color="yellow" size={0.05} />
      </points>

      <points>
        <icosahedronGeometry args={[1, 4]} />
        <pointsMaterial color="blue" size={0.05} />
      </points>

      <ambientLight intensity={1.5} />
      <directionalLight intensity={2} position={[0, 5, 4]} />
    </Canvas>
  );
};

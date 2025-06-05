import { Canvas } from "@react-three/fiber"

export const JarvisSphere = () => {
    return(
        <Canvas>
            <perspectiveCamera makedefault 
                position={[ 0, 2, 2]}
                rotation={[Math.PI * 0.1, 0, 0]}
            />
            <points>
                <icosahedronGeometry args={[2, 3]} />
                <pointsMaterial color={"yellow"} size={0.05}/>
            </points>



            <ambientLight intensity={1.5} />
            <directionalLight intensity={2} position={[ 0, 5, 4]} />
        </Canvas>


    )
}
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { useEffect } from "react";
import { useLoader } from "@react-three/fiber"

export const Model = ({ rotation }) => {
    const GLTF = useLoader(GLTFLoader, "/model/golden_mike.glb");

    useEffect(() => {
        GLTF.scene.traverse((child) => {
        if (child.isMesh && child.material) {
            child.material.color.set('gold');
        }
        });
    }, [GLTF]);


    return (
        <primitive
            object={GLTF.scene.clone()}
            scale={3}
            position={[0, 0, 0]}
            rotation={rotation}
        />
    )
}
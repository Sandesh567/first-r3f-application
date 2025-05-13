import { useFrame, extend } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls });

export default function Experience() {
  const cubeRef = useRef();
  //We can access the mesh with cuberef.current and update
  //it in the useFrame increment its rotation.y property in the useFrame
  const groupRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    groupRef.current.rotation.y += delta;
  });

  return (
    <>
      <group ref={groupRef}>
        {/* Creating Scenes */}
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        {/* Associating the useRef */}
        <mesh
          ref={cubeRef}
          rotation-y={[Math.PI * 0.25]}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshBasicMaterial color="purple" wireframe="false" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
    </>
  );
}

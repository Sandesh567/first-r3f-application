import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef();
  //We can access the mesh with cuberef.current and update
  //it in the useFrame increment its rotation.y property in the useFrame

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
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
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
    </>
  );
}

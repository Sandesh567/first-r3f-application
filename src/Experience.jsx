import { useThree, useFrame, extend } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject.jsx";
import { BoxGeometry } from "three";

extend({ OrbitControls });

export default function Experience() {
  const { camera, gl } = useThree();
  const cubeRef = useRef();
  //We can access the mesh with cuberef.current and update
  //it in the useFrame increment its rotation.y property in the useFrame
  const groupRef = useRef();

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);

    cubeRef.current.rotation.y += delta;
    groupRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      //lights
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        {/* Creating Scenes */}
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" wireframe="false" />
        </mesh>
        {/* Associating the useRef */}
        <mesh
          ref={cubeRef}
          rotation-y={[Math.PI * 0.25]}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="purple" wireframe="false" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
      {/* //Creating custom CustomObject */}
      <CustomObject />
    </>
  );
}

export default function Experience() {
  return (
    <>
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh rotation-y={[Math.PI * 0.25]} position-x={2} scale={1.5}>
        {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
        <boxGeometry />
        <meshBasicMaterial color="green" wireframe="false" />
      </mesh>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="blue" />
      </mesh>
    </>
  );
}

import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <Canvas >
    <Experience />
  </Canvas>
)


//Creating scene using r3f
{
  /* <mesh>
  <boxGeometry />
  <meshBasicMaterial color="red" />
</mesh>;

// Usual three for creating scene

const mesh = new THREE.Mesh();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasciMaterial({ color: red });
scene.add(mesh); */
}

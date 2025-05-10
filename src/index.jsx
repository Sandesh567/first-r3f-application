import { color } from "three/tsl";
import "./style.css";
import ReactDOM from "react-dom/client";
import { BoxGeometry } from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  </>
);

// Usual three for creating scene

const mesh = new THREE.Mesh();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasciMaterial({ color: red });
scene.add(mesh);

// Creating mesh in R3F

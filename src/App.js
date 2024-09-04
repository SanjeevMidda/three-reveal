import "./index.css";
import { OrbitControls, Environment } from "@react-three/drei";

function App() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <mesh scale={2.5}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default App;

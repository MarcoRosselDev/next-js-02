import Box from "./Box"
import { Canvas } from "@react-three/fiber"
import './canvas-css.css'
import Mono from "../mono/Mono"


function CanvasComponent() {

  return (
    <Canvas className="canvas-css">
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Mono position={[2,2,2]}/>
      {/* <mesh>
        <Box position={[2,2,2]}/>
        <meshStandardMaterial
          displacementScale={0.2}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh> */}

    </Canvas>
  )
}

export default CanvasComponent;
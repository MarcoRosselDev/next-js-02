import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useRef } from 'react'
import { useGLTF } from "@react-three/drei";

function Mono(props) {
  const meshRef = useRef()
/*   const obj = useLoader(OBJLoader, '/prueba.obj') */
  const { nodes, materials } = useGLTF("/prueba1.glb");
  //return <primitive object={obj}/>
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    'PavingStones092_1K_Color.jpg',
    'PavingStones092_1K_Displacement.jpg',
    'PavingStones092_1K_Normal.jpg',
    'PavingStones092_1K_Roughness.jpg',
    'PavingStones092_1K_AmbientOcclusion.jpg',
  ])
  return (
    <mesh
      {...props}
      ref={meshRef}>
      <boxGeometry args={[1,1,1]} />
{/*       <primitive object={obj} args={[1,1,1]} /> */}
      {/* <meshStandardMaterial
          color='hotpink'
          displacementScale={0}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        /> */}
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.a}
        material={materials["Material.001"]}
      />
    </mesh>
  )
  
}

export default Mono
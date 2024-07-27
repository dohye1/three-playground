import { useGLTF } from '@react-three/drei';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';

export default function Container() {
  return (
    <Canvas shadows camera={{ position: [10, 10, 10], fov: 20 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Duck position={[0, 0, 0]} />
    </Canvas>
  );
}

const Duck = (props: MeshProps) => {
  const gltf = useGLTF('/cute_little_duck/scene.gltf');

  useFrame((state) => {
    const mesh = gltf.scene.children[0];
    mesh.rotation.x = state.clock.getElapsedTime();
    mesh.rotation.y += 0.03;
    mesh.rotation.z += 0.01;
  });

  return (
    <primitive {...props} object={gltf.scene} scale={5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </primitive>
  );
};

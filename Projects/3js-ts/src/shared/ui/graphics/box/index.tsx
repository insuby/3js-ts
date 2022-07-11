import { memo, useRef } from "react";
import THREE from "three";

export const Box = memo(() => {
  console.log("box");
  const mesh = useRef<THREE.Mesh>(null!);
  // const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);
  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
});

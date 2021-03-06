import { extend, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

extend({ EffectComposer, ShaderPass, RenderPass, UnrealBloomPass });

export const Effects = () => {
  const composer = useRef<{
    render: () => void;
    setSize: (width: number, height: number) => void;
  }>();
  const { scene, gl, size, camera } = useThree();
  const aspect = useMemo(() => new THREE.Vector2(512, 512), []);

  useEffect(() => {
    composer.current?.setSize(size.width, size.height);
  }, [size]);
  useFrame(() => composer.current?.render(), 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      {/* <waterPass attachArray="passes" factor={1.5} /> */}
      <unrealBloomPass attachArray="passes" args={[aspect, 2, 1, 0]} />
    </effectComposer>
  );
};

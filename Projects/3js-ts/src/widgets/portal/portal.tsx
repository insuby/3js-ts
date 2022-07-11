// @ts-nocheck
import "./portal.scss";
import { Canvas } from "@react-three/fiber";
import { Suspense, useCallback, useRef } from "react";
import { Effects, Sparks, Text } from "shared/ui";
import * as THREE from "three";

export function Portal() {
  const mouse = useRef<number[]>([0, 0]);

  // @ts-ignore
  const onMouseMove = useCallback(({ clientX, clientY }) => {
    mouse.current = [
      clientX - window.innerWidth / 2,
      clientY - window.innerHeight / 2,
    ];
  }, []);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div className="portal">
      <Canvas
        pixelratio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onMouseMove={onMouseMove}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.Uncharted2ToneMapping;
          gl.setClearColor(new THREE.Color("#020207"));
        }}
      >
        <fog attach="fog" args={["white", 50, 190]} />
        <pointLight distance={100} intensity={4} color="white" />
        <Sparks mouse={mouse} count={20} colors={["lightblue"]} />
        <Effects />
      </Canvas>
    </div>
  );
}

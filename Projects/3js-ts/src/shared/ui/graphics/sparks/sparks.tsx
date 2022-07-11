// @ts-nocheck

import {extend, useFrame, useThree} from "@react-three/fiber";
import {useMemo, useRef} from "react";
import * as THREE from "three";
import * as meshline from "threejs-meshline";

extend(meshline);

const radius = 3;
    const count = 20;
    const color = "lightblue";

type Line = {
    curve: THREE.Vector3[];
    width: number;
    speed: number;
};

const r = () => {return Math.max(0.2, Math.random())};

const Fatline: Line = ({curve, width, speed}) => {
    const material = useRef();

    useFrame(() => {return (material?.current.uniforms.dashOffset.value -= speed)});

    return (
        <mesh>
            <meshLine attach="geometry" vertices={curve}/>
            <meshLineMaterial ref={material} transparent
                              depthTest={false} lineWidth={width}
                              color={color} opacity={Math.max(Math.random(), 8)}
                              dashArray={0.1} dashRatio={0.95}/>
        </mesh>
    );
}

export function Sparks({
                           mouse = [0, 0],
                       }) {
    const ref = useRef();

    const lines = useMemo(() => {return new Array(count).fill().map((_, index) => {
        const pos = new THREE.Vector3(
            Math.sin(0) * radius * r(),
            Math.cos(0) * radius * r(),
            0
        );
        const points = new Array(30).fill().map((_, index) => {
            const angle = (index / 20) * Math.PI * 2;
            return pos
                .add(
                    new THREE.Vector3(
                        Math.sin(angle) * radius * r(),
                        Math.cos(angle) * radius * r(),
                        0
                    )
                )
                .clone();
        });
        const curve = new THREE.CatmullRomCurve3(points).getPoints(2000);
        return {
            width: Math.max(0.1, (0.2 * index) / 10),
            speed: Math.max(0.001, 0.004 * Math.random()),
            curve,
        };
    })});

    const {size, viewport} = useThree();
    const aspect = size.width / viewport.width;

    useFrame(() => {
        if (ref.current) {
            let {x, y} = ref.current.rotation;
            x = THREE.MathUtils.lerp(x, mouse[1] / aspect / 200, 0.1);
            y = THREE.MathUtils.lerp(y, mouse[0] / aspect / 400, 0.1);
        }
    });

    return (
        <group ref={ref}>
            <group position={[-radius * 2, -radius, -10]} scale={[1, 1.3, 1]}>
                {lines.map((props, index) => {
                    return <Fatline key={index} {...props} />;
                })}
            </group>
        </group>
    );
}

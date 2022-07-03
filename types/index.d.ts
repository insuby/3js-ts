declare module "react-animated-number";
declare module "react-animated-text";
declare module "react-three-fiber";
declare module "lerp";

declare namespace JSX {
  interface IntrinsicElements {
    group: Record<string, unknown>;
    geometry: Record<string, unknown>;
    lineBasicMaterial: Record<string, unknown>;
    mesh: Record<string, unknown>;
    octahedronGeometry: Record<string, unknown>;
    meshBasicMaterial: Record<string, unknown>;
    effectComposer: Record<string, unknown>;
    renderPass: Record<string, unknown>;
    unrealBloomPass: Record<string, unknown>;
    waterPass: Record<string, unknown>;
    meshLine: Record<string, unknown>;
    meshLineMaterial: Record<string, unknown>;
  }
}

declare module "threejs-meshline" {
  type MeshLine = Record<string, unknown> & THREE.Mesh;
  type MeshLineMaterial = Record<string, unknown> & THREE.Material;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.mp4" {
  const content: string;
  export default content;
}

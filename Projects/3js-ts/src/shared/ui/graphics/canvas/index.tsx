import { Effects } from "../effects";
import "./index.scss";
import { Canvas as CanvasThreeFiber } from "@react-three/fiber";
import { FunctionComponent, ReactNode, memo } from "react";

export const Canvas: FunctionComponent<{ children: ReactNode }> = memo(
  ({ children }) => {
    // const mouse = useRef([0, 0]);
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
      <CanvasThreeFiber>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {children}
        <Effects />
      </CanvasThreeFiber>
    );
  }
);

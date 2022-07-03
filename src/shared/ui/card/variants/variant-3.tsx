import img from "../assets/images/variant-3.svg";
import { FunctionComponent, ReactNode } from "react";

export const Variant3: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => (
  <div
    className="card"
    style={{
      backgroundImage: `url(${img})`,
      width: 789,
      height: 551,
    }}
  >
    {children}
  </div>
);

import img from "../assets/images/variant-1.svg";
import { FunctionComponent, ReactNode } from "react";

export const Variant1: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => (
  <div className="card" style={{ backgroundImage: `url(${img})` }}>
    {children}
  </div>
);

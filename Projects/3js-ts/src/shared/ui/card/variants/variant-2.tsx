import img from "../assets/images/variant-2.svg";
import { FunctionComponent, ReactNode } from "react";

export const Variant2: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {children}
    </div>
  );
};

import img from "../assets/images/variant-3.svg";
import { FunctionComponent, ReactNode } from "react";


export const Variant3: FunctionComponent<{ children: ReactNode }> = ({
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

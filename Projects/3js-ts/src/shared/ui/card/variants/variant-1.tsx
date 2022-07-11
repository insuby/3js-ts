import img from "../assets/images/variant-1.svg";
import img2 from "../assets/images/variant-1-1.png";
import { FunctionComponent, ReactNode } from "react";
import {Size, useWindowSize} from "../../../lib/helpers/useWindowSize";

export const Variant1: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {

  const windowSize: Size = useWindowSize();

  if (!windowSize.width) return null

  return (
    <div className="card" style={{ backgroundImage: `${ windowSize.width > 390 ? `url(${img})` : `url(${img2})` }` }}>
      {children}
    </div>
  );
};

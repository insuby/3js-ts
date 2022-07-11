import "./card.scss";
import { Variant1, Variant2, Variant3 } from "./variants";
import { FunctionComponent, ReactNode } from "react";

export const Card: FunctionComponent<{
  children?: ReactNode;
  variant?: "1" | "2" | "3";
}> = ({ children, variant = "1" }) => {

  if (variant === "1") return <Variant1>{children}</Variant1>;
  if (variant === "2") return <Variant2>{children}</Variant2>;
  return <Variant3>{children}</Variant3>;
};

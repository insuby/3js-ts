import "./button.scss";
import { FunctionComponent, ReactNode } from "react";

export const ButtonBase: FunctionComponent<{
  theme: "light" | "dark";
  style?: { [key: string]: string | number };
  children?: ReactNode;
}> = ({ theme, children, style }) => {
  return (
    <div
      className="button__wrapper animate__animated animate__zoomIn"
      style={style}
    >
      <button
        type="button"
        className={`button button_${theme} animate__animated animate__zoomIn animate__delay-05s`}
      >
        {children}
      </button>
    </div>
  );
};

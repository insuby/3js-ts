import "./animated-number.scss";
import { FunctionComponent, useEffect, useState } from "react";
import ReactAnimatedNumber from "react-animated-number";

export const AnimatedNumber: FunctionComponent<{
  finalValue: number;
}> = ({ finalValue }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(finalValue);
  }, [finalValue]);

  return (
    <ReactAnimatedNumber
      value={value}
      style={{
        transition: "0.8s ease-out",
        fontSize: 48,
        color: "black",
        transitionProperty: "background-color, color, opacity",
      }}
      formatValue={Math.round}
      duration={1000}
    />
  );
};

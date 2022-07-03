import "./animated-text.scss";
import { FunctionComponent } from "react";
import { Wave } from "react-animated-text";

export const AnimatedText: FunctionComponent<{
  text: string;
  effect?: string;
  effectDirection?: string;
}> = ({ text, effect = "verticalFadeIn", effectDirection = "up" }) => (
  <Wave
    className="animated-text"
    text={text}
    effect={effect}
    effectDirection={effectDirection}
    animationDuration={1}
    iterations={1}
  />
);

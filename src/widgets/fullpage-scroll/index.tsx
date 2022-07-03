import "./index.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import { FunctionComponent, ReactNode, useEffect } from "react";

export const FullpageScroll: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    const watermarks = document.querySelectorAll(".fp-watermark");
    watermarks.forEach((mark) => mark.remove());
  });

  return (
    <ReactFullpage
      scrollingSpeed={1000} /* Options here */
      render={() => <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>}
    />
  );
};

import "./index.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import {
  FunctionComponent,
  LegacyRef,
  ReactNode,
  forwardRef,
  memo,
  useEffect,
} from "react";

// @ts-ignore
export const FullpageScroll: FunctionComponent<{
  children: ReactNode;
  onLeave: (props: { index: number }) => void;
  ref?: LegacyRef<ReactFullpage>;
}> = memo(
  forwardRef(({ children, onLeave }, ref) => {
    useEffect(() => {
      const watermarks = document.querySelectorAll(".fp-watermark");
      watermarks.forEach((mark) => {
        return mark.remove();
      });
    });

    return (
      <ReactFullpage
        ref={ref}
        fadingEffect
        scrollingSpeed={1000}
        resetSliders
        scrollHorizontally
        dragAndMove
        onLeave={onLeave}
        render={() => {
          return <ReactFullpage.Wrapper children={children} />;
        }}
      />
    );
  })
);

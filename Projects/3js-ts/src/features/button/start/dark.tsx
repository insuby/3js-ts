import { FunctionComponent } from "react";
import { Button } from "shared/ui";

export const ButtonDark: FunctionComponent<{
  style?: { [key: string]: string | number };
}> = ({ style }) => {
  return (
    // @ts-ignore
    <Button theme="dark" style={style}>
      start
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.64062 12.5398L12.6406 1.53979M12.6406 1.53979H1.64062M12.6406 1.53979V12.5398"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </Button>
  );
};

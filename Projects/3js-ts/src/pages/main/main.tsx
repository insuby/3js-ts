import "./index.scss";
import { ButtonDark, ButtonLight } from "features";
import { FunctionComponent, memo } from "react";
import { Section } from "shared/ui";

export const Main: FunctionComponent<{ name: string }> = memo(({ name }) => {
  return (
    <Section name={name}>
      <ButtonLight
        text="sign in"
        style={{
          position: "absolute",
          right: "2rem",
          top: "2rem",
        }}
      />

      <div className="main-page-grid">
        <div className="block block_left">
          <span className="block__span">INTRODUCING GET SET PLAY</span>
          <span>
            A complete <br /> ecosystem <br /> just for <br /> gamers
          </span>
        </div>

        <div className="block block_center">
          <span className="getsetplay">get</span>
          <span className="getsetplay">set</span>
          <span className="getsetplay">play</span>
        </div>

        <div className="block block_right">
          <span>
            For the World’s first DAO-powered <br />
            eSport and Streaming multiverse, the <br />
            stakes are high and that is why you <br />
            should get set to play!
          </span>
          <ButtonDark />
        </div>
      </div>
    </Section>
  );
});

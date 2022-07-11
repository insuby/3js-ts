import "./index.scss";
import { ButtonLight } from "features";
import { FunctionComponent, memo } from "react";
import { Card, Section } from "shared/ui";
import {Size, useWindowSize} from "../../shared/lib/helpers/useWindowSize";

export const About: FunctionComponent<{ name: string }> = memo(({ name }) => {

  const windowSize: Size = useWindowSize();

  if (!windowSize.width) return null

  return (
    <Section name={name}>
      { windowSize.width > 400 ? (<h2 className="section__title">about</h2>) : null }
      <Card variant="1">
        <p className="about-descr">
          Get set play is equipped with all of the infrastructures you need{" "}
          <br />
          for p2p streaming. As a haven for gamers of all types, it is also{" "}
          <br />
          the first decentralized p2p streaming platform. Gaming is <br />
          everything on the Get Set Play Multiverse; the multiverse is the{" "}
          <br />
          immerse space where it all happens.{" "}
        </p>
        <ButtonLight />
      </Card>
    </Section>
  );
});

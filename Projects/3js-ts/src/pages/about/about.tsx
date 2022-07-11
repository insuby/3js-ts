import "./index.scss";
import { ButtonLight } from "features";
import { FunctionComponent, memo } from "react";
import { Card, Section } from "shared/ui";

export const About: FunctionComponent<{ name: string }> = memo(({ name }) => {
  return (
    <Section name={name}>
      <h2 className="section__title">about</h2>
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

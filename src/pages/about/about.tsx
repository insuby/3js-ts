import "./index.scss";
import { ButtonLight } from "features";
import { Card, Section } from "shared/ui";
import video from '-!file-loader!./assets/about.mp4';

export const About = () => {
  return (
    <Section>
      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="wrapper">
        <h2 className="section__title">about</h2>
        <Card variant={"1"}>
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
      </div>
    </Section>
  );
};

import "./our-mission.scss";
import { ButtonLight } from "features";
import { FunctionComponent, memo } from "react";
import { Section } from "shared/ui";

const data = [
  {
    title: "Be the one-stop-shop for all things GameFi",
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan\n" +
      "          consequat a fringilla quis justo, sit dignissim.",
  },
  {
    title: "Support the gaming ecosystem and build it",
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan\n" +
      "          consequat a fringilla quis justo, sit dignissim.",
  },
  {
    title: "Build a robust Metaverse for players and streamers",
    desc:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan\n" +
      "          consequat a fringilla quis justo, sit dignissim.",
  },
];

export const OurMission: FunctionComponent = memo(() => {
  return (
    <Section title={"our mission"}>
      <div className="our-mission">
        {data.map(({ title, desc }, index) => {
          return (
            <div className="our-mission__card">
              <span
                className={`our-mission__icon our-mission__icon_${index + 1}`}
              ></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
      <ButtonLight />
    </Section>
  );
});

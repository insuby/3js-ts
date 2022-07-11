import "./how-it-works.scss";
import { ButtonLight } from "features";
import { FunctionComponent, memo } from "react";
import { fakeApi } from "shared/api";
import { Card, Section } from "shared/ui";

export const HowItWorks: FunctionComponent<{ name: string }> = memo(
  ({ name }) => {
    const { GAMES } = fakeApi;
    return (
      <Section name={name}>
        <div className="how-it-works__games__wrapper how-it-works__wrapper_games">
          {GAMES.map(({ id }) => {
            return <div className="how-it-works__game" key={id} />;
          })}
        </div>

        <div className="how-it-works__wrapper how-it-works__wrapper_notion">
          <div className="section__title">how it works</div>
          <Card variant="1">
            <p>
              Streamers and gamers alike will be able to enjoy the experience of
              the <br />
              multiverse and earn for that. This is the centerpiece of what
              GETSETPLAY <br /> is achieving.
            </p>
            <p>
              There are areas within the ecosystem that even celebrates the fans
              and
              <br />
              streamers. The eSport stadium allows for games to be watched, Fan
              <br />
              appreciation zones where the ardent fans are celebrated.
            </p>
            <p>
              With the token, holders can advance the goals of the GETSETPLAY
              DAO,
              <br />
              and vote on improvements and advances within the ecosystem.
            </p>
            <p>
              With community marketing and peer to peer NFT marketplace <br />
              marketing, the GETSETPLAY ecosystem is a complete end-to-end{" "}
              <br />
              interactive system within the Multiverse.
            </p>
          </Card>
          <ButtonLight />
        </div>
      </Section>
    );
  }
);

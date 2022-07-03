import "./index.scss";
import { ButtonLight } from "features";
import { FunctionComponent, memo } from "react";
import { Section } from "shared/ui";

const data = [
  {
    quater: "q2.2022",
    list: [
      "Seed and Private Backers and Partners Onboarding",
      "MVP- GSPArena P2P version - DAO based",
      "IDO launch of $GSP token",
      "Launch of GSP Staking Pools - Vote Escrow distribution model GSPMetaverse Initial prototyping",
    ],
  },
  {
    quater: "q3.2022",
    list: [
      "CEX listing of $GSP token",
      "Launch DAO app and snapshot spaces",
      "Audit of GSParena smart contracts",
      "GSPMetaverse architecture and development (Marketplace,Arena)",
      "Testnet launch-GSPArenav1-Dao based",
    ],
  },
  {
    quater: "q4.2022",
    list: [
      "Mainnet launch-GSPArenav1-Dao based",
      "Add support to top three games and 10 match templates on GSPArena",
      "Referral program for esports, teams, streamers, influencers, etc",
      "Testnet launch-GSPtreams dapp-P2P streaming with light-nodes",
      "GSPMetaverse Layer 1 Launch for Marketplace and Arena on Ethereum",
    ],
  },
  {
    quater: "q1.2023",
    list: [
      "Mainnet launch-GSPstreams dapp-P2P streaming with light-nodes",
      "Integration with top 3 distribution partners-in-game match oracles",
      "Onboarding top 10 popular games, 50 popular stramers/esport teams",
      "$GSP token buy back and burn program",
      "GSPMetaverse v2 development (Streamcenter, GSP Plaza)",
    ],
  },
  {
    quater: "q2.2023",
    list: [
      "Launch GSPArena v2-with automated in-game decision making",
      "Launch protocol revenue tracking dashboard",
      "Launch GSPArena v2-with automated in-game decision making",
      "GSP Metaverse v2 Launch",
    ],
  },
  {
    quater: "q3.2023",
    list: [
      "GSPstreams-guardian nodes launch",
      "Launch protocol on a 2-layer blockchain",
      "Launch 1st mass-scale GSParena tournament with prizes upto 1m usd in the GSPMetaverse",
    ],
  },
];

export const Roadmap: FunctionComponent = memo(() => {
  return (
    <Section>
      <div className="roadmap">
        <div className="roadmap__block">
          <h2>roadmap</h2>
          <p>
            Get set play is equipped with all of the <br /> infrastructures you
            need for p2p streaming. As a <br /> haven for gamers of all types,
            it is also the first <br /> decentralized p2p streaming platform.
          </p>
        </div>
        <div className="roadmap__block">
          {data.map(({ quater, list }, index, arr) => {
            return (
              <div className="roadmap__slide">
                <div
                  className={`roadmap__image roadmap__image_${index + 1}`}
                ></div>
                <h4>{quater}</h4>
                <ul>
                  {list.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
                {index + 1 === arr.length && <ButtonLight />}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

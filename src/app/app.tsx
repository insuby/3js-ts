import "./app.scss";
import { AboutPage } from "pages";
import { FunctionComponent } from "react";
import { FullpageScroll } from "widgets";

export const App: FunctionComponent = () => (
  <main>
    <FullpageScroll>
      {/*<MainPage />*/}
      <AboutPage />
      {/*<OurMissionPage />*/}
      {/*<HowItWorksPage />*/}
      {/*<PartnersPage />*/}
      {/*<MeetOurTeamPage />*/}
      {/*<RoadmapPage />*/}
    </FullpageScroll>
  </main>
);

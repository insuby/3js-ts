// @ts-nocheck
import './app.scss';
import { Frame } from 'features';
import { Pages } from 'pages';
import { FunctionComponent } from 'react';
import { FullpageScroll } from 'widgets';
import { AppContextWrapper } from './providers/app-context';

export const App: FunctionComponent = () => {
  return (
    <AppContextWrapper>
      <Frame />
      <FullpageScroll>
        <Pages.Main />
        <Pages.About />
        <Pages.OurMission />
        <Pages.HowItWorks />
        <Pages.Partners />
        <Pages.MeetOurTeam />
        <Pages.Roadmap />
      </FullpageScroll>
    </AppContextWrapper>
  );
};

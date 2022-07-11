import './app.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import { Frame } from 'features';
import { Pages } from 'pages';
import { createContext, FunctionComponent, useRef, useState } from 'react';
import { FullpageScroll } from 'widgets';

export const PageContext = createContext(0);

export const App: FunctionComponent = () => {
  const [page, setPage] = useState(0);
  const ref = useRef<ReactFullpage>(null);

  const onLeave = (props: { index: number }) => {
    console.log(props);
    setPage(props.index + 1);
    // @ts-ignore
    console.log(ref.current.fullpageApi.getActiveSection());
  };

  return (
    <>
      <Frame />
      <PageContext.Provider value={page}>
        <FullpageScroll onLeave={onLeave} ref={ref}>

          {/* <Pages.MainPage name={'main'} /> */}
          {/* <Pages.AboutPage name={'about'} /> */}
          {/* <Pages.OurMissionPage name={'our mission'} /> */}
          <Pages.HowItWorksPage name='how it works' />
          {/* <Pages.PartnersPage name={'partners'} /> */}
          {/* <Pages.MeetOurTeamPage name={'meet our team'} /> */}
          {/* <Pages.RoadmapPage name={'roadmap'} /> */}
        </FullpageScroll>
      </PageContext.Provider>
    </>
  );
};

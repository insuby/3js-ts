import './index.scss';
import ReactFullpage, { fullpageOptions } from '@fullpage/react-fullpage';
import { FunctionComponent, ReactNode, useEffect } from 'react';
import { PAGES_INFO, useAppContext } from '../../app/providers/app-context';

type FullpageScroll = FunctionComponent<fullpageOptions & ReactNode>

export const FullpageScroll: FullpageScroll = ({
// @ts-ignore
                                                 children,
                                               }) => {
  const { pageIndex, pageName } = useAppContext();
  const [index, setIndex] = pageIndex;
  const [__, setName] = pageName;

  useEffect(() => {
    const watermarks = document.querySelectorAll('.fp-watermark');
    watermarks.forEach((mark) => {
      return mark.remove();
    });
  });

  const onLeave = (props: { index: number }) => {
    console.log(props);
    // @ts-ignore
    const { name } = Object.values(PAGES_INFO)[index];
    // @ts-ignore
    setIndex(props.index);
    // @ts-ignore
    setName(name);
  };

  return (
    <ReactFullpage
      // ref={ref}
      scrollingSpeed={1000}
      resetSliders
      onLeave={onLeave}
      render={(props) => {
        console.log(props);
        return <ReactFullpage.Wrapper children={children} />;
      }}
    />
  );
};

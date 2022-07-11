// import video from '-!file-loader!pages/about/assets/about.mp4';
import "./section.scss";
import { FunctionComponent, ReactNode, useRef } from "react";

export const Section: FunctionComponent<{
  children: ReactNode;
  name: string;
}> = ({ children }) => {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <section className="section" id={`section_${name}`} ref={ref}>
      {/* {name === 'about' && ( */}
      {/*   <div className='section__video-wrapper'> */}
      {/*     <video autoPlay loop className='video animate__animated animate__zoomInDown ani animate__delay-05s'> */}
      {/*       <source src={video} type='video/mp4' /> */}
      {/*     </video> */}
      {/*   </div> */}
      {/* )} */}

      <div className="section__content-wrapper">
        {/* <Frame /> */}
        {children}
      </div>
    </section>
  );
};

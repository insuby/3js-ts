import { Ellipse } from './ellipse';
import './index.scss';
import { FunctionComponent } from 'react';
import { AnimatedLogo, Breadcrumb } from 'shared/ui';
import { useAppContext } from 'app/providers/app-context';

export const Frame: FunctionComponent = () => {
  const { pageIndex } = useAppContext();
  const index = pageIndex[0]

  return (
    <svg
      className={`frame-wrapper ${index !== 0 && index !== 7 ? 'active' : ''}`}
      width='100%'
      height='100%'
      viewBox='0 0 100% 756'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      // preserveAspectRatio="xMaxYMmin"
    >
      <path
        d='M64 4.5H409L414.5 10H531.5M657.5 6.5H730.5M840.5 6.5H959.5L965.5 0.5H1311L1332.5 22V43M1325 4L1350.5 29.5V86.5L1344.5 92.5V174L1373.5 203V256.5L1368 262V346.5M1368 444V528.5L1373.5 534V586.5L1344.5 615.5V697L1351.5 704V757M1311.5 785.5H966L960.5 780H840M531.5 780H415.5L410 785.5H64L42.5 764V745.5M24.5 31.5V87.5L30.5 93.5V174.5L1 204V257L6.5 262.5V346.5M6.5 445.5V528L1 533.5V588L30.5 617.5V697L24.5 703V756.5L52 784'
        stroke='#515151'
      />
      <g>
        <AnimatedLogo />
        <Breadcrumb />
        <svg
          y='70'
          x='140'
          width='171'
          height='17'
          viewBox='0 0 171 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path opacity='0.3' d='M0.5 0.5H156.5L170.5 16' stroke='white' />
        </svg>
      </g>
      <Ellipse x={633} y={739} />
    </svg>
  );
};

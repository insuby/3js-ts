import './index.scss';
import { FunctionComponent } from 'react';
import { useAppContext } from 'app/providers/app-context';

export const Breadcrumb: FunctionComponent = () => {
  const { pageName } = useAppContext();
  //@ts-ignore
  const name = pageName[0].replace('-', ' ');

  return (
    <text className='breadcrumb' width='50' height='30' x='140' y='55'>
      {/* @ts-ignore */}
      {name}
    </text>
  );
};

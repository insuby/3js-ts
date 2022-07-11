import { createContext, FunctionComponent, ReactNode, useContext, useState } from 'react';
import { PAGE, PAGES_NAMES } from 'shared/api';


type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;
type SetState<T> = Dispatch<SetStateAction<T>>

export const PAGES_INFO: Record<keyof typeof PAGES_NAMES, PAGE> = {
  main: { isActive: true, name: 'main' },
  about: { isActive: false, name: 'about' },
  'our-mission': { isActive: false, name: 'our-mission' },
  'how-it-works': { isActive: false, name: 'how-it-works' },
  partners: { isActive: false, name: 'partners' },
  'gsp-token': { isActive: false, name: 'gsp-token' },
  'meet-our-team': { isActive: false, name: 'meet-our-team' },
  advisors: { isActive: false, name: 'advisors' },
  roadmap: { isActive: false, name: 'roadmap' },
};

// @ts-ignore
export const AppContext = createContext<{
  [key: string]: [unknown, unknown]
}>({});

export const AppContextWrapper: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState(PAGES_INFO['main'].name);

  const contextValue: {
    pageIndex: [number, SetState<number>]
    pageName: [string, Dispatch<SetStateAction<keyof PAGES_NAMES>>]
  } = {
    pageIndex: [index, setIndex],
  // @ts-ignore
    pageName: [name, setName],
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => useContext(AppContext);

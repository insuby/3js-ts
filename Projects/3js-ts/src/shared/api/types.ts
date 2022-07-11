export enum PAGES_NAMES {
  'main',
  'about',
  'our-mission',
  'gsp-token',
  'how-it-works',
  'partners',
  'meet-our-team',
  'advisors',
  'roadmap'
}

export type PAGE = {
  name: keyof typeof PAGES_NAMES extends 'main' ? '' : keyof typeof PAGES_NAMES
  isActive: boolean
}

type USER = {
  id: number;
  name: string;
};

export type PARTNER = USER & {
  image: string;
};

export type GAME = Omit<PARTNER, 'name'>; // image === [name] in assets

export type TEAMMATE = PARTNER & {
  description: string;
  position: string;
  social: string;
};

export type ADVISOR = TEAMMATE;

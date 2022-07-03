export type PAGES =
  | "entry"
  | "gsp-token"
  | "how-it-works"
  | "about"
  | "meet-our-team"
  | "our-mission"
  | "roadmap"
  | "partners";

type USER = {
  id: number;
  name: string;
};

export type PARTNER = USER & {
  image: string;
};

export type TEAMMATE = PARTNER & {
  description: string;
  position: string;
  social: string;
};

export type ADVISOR = TEAMMATE;

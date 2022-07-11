export type PAGES =
  | ""
  | "gsp-token"
  | "how-it-works"
  | "about"
  | "meet-our-team"
  | "our-mission"
  | "roadmap"
  | "advisors"
  | "partners";

type USER = {
  id: number;
  name: string;
};

export type PARTNER = USER & {
  image: string;
};

export type GAME = Omit<PARTNER, "name">; // image === [name] in assets

export type TEAMMATE = PARTNER & {
  description: string;
  position: string;
  social: string;
};

export type ADVISOR = TEAMMATE;

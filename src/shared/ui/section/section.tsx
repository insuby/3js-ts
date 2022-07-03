import "./section.scss";
import { FunctionComponent, ReactNode } from "react";

export const Section: FunctionComponent<{
  children: ReactNode;
  title?: string;
}> = ({ children, title = "" }) => (
  <section className={`section `}>
    <h2 className="section__title">{title}</h2>
    {children}
  </section>
);

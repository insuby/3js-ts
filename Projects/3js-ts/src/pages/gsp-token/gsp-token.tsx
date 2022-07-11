import { Section } from "../../shared/ui";
import { FunctionComponent, memo } from "react";

export const GspToken: FunctionComponent<{ name: string }> = memo(
  ({ name }) => {
    return (
      <Section name={name}>
        <h2 className="section__title">gsp token</h2>
      </Section>
    );
  }
);

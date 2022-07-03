import "./partners.scss";
import { Partner } from "features";
import { FunctionComponent } from "react";
import { fakeApi } from "shared/api";
import { Section } from "shared/ui";

export const Partners: FunctionComponent = () => {
  const { PARTNERS } = fakeApi;

  return (
    <Section title="partners">
      <div className="partners__grid">
        {PARTNERS.map((props) => (
          <Partner {...props} key={props.id} />
        ))}
      </div>
    </Section>
  );
};

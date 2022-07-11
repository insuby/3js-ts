import "./partners.scss";
import { FunctionComponent, memo } from "react";
import { fakeApi } from "shared/api";
import { Card, Section } from "shared/ui";

export const Partners: FunctionComponent<{ name: string }> = memo(
  ({ name }) => {
    const { PARTNERS } = fakeApi;

    console.log(name, name);
    return (
      <Section name={name}>
        <h2 className="section__title">partners</h2>
        <div className="partners__grid">
          {PARTNERS.map(({ name }) => {
            return (
              <Card variant="2" key={name}>
                <span className={`partner partner-${name}`} />
              </Card>
            );
          })}
        </div>
      </Section>
    );
  }
);

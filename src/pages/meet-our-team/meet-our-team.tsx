import "./index.scss";
import type { FunctionComponent } from "react";
import { fakeApi } from "shared/api";
import { Section } from "shared/ui";

export const MeetOurTeam: FunctionComponent = () => {
  const { TEAM, ADVISORS } = fakeApi;

  return (
    <Section>
      {[TEAM, ADVISORS].map((el, slideIndex) => {
        return (
          <div className="slide" key={`slide_${slideIndex}`}>
            <div className="team">
              {el.map(
                ({ description, name, image, position, social }, index) => {
                  return (
                    <div className="teammate" key={`${name}_${index}`}>
                      {!(index % 2) && (
                        <div className="teammate__short">
                          <div></div>
                          <div>
                            <span
                              className={`rect rect_${
                                slideIndex === 1 ? "pink" : "blue"
                              }`}
                            ></span>
                            <p className="teammate__name">{name}</p>
                            <p className="teammate__position">{position}</p>
                          </div>
                        </div>
                      )}

                      <div className={`teammate__block teammate_${image}`}>
                        <div className="teammate__social">
                          <a href={social}>
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 35 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0H35V35H8.96341L0 25.1829V0Z"
                                fill="white"
                              />
                              <path
                                d="M23.8896 10H11.1074C10.4951 10 10 10.4834 10 11.0811V23.916C10 24.5137 10.4951 25 11.1074 25H23.8896C24.502 25 25 24.5137 25 23.9189V11.0811C25 10.4834 24.502 10 23.8896 10ZM14.4502 22.7822H12.2236V15.6221H14.4502V22.7822ZM13.3369 14.6465C12.6221 14.6465 12.0449 14.0693 12.0449 13.3574C12.0449 12.6455 12.6221 12.0684 13.3369 12.0684C14.0488 12.0684 14.626 12.6455 14.626 13.3574C14.626 14.0664 14.0488 14.6465 13.3369 14.6465ZM22.7822 22.7822H20.5586V19.3018C20.5586 18.4727 20.5439 17.4033 19.4014 17.4033C18.2441 17.4033 18.0684 18.3086 18.0684 19.2432V22.7822H15.8477V15.6221H17.9805V16.6006H18.0098C18.3057 16.0381 19.0322 15.4434 20.1133 15.4434C22.3662 15.4434 22.7822 16.9258 22.7822 18.8535V22.7822Z"
                                fill="#6174FF"
                              />
                            </svg>
                          </a>
                        </div>
                        <div className="teammate__desc">
                          <span></span>
                          <span>{description}</span>
                        </div>
                      </div>

                      {!!(index % 2) && (
                        <div className="teammate__short">
                          <div></div>
                          <div>
                            <span
                              className={`rect rect_${
                                slideIndex === 1 ? "pink" : "blue"
                              }`}
                            ></span>
                            <p className="teammate__name">{name}</p>
                            <p className="teammate__position">{position}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </Section>
  );
};

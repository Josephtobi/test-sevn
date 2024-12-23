import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import BenefitItems from "./BenefitItems";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.offerContentWrapper, className].join(" ")}>
      <div className={styles.offerContent}>
        <div className={styles.offerDivider}>
          <div className={styles.separator} />
        </div>
        <div className={styles.offerTitle}>
          <h1 className={styles.whatWeOffer}>What We Offer</h1>
        </div>
        <div className={styles.offerDetails}>
          <div className={styles.opportunitiesContainer}>
            <div className={styles.opportunitiesWrapper}>
              <div className={styles.opportunitiesRow}>
                <div className={styles.opportunitiesColumn}>
                  <div className={styles.opportunityButton}>
                    <div className={styles.exploreOpportunities}>
                      Explore Opportunities
                    </div>
                  </div>
                  <img
                    className={styles.icroundArrowRightIcon}
                    loading="lazy"
                    alt=""
                    src="/icroundarrowright.svg"
                  />
                </div>
              </div>
              <div className={styles.cultureContainer}>
                <div className={styles.cultureDivider} />
                <h1 className={styles.ourCulture}>Our Culture</h1>
                <h2 className={styles.atSevnContainer}>
                  <span>
                    <span>{`At SEVN `}</span>
                    <span className={styles.span}>|</span>
                    <span>
                      {" "}
                      BYTES, we believe in creating a workplace where innovation
                      thrives, ideas flourish, and careers grow. Our team is:
                    </span>
                  </span>
                </h2>
              </div>
              <div className={styles.cultureDivider} />
            </div>
            <div className={styles.benefitsContainer}>
              <div className={styles.benefitsWrapper}>
                <div className={styles.benefitsGrid}>
                  <BenefitItems
                    innovativeProjects="Innovative Projects"
                    workOnCuttingEdgeTechnologies="Work on cutting-edge technologies with global impact."
                  />
                  <BenefitItems
                    benefitItemsFlex="1"
                    innovativeProjects="Collaborative Culture"
                    workOnCuttingEdgeTechnologies="A supportive, diverse team where your ideas matter."
                  />
                  <BenefitItems
                    benefitItemsFlex="unset"
                    innovativeProjects="Competitive Benefits"
                    workOnCuttingEdgeTechnologies="Health insurance, performance bonuses, and more."
                  />
                </div>
              </div>
              <div className={styles.growthGrid}>
                <div className={styles.growthItems}>
                  <div className={styles.placeholderParent}>
                    <div className={styles.placeholder}>
                      <img
                        className={styles.streamlinedecentWorkAndEcoIcon}
                        loading="lazy"
                        alt=""
                        src="/streamlinedecentworkandeconomicgrowth.svg"
                      />
                    </div>
                    <h2 className={styles.careerGrowth}>Career Growth</h2>
                    <div className={styles.weInvestIn}>
                      We invest in your professional development through
                      mentorship, learning opportunities, and clear pathways to
                      leadership
                    </div>
                  </div>
                </div>
                <div className={styles.growthItems1}>
                  <div className={styles.placeholderParent}>
                    <div className={styles.placeholder}>
                      <img
                        className={styles.streamlinedecentWorkAndEcoIcon}
                        loading="lazy"
                        alt=""
                        src="/streamlinedecentworkandeconomicgrowth.svg"
                      />
                    </div>
                    <h2 className={styles.flexibleWorkEnvironment}>
                      Flexible Work Environment
                    </h2>
                    <div className={styles.balanceYourLife}>
                      Balance your life and work with hybrid and remote options.
                    </div>
                  </div>
                </div>
                <h1 className={styles.ambitious}>Ambitious</h1>
                <h1 className={styles.ambitious}>Collaborative</h1>
                <h1 className={styles.ambitious}>Purpose-Driven</h1>
                <h1 className={styles.ambitious}>Future-Focused</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lookingForContentParent}>
          <div className={styles.lookingForContent}>
            <div className={styles.lookingForWrapper}>
              <h1 className={styles.whatWeOffer}>{`Who We’re Looking For `}</h1>
            </div>
            <div className={styles.qualifications}>
              <div className={styles.qualificationsList}>
                <h2 className={styles.areYouACreativeContainer}>
                  <p className={styles.areYou}>Are you:</p>
                  <p className={styles.areYou}>✅ A creative problem-solver?</p>
                  <p className={styles.areYou}>
                    ✅ Passionate about technology and innovation?
                  </p>
                  <p className={styles.areYou}>✅ Eager to make an impact?</p>
                </h2>
              </div>
              <h2 className={styles.whetherYoureADeveloperDeContainer}>
                <span>Whether you’re a </span>
                <span className={styles.developerDesigner}>
                  developer, designer
                </span>
                <span>,</span>
                <span className={styles.developerDesigner}> data expert</span>
                <span>, or </span>
                <span className={styles.developerDesigner}>strategist</span>
                <span>, we have a place for you.</span>
              </h2>
            </div>
            <div className={styles.processDividerParent}>
              <div className={styles.cultureDivider} />
              <h1 className={styles.ourHiringProcess}>Our Hiring Process</h1>
            </div>
          </div>
          <div className={styles.placeholderShape}>
            <img
              className={styles.placeholderShapeChild}
              loading="lazy"
              alt=""
              src="/rectangle-5965@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;

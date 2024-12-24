import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import SolutionsApproachIcons from "./SolutionsApproachIcons";
import SolutionsApproachIcons1 from "./SolutionsApproachIcons1";
import styles from "./Why.module.css";

export type WhyType = {
  className?: string;
};

const Why: FunctionComponent<WhyType> = ({ className = "" }) => {
  return (
    <div className={[styles.why, className].join(" ")}>
      <div className={styles.whyContent}>
        <div className={styles.whyTitle}>
          <div className={styles.whyHeading}>
            <h1 className={styles.whySevnContainer}>
              <span>{`Why SEVN `}</span>
              <span className={styles.span}>|</span>
              <span> BYTES?</span>
            </h1>
            <div className={styles.whyDescription}>
              <h3 className={styles.acrossAllIndustries}>
                Across all industries, SevnBytes delivers
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.solutionsApproach}>
          <SolutionsApproachIcons />
          <SolutionsApproachIcons1 />
          <SolutionsApproachIcons />
        </div>
        <div className={styles.partnership}>
          <div className={styles.partnershipContent}>
            <div className={styles.partnershipCall}>
              <div className={styles.partnerWithUs}>
                Partner With Us to Transform Your Industry
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
      </div>
    </div>
  );
};

export default Why;

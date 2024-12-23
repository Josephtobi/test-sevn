import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./FrameComponent21.module.css";

export type FrameComponent21Type = {
  className?: string;
};

const FrameComponent21: FunctionComponent<FrameComponent21Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.whyChooseColumnWrapper, className].join(" ")}>
      <div className={styles.whyChooseColumn}>
        <div className={styles.whyChooseHeader}>
          <div className={styles.whyChooseTitle}>
            <div className={styles.whyChooseTitleChild} />
            <h1 className={styles.whyChooseSevnbytes}>
              Why Choose SevnBytes for Risk Advisory?
            </h1>
          </div>
        </div>
        <div className={styles.solutionsColumnsParent}>
          <div className={styles.solutionsColumns}>
            <img
              className={styles.mynauishieldPlusIcon}
              loading="lazy"
              alt=""
              src="/mynauishieldplus.svg"
            />
            <div className={styles.solutionItems}>
              <h2 className={styles.proactiveRiskSolutions}>
                Proactive Risk Solutions
              </h2>
              <div className={styles.anticipateChallengesBefore}>
                Anticipate challenges before they escalate.
              </div>
            </div>
          </div>
          <div className={styles.solutionsColumns}>
            <img
              className={styles.mynauishieldPlusIcon}
              loading="lazy"
              alt=""
              src="/majesticonssettingscogcheckline.svg"
            />
            <div className={styles.solutionItems}>
              <h2 className={styles.proactiveRiskSolutions}>
                Industry Expertise
              </h2>
              <div className={styles.insightsTailoredTo}>
                {" "}
                Insights tailored to your sector’s unique risks.
              </div>
            </div>
          </div>
          <div className={styles.solutionsColumns}>
            <img
              className={styles.mynauishieldPlusIcon}
              loading="lazy"
              alt=""
              src="/solargraphuplinear.svg"
            />
            <div className={styles.solutionItems}>
              <h2 className={styles.proactiveRiskSolutions}>
                Actionable Results
              </h2>
              <div className={styles.practicalStrategiesThat}>
                Practical strategies that mitigate risk while enabling growth.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secureColumnWrapper}>
          <div className={styles.secureColumn}>
            <div className={styles.secureButton}>
              <div className={styles.secureYourBusiness}>
                Secure Your Business Today
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

export default FrameComponent21;

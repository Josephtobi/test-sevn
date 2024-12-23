import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import BenefitsGridItem from "./BenefitsGridItem";
import styles from "./FrameComponent14.module.css";

export type FrameComponent14Type = {
  className?: string;
};

const FrameComponent14: FunctionComponent<FrameComponent14Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.whyPartnerWithSevnBytesParent}>
        <h1 className={styles.whyPartnerWithContainer}>
          <span className={styles.whyPartnerWithContainer1}>
            <span>{`Why Partner with SEVN `}</span>
            <span className={styles.span}>|</span>
            <span> BYTES</span>
          </span>
        </h1>
        <div className={styles.frameContainer}>
          <div className={styles.benefitsGridItemParent}>
            <div className={styles.benefitsGridItem}>
              <img
                className={styles.ridiamondLineIcon}
                loading="lazy"
                alt=""
                src="/ridiamondline.svg"
              />
              <div className={styles.innovativeProjectsParent}>
                <h2 className={styles.innovativeProjects}>
                  Innovative Projects
                </h2>
                <div className={styles.workOnCuttingEdge}>
                  Work on cutting-edge technologies with global impact.
                </div>
              </div>
            </div>
            <BenefitsGridItem
              hugeiconsnanoTechnology="/hugeiconsnanotechnology.svg"
              tailoredTechnology="Tailored Technology"
              ourHumanCentricScalableSolutio="Our human-centric, scalable solutions are crafted to meet your unique needs."
            />
            <BenefitsGridItem
              hugeiconsnanoTechnology="/mdicheckall.svg"
              tailoredTechnology="Proven Expertise"
              ourHumanCentricScalableSolutio="With deep industry knowledge and cutting-edge technology, we deliver results that matter."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent14;

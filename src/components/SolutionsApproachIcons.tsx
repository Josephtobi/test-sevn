import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./SolutionsApproachIcons.module.css";

export type SolutionsApproachIconsType = {
  className?: string;
};

const SolutionsApproachIcons: FunctionComponent<SolutionsApproachIconsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.solutionsApproachIcons, className].join(" ")}>
      <img
        className={styles.phhandFistLightIcon}
        loading="lazy"
        alt=""
        src="/phhandfistlight.svg"
      />
      <div className={styles.solutionsApproachDescription}>
        <h2 className={styles.tailoredSolutions}>Tailored Solutions</h2>
        <div className={styles.designedToSolve}>
          Designed to solve unique challenges and drive measurable results.
        </div>
      </div>
    </div>
  );
};

export default SolutionsApproachIcons;

import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./SolutionsApproachIcons1.module.css";

export type SolutionsApproachIcons1Type = {
  className?: string;
};

const SolutionsApproachIcons1: FunctionComponent<
  SolutionsApproachIcons1Type
> = ({ className = "" }) => {
  return (
    <div className={[styles.solutionsApproachIcons, className].join(" ")}>
      <img
        className={styles.clarityatomSolidIcon}
        loading="lazy"
        alt=""
        src="/clarityatomsolid.svg"
      />
      <div className={styles.cuttingEdgeTechnologyParent}>
        <h2 className={styles.cuttingEdgeTechnology}>
          Cutting-Edge Technology
        </h2>
        <div className={styles.poweredByAi}>
          Powered by AI, automation, and intuitive design.
        </div>
      </div>
    </div>
  );
};

export default SolutionsApproachIcons1;

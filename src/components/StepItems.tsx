import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./StepItems.module.css";

export type StepItemsType = {
  className?: string;
  sifactCheckLine?: string;
  apply?: string;
  shareYourResumeAndTellUsWhat?: string;
};

const StepItems: FunctionComponent<StepItemsType> = ({
  className = "",
  sifactCheckLine,
  apply,
  shareYourResumeAndTellUsWhat,
}) => {
  return (
    <div className={[styles.stepItems, className].join(" ")}>
      <img
        className={styles.sifactCheckLineIcon}
        loading="lazy"
        alt=""
        src={sifactCheckLine}
      />
      <div className={styles.stepDetails}>
        <h2 className={styles.apply}>{apply}</h2>
        <div className={styles.shareYourResume}>
          {shareYourResumeAndTellUsWhat}
        </div>
      </div>
    </div>
  );
};

export default StepItems;

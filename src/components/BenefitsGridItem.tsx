import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./BenefitsGridItem.module.css";

export type BenefitsGridItemType = {
  className?: string;
  hugeiconsnanoTechnology?: string;
  tailoredTechnology?: string;
  ourHumanCentricScalableSolutio?: string;
};

const BenefitsGridItem: FunctionComponent<BenefitsGridItemType> = ({
  className = "",
  hugeiconsnanoTechnology,
  tailoredTechnology,
  ourHumanCentricScalableSolutio,
}) => {
  return (
    <div className={[styles.benefitsGridItem, className].join(" ")}>
      <img
        className={styles.hugeiconsnanoTechnology}
        loading="lazy"
        alt=""
        src={hugeiconsnanoTechnology}
      />
      <div className={styles.tailoredTechnologyParent}>
        <h2 className={styles.tailoredTechnology}>{tailoredTechnology}</h2>
        <div className={styles.ourHumanCentricScalable}>
          {ourHumanCentricScalableSolutio}
        </div>
      </div>
    </div>
  );
};

export default BenefitsGridItem;

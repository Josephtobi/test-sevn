import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Button2WAnimation.module.css";

export type Button2WAnimationType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Button2WAnimation: FunctionComponent<Button2WAnimationType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.exploreRiskParent, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.exploreRisk}>Connect With Us Today</div>
      <img className={styles.icroundArrowRightIcon} loading="lazy" alt="" />
    </div>
  );
};

export default Button2WAnimation;

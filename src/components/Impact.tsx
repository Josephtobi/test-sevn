import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Impact.module.css";

export type ImpactType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Impact: FunctionComponent<ImpactType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.impact1, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.component61Icon}
        loading="lazy"
        alt=""
        src="/component-61-1.svg"
      />
      <h2 className={styles.impact}>Impact</h2>
    </div>
  );
};

export default Impact;

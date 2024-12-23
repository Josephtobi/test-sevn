import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Integrity.module.css";

export type IntegrityType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Integrity: FunctionComponent<IntegrityType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.integrity1, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.component61Icon}
        loading="lazy"
        alt=""
        src="/component-61.svg"
      />
      <h2 className={styles.integrity}>Integrity</h2>
    </div>
  );
};

export default Integrity;

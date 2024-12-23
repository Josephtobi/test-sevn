import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Sustainability.module.css";

export type SustainabilityType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Sustainability: FunctionComponent<SustainabilityType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.sustainability1, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.component61Icon}
        loading="lazy"
        alt=""
        src="/component-61-2.svg"
      />
      <h2 className={styles.sustainability}>Sustainability</h2>
    </div>
  );
};

export default Sustainability;

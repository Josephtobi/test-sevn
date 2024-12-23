import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Empowerment.module.css";

export type EmpowermentType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Empowerment: FunctionComponent<EmpowermentType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.empowerment1, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.component61Icon}
        loading="lazy"
        alt=""
        src="/component-61-3.svg"
      />
      <h2 className={styles.empowerment}>Empowerment</h2>
    </div>
  );
};

export default Empowerment;

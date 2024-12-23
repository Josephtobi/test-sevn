import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Innovation.module.css";

export type InnovationType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Innovation: FunctionComponent<InnovationType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.innovation1, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.streamlineindustryInnovationIcon}
        loading="lazy"
        alt=""
        src="/streamlineindustryinnovationandinfrastructuresolid.svg"
      />
      <h2 className={styles.innovation}>Innovation</h2>
    </div>
  );
};

export default Innovation;

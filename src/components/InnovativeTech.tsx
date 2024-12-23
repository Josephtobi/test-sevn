import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./InnovativeTech.module.css";

export type InnovativeTechType = {
  className?: string;
  grommetIconstechnology?: string;
  leadershipInInnovation?: string;
  atTheForefrontOfRedefining?: string;
};

const InnovativeTech: FunctionComponent<InnovativeTechType> = ({
  className = "",
  grommetIconstechnology,
  leadershipInInnovation,
  atTheForefrontOfRedefining,
}) => {
  return (
    <div className={[styles.innovativeTech, className].join(" ")}>
      <div className={styles.edgeCard}>
        <img
          className={styles.grommetIconstechnology}
          loading="lazy"
          alt=""
          src={grommetIconstechnology}
        />
      </div>
      <h1 className={styles.leadershipInInnovation}>
        {leadershipInInnovation}
      </h1>
      <div className={styles.atTheForefront}>{atTheForefrontOfRedefining}</div>
    </div>
  );
};

export default InnovativeTech;

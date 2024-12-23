import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import InnovativeTech from "./InnovativeTech";
import styles from "./EdgeCards.module.css";

export type EdgeCardsType = {
  className?: string;
};

const EdgeCards: FunctionComponent<EdgeCardsType> = ({ className = "" }) => {
  return (
    <div className={[styles.edgeCards, className].join(" ")}>
      <div className={styles.sevnbytesEdgeCards}>
        <InnovativeTech
          grommetIconstechnology="/grommeticonstechnology.svg"
          leadershipInInnovation="Leadership in Innovation"
          atTheForefrontOfRedefining="At the forefront of redefining industries, we ensure our partners stay ahead of the curve"
        />
        <div className={styles.innovativeTech}>
          <div className={styles.ciwavyCheckWrapper}>
            <img
              className={styles.ciwavyCheckIcon}
              loading="lazy"
              alt=""
              src="/ciwavycheck.svg"
            />
          </div>
          <h1 className={styles.humanCentricDesign}>Human-Centric Design</h1>
          <div className={styles.technologyBuiltTo}>
            Technology built to empower people and inspire change.
          </div>
        </div>
        <InnovativeTech
          grommetIconstechnology="/streamlinedecentworkandeconomicgrowth.svg"
          leadershipInInnovation="Unmatched Scalability"
          atTheForefrontOfRedefining="Our solutions evolve alongside your goals, delivering sustained value across sectors."
        />
      </div>
    </div>
  );
};

export default EdgeCards;

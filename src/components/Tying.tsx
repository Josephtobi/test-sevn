import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Tying.module.css";

export type TyingType = {
  className?: string;
};

const Tying: FunctionComponent<TyingType> = ({ className = "" }) => {
  return (
    <div className={[styles.tying, className].join(" ")}>
      <div className={styles.tyingContent}>
        <div className={styles.tyingTitle}>
          <h1 className={styles.tyingItAll}>Tying It All Together</h1>
        </div>
        <div className={styles.withBoldForwardThinkingContainer}>
          <p className={styles.withBoldForwardThinkingSo}>
            <span className={styles.withBoldForwardThinking}>
              With bold, forward-thinking solutions for 
            </span>
            <span className={styles.retail}>Retail,</span>
            <span className={styles.withBoldForwardThinking}>{` `}</span>
            <span className={styles.retail}>Health,</span>
            <span className={styles.withBoldForwardThinking}>{` `}</span>
            <span className={styles.retail}>
              Energy, Finance, Logistics, Education, Agriculture,
              Government, and Defense
            </span>
            <span className={styles.withBoldForwardThinking}>{`, SEVN `}</span>
            <span className={styles.retail}>|</span>
            <span>
              {" "}
              BYTES Technologies is committed to shaping a world where
              technology empowers industries, transforms lives, and drives
              progress.
            </span>
          </p>
          <p className={styles.withBoldForwardThinkingSo}>&nbsp;</p>
          <p className={styles.withBoldForwardThinkingSo}>
            Let’s create the future, together.
          </p>
        </div>
        <div className={styles.partner}>
          <div className={styles.partnerContent}>
            <div className={styles.partnerCall}>
              <div className={styles.partnerWithUs}>Partner with Us</div>
            </div>
            <img
              className={styles.icroundArrowRightIcon}
              loading="lazy"
              alt=""
              src="/icroundarrowright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tying;

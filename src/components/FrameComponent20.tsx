import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./FrameComponent20.module.css";

export type FrameComponent20Type = {
  className?: string;
};

const FrameComponent20: FunctionComponent<FrameComponent20Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.solutionsInner, className].join(" ")}>
      <div className={styles.theFutureIsFilledWithPossParent}>
        <h1 className={styles.theFutureIsContainer}>
          <span>The future is filled with possibilities. With </span>
          <span className={styles.mediciq}>MedicIQ</span>
          <span>, </span>
          <span className={styles.mediciq}>JanusPayroll</span>
          <span>, </span>
          <span className={styles.mediciq}>PayMe</span>
          <span>, and </span>
          <span className={styles.mediciq}>MediMove</span>
          <span>{`, SEVN `}</span>
          <span className={styles.mediciq}>|</span>
          <span>
            {" "}
            BYTES is delivering solutions that will redefine industries and
            shape a better, connected tomorrow.
          </span>
        </h1>
        <h3 className={styles.letsUnlockThe}>
          Let’s unlock the potential of innovation together
        </h3>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.getInTouchToLearnMoreWrapper}>
              <div className={styles.getInTouch}>
                Get in Touch to Learn More
              </div>
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
    </section>
  );
};

export default FrameComponent20;

import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./FrameComponent17.module.css";

export type FrameComponent17Type = {
  className?: string;
};

const FrameComponent17: FunctionComponent<FrameComponent17Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.solutionsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.ourSolutionsParent}>
            <h1 className={styles.ourSolutions}>Our Solutions</h1>
            <div className={styles.innovatingTodayForABetterWrapper}>
              <div className={styles.innovatingTodayFor}>
                Innovating Today for a Better Tomorrow
              </div>
            </div>
          </div>
        </div>
        <div className={styles.atSevnBytesContainer}>
          <p className={styles.atSevnBytesTechnologies}>
            <span className={styles.at}>At </span>
            <span className={styles.sevn}>SEVN</span>
            <span className={styles.at}>{` `}</span>
            <span className={styles.span1}>|</span>
            <span className={styles.at}>{` `}</span>
            <span className={styles.sevn}>BYTES</span>
            <span className={styles.reshapeBusinessesStreamline}>{` `}</span>
            <span className={styles.sevn}>Technologies</span>
            <span>
              , we’re crafting groundbreaking solutions that solve real-world
              challenges, empower industries, and transform lives. With
              confidence, innovation, and purpose at our core, we are developing
              tools that will 
            </span>
            <span className={styles.reshapeBusinessesStreamline}>
              reshape businesses, streamline processes, and drive sustainable
              growth
            </span>
            <span> across critical sectors.</span>
          </p>
          <p className={styles.atSevnBytesTechnologies}>&nbsp;</p>
          <p className={styles.atSevnBytesTechnologies}>
            <span>We don’t just talk about the future—we’re </span>
            <span className={styles.reshapeBusinessesStreamline}>
              building it
            </span>
            <span className={styles.at}>, one solution at a time.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent17;

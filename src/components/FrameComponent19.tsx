import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./FrameComponent19.module.css";

export type FrameComponent19Type = {
  className?: string;
};

const FrameComponent19: FunctionComponent<FrameComponent19Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.solutionsInner, className].join(" ")}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.joinUsOnTheJourneyParent}>
              <h1 className={styles.joinUsOn}>Join Us on the Journey</h1>
              <div className={styles.wereNotJustBuildingProducWrapper}>
                <div className={styles.wereNotJustContainer}>
                  <span className={styles.wereNotJustContainer1}>
                    <span>{`We’re not just building products—we’re building the future. At SEVN `}</span>
                    <span className={styles.span}>|</span>
                    <span>
                      {" "}
                      BYTES, every innovation starts with a commitment to
                      solving challenges, creating opportunities, and driving
                      progress.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.partnerWithUsWrapper}>
              <div className={styles.partnerWithUs}>{`Partner with Us `}</div>
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

export default FrameComponent19;

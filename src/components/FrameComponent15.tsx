import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./FrameComponent15.module.css";

export type FrameComponent15Type = {
  className?: string;
};

const FrameComponent15: FunctionComponent<FrameComponent15Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.theFutureStartsHereWrapper}>
            <h1 className={styles.theFutureStarts}>The Future Starts Here</h1>
          </div>
          <div className={styles.atSevnContainer}>
            <span>{`At SEVN `}</span>
            <span className={styles.span}>|</span>
            <span>
              {" "}
              BYTES, every conversation is an opportunity to innovate,
              collaborate, and grow. Your journey to transformation starts
              now—let’s take that first step together
            </span>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <input
              className={styles.frameChild}
              placeholder="Start the Conversation"
              type="text"
            />
            <img
              className={styles.icroundArrowRightIcon}
              alt=""
              src="/icroundarrowright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent15;

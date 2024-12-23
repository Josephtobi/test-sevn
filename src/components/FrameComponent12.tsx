import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./FrameComponent12.module.css";

export type FrameComponent12Type = {
  className?: string;
};

const FrameComponent12: FunctionComponent<FrameComponent12Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.contactUsParent}>
            <h1 className={styles.contactUs}>Contact Us</h1>
            <div className={styles.letsBuildTheFutureTogetheWrapper}>
              <div className={styles.letsBuildThe}>
                Let’s Build the Future Together
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.heroImageIcon}
          loading="lazy"
          alt=""
          src="/14-1@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent12;

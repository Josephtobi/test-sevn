import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.letsBuildTomorrowTogetherParent}>
          <h1 className={styles.letsBuildTomorrow}>
            Let’s Build Tomorrow, Together.
          </h1>
          <div className={styles.subtitle}>
            <div className={styles.bePartOf}>
              Be part of the journey. Let’s turn ideas into innovation and
              possibilities into progress.
            </div>
          </div>
        </div>
        <div className={styles.action}>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonContent}>
              <div className={styles.exploreCareersAt}>
                Explore Careers at SevnBytes
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
    </div>
  );
};

export default Content;

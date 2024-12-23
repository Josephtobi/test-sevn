import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./FrameComponent13.module.css";

export type FrameComponent13Type = {
  className?: string;
};

const FrameComponent13: FunctionComponent<FrameComponent13Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.lineWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.atSevnbytesTechnologiesWeParent}>
          <div className={styles.atSevnbytesTechnologiesWe}>
            At SevnBytes Technologies, we’re driven by innovation, purpose, and
            a passion for solving real-world challenges. Whether you’re looking
            to collaborate, explore our solutions, or discuss how we can help
            you transform your industry—we’d love to hear from you.
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.frameChild} />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.innovationImageParent}>
            <img
              className={styles.innovationImageIcon}
              loading="lazy"
              alt=""
              src="/rectangle-5988@2x.png"
            />
            <div className={styles.yourIdeasQuestionsAndGoaWrapper}>
              <div className={styles.yourIdeasQuestions}>
                Your ideas, questions, and goals inspire us to innovate. Let’s
                create something extraordinary together.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;

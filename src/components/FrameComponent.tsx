import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import NavigateRisks from "./NavigateRisks";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <h1 className={styles.innovateStrategizeSecureContainer}>
          <span>{`Innovate, Strategize, `}</span>
          <span className={styles.secure}>Secure.</span>
        </h1>
      </div>
      <div className={styles.advisoryContent}>
        <div className={styles.edgeContent}>
          <div className={styles.advisoryCard}>
            <div className={styles.advisoryImage}>
              <img
                className={styles.background3EzgifcomResizeIcon}
                loading="lazy"
                alt=""
                src="/background3ezgifcomresize@2x.png"
              />
              <h1 className={styles.advisory}>Advisory</h1>
            </div>
            <div className={styles.edgeDescription}>
              <div className={styles.frameChild} />
              <h1 className={styles.theSevnContainer}>
                <span>{`The SEVN `}</span>
                <span className={styles.span}>|</span>
                <span>{` BYTES `}</span>
                <span className={styles.span}>Edge</span>
              </h1>
            </div>
          </div>
          <div className={styles.expertAdvisory}>
            <div className={styles.advisoryDescription}>
              <div className={styles.atSevnContainer}>
                <span>{`At SEVN `}</span>
                <span className={styles.span}>|</span>
                <span>
                  {" "}
                  BYTES, we provide expert advisory services to help businesses
                  innovate with cutting-edge technology, strategize for growth,
                  and secure their future by managing risks effectively.
                </span>
              </div>
              <NavigateRisks
                heading2ScaleDataEngine="Risk"
                navigateRisksWithConfidence="Navigate Risks with Confidence"
              />
              <NavigateRisks
                navigationButtonWidth="290px"
                heading2ScaleDataEngine="Business"
                heading2Width="192px"
                navigationTitleMarginTop="unset"
                navigateRiskTitleMinWidth="unset"
                navigateRisksWithConfidence="Unlock Your Business Potential"
              />
              <NavigateRisks
                navigationButtonWidth="314px"
                heading2ScaleDataEngine="Technology"
                heading2Width="214px"
                navigationTitleMarginTop="unset"
                navigateRiskTitleMinWidth="169px"
                navigateRisksWithConfidence="Innovate for Tomorrow’s Challenge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;

import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./NavigateRisks.module.css";

export type NavigateRisksType = {
  className?: string;
  heading2ScaleDataEngine?: string;
  navigateRisksWithConfidence?: string;

  /** Style props */
  navigationButtonWidth?: CSSProperties["width"];
  heading2Width?: CSSProperties["width"];
  navigationTitleMarginTop?: CSSProperties["marginTop"];
  navigateRiskTitleMinWidth?: CSSProperties["minWidth"];
};

const NavigateRisks: FunctionComponent<NavigateRisksType> = ({
  className = "",
  navigationButtonWidth,
  heading2ScaleDataEngine,
  heading2Width,
  navigationTitleMarginTop,
  navigateRiskTitleMinWidth,
  navigateRisksWithConfidence,
}) => {
  const navigationButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: navigationButtonWidth,
    };
  }, [navigationButtonWidth]);

  const heading21Style: CSSProperties = useMemo(() => {
    return {
      width: heading2Width,
    };
  }, [heading2Width]);

  const navigationTitleStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: navigationTitleMarginTop,
    };
  }, [navigationTitleMarginTop]);

  const navigateRiskTitleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: navigateRiskTitleMinWidth,
    };
  }, [navigateRiskTitleMinWidth]);

  return (
    <div className={[styles.navigateRisks, className].join(" ")}>
      <div className={styles.navigationButton} style={navigationButtonStyle}>
        <h1 className={styles.heading2} style={heading21Style}>
          {heading2ScaleDataEngine}
        </h1>
        <div className={styles.navigationTitle} style={navigationTitleStyle}>
          <div
            className={styles.navigateRiskTitle}
            style={navigateRiskTitleStyle}
          >
            <div className={styles.navigateRisksWith}>
              {navigateRisksWithConfidence}
            </div>
          </div>
          <img
            className={styles.icroundArrowRightIcon}
            loading="lazy"
            alt=""
            src="/icroundarrowright-4.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigateRisks;

import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./JanusCard.module.css";

export type JanusCardType = {
  className?: string;
  iconoirmoneySquareSolid?: string;
  simplifyingPayrollEmpowering?: string;
  heading2ScaleDataEngine?: string;
  janusPayrollIsOurInnovative?: string;
  learnMore?: string;

  /** Style props */
  janusCardMinWidth?: CSSProperties["minWidth"];
  heading2Width?: CSSProperties["width"];
  janusPayrollIsOurWidth?: CSSProperties["width"];
  solutionButtonsJustifyContent?: CSSProperties["justifyContent"];
  solutionButtonsWidth?: CSSProperties["width"];
  learnMoreTextDecoration?: CSSProperties["textDecoration"];
  learnMoreMinWidth?: CSSProperties["minWidth"];
};

const JanusCard: FunctionComponent<JanusCardType> = ({
  className = "",
  janusCardMinWidth,
  iconoirmoneySquareSolid,
  simplifyingPayrollEmpowering,
  heading2ScaleDataEngine,
  heading2Width,
  janusPayrollIsOurInnovative,
  janusPayrollIsOurWidth,
  solutionButtonsJustifyContent,
  solutionButtonsWidth,
  learnMore,
  learnMoreTextDecoration,
  learnMoreMinWidth,
}) => {
  const janusCardStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: janusCardMinWidth,
    };
  }, [janusCardMinWidth]);

  const heading2Style: CSSProperties = useMemo(() => {
    return {
      width: heading2Width,
    };
  }, [heading2Width]);

  const janusPayrollIsOurStyle: CSSProperties = useMemo(() => {
    return {
      width: janusPayrollIsOurWidth,
    };
  }, [janusPayrollIsOurWidth]);

  const solutionButtonsStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: solutionButtonsJustifyContent,
      width: solutionButtonsWidth,
    };
  }, [solutionButtonsJustifyContent, solutionButtonsWidth]);

  const learnMoreStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: learnMoreTextDecoration,
      minWidth: learnMoreMinWidth,
    };
  }, [learnMoreTextDecoration, learnMoreMinWidth]);

  return (
    <div
      className={[styles.janusCard, className].join(" ")}
      style={janusCardStyle}
    >
      <div className={styles.solutionIcons}>
        <img
          className={styles.iconoirmoneySquareSolid}
          loading="lazy"
          alt=""
          src={iconoirmoneySquareSolid}
        />
        <div className={styles.solutionSubtitles}>
          <div className={styles.simplifyingPayrollEmpowerin}>
            {simplifyingPayrollEmpowering}
          </div>
        </div>
      </div>
      <h1 className={styles.heading2} style={heading2Style}>
        {heading2ScaleDataEngine}
      </h1>
      <div className={styles.januspayrollIsOur} style={janusPayrollIsOurStyle}>
        {janusPayrollIsOurInnovative}
      </div>
      <div className={styles.solutionButtons} style={solutionButtonsStyle}>
        <div className={styles.solutionButtonLabels}>
          <a className={styles.learnMore} style={learnMoreStyle}>
            {learnMore}
          </a>
        </div>
        <img
          className={styles.iconoirmoneySquareSolid}
          loading="lazy"
          alt=""
          src="/icroundarrowright.svg"
        />
      </div>
    </div>
  );
};

export default JanusCard;

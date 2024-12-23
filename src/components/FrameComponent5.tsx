import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
  whySEVN?: string;
  bYTES?: string;

  /** Style props */
  frameBoxAlignSelf?: CSSProperties["alignSelf"];
  frameBoxJustifyContent?: CSSProperties["justifyContent"];
  frameBoxWidth?: CSSProperties["width"];
  frameBoxFlex?: CSSProperties["flex"];
  frameBoxWidth1?: CSSProperties["width"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
  frameBoxAlignSelf,
  frameBoxJustifyContent,
  frameBoxWidth,
  frameBoxFlex,
  frameBoxWidth1,
  whySEVN,
  bYTES,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameBoxAlignSelf,
      justifyContent: frameBoxJustifyContent,
      width: frameBoxWidth,
    };
  }, [frameBoxAlignSelf, frameBoxJustifyContent, frameBoxWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: frameBoxFlex,
      width: frameBoxWidth1,
    };
  }, [frameBoxFlex, frameBoxWidth1]);

  return (
    <div
      className={[styles.frameWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.lineParent} style={frameDiv1Style}>
        <div className={styles.frameChild} />
        <h1 className={styles.whySevnContainer}>
          <span>{whySEVN}</span>
          <span className={styles.span}>|</span>
          <span>{bYTES}</span>
        </h1>
      </div>
    </div>
  );
};

export default FrameComponent5;

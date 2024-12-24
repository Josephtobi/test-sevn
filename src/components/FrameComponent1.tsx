import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;

  /** Style props */
  frameDivHeight?: CSSProperties["height"];
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  rectangleHeaderHeight?: CSSProperties["height"];
  rectangleHeaderBottom?: CSSProperties["bottom"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  frameDivHeight,
  frameDivPosition,
  frameDivTop,
  rectangleHeaderHeight,
  rectangleHeaderBottom,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      height: frameDivHeight,
      position: frameDivPosition,
      top: frameDivTop,
    };
  }, [frameDivHeight, frameDivPosition, frameDivTop]);

  const rectangleHeaderStyle: CSSProperties = useMemo(() => {
    return {
      height: rectangleHeaderHeight,
      bottom: rectangleHeaderBottom,
    };
  }, [rectangleHeaderHeight, rectangleHeaderBottom]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDiv3Style}
    >
      <header className={styles.frameChild} style={rectangleHeaderStyle} />
      <div className={styles.component87Wrapper}>
        <img
          className={styles.component87Icon}
          loading="lazy"
          alt=""
          src="/component-87@2x.png"
        />
      </div>
      <div className={styles.companyResources}>
        <div className={styles.companyParent}>
          <a className={styles.company}>Company</a>
          <a className={styles.products}>Products</a>
          <a className={styles.resources}>Resources</a>
        </div>
      </div>
      <button className={styles.contact}>
        <a className={styles.contactUs}>Contact Us</a>
      </button>
    </div>
  );
};

export default FrameComponent1;
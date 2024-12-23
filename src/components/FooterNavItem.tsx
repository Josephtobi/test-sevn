import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box } from "@mui/material";
import styles from "./FooterNavItem.module.css";

export type FooterNavItemType = {
  className?: string;
  janusHR?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  component51Width?: CSSProperties["width"];
  component51Height?: CSSProperties["height"];
  component51AlignItems?: CSSProperties["alignItems"];
  component51Padding?: CSSProperties["padding"];
  janusHRWidth?: CSSProperties["width"];
  janusHRTextDecoration?: CSSProperties["textDecoration"];
  janusHRMarginBottom?: CSSProperties["marginBottom"];
};

const FooterNavItem: FunctionComponent<FooterNavItemType> = ({
  className = "",
  property1 = "JanusHR",
  component51Width,
  component51Height,
  component51AlignItems,
  component51Padding,
  janusHR,
  janusHRWidth,
  janusHRTextDecoration,
  janusHRMarginBottom,
}) => {
  const component51Style: CSSProperties = useMemo(() => {
    return {
      width: component51Width,
      height: component51Height,
      alignItems: component51AlignItems,
      padding: component51Padding,
    };
  }, [
    component51Width,
    component51Height,
    component51AlignItems,
    component51Padding,
  ]);

  const janusHRStyle: CSSProperties = useMemo(() => {
    return {
      width: janusHRWidth,
      textDecoration: janusHRTextDecoration,
      marginBottom: janusHRMarginBottom,
    };
  }, [janusHRWidth, janusHRTextDecoration, janusHRMarginBottom]);

  return (
    <div
      className={[styles.component51, className].join(" ")}
      data-property1={property1}
      style={component51Style}
    >
      <div className={styles.janushr} style={janusHRStyle}>
        {janusHR}
      </div>
    </div>
  );
};

export default FooterNavItem;

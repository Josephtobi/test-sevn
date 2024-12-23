import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Component1.module.css";

export type Component1Type = {
  className?: string;
  integrityTransparency?: string;
  integrityIsAtTheCoreOfEveryth?: string;

  /** Style props */
  component84BoxShadow?: CSSProperties["boxShadow"];
};

const Component1: FunctionComponent<Component1Type> = ({
  className = "",
  component84BoxShadow,
  integrityTransparency,
  integrityIsAtTheCoreOfEveryth,
}) => {
  const component84Style: CSSProperties = useMemo(() => {
    return {
      boxShadow: component84BoxShadow,
    };
  }, [component84BoxShadow]);

  return (
    <div
      className={[styles.component84, className].join(" ")}
      style={component84Style}
    >
      <div className={styles.integrityTransparencyWrapper}>
        <h3 className={styles.integrityTransparency}>
          {integrityTransparency}
        </h3>
      </div>
      <div className={styles.integrityIsAt}>
        {integrityIsAtTheCoreOfEveryth}
      </div>
    </div>
  );
};

export default Component1;

import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <header className={styles.frameChild} />
      <div className={styles.component87Wrapper}>
        <img
          className={styles.component87Icon}
          loading="lazy"
          alt=""
          src="/component-87@2x.png"
        />
      </div>
      <div className={styles.companyResourcesWrapper}>
        <div className={styles.companyResources}>
          <a className={styles.company}>Company</a>
          <a className={styles.products}>Products</a>
          <a className={styles.resources}>Resources</a>
        </div>
      </div>
      <div className={styles.contactUsWrapper}>
        <a className={styles.contactUs}>Contact Us</a>
      </div>
    </div>
  );
};

export default FrameComponent4;

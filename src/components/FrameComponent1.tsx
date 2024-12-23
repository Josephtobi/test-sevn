import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
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

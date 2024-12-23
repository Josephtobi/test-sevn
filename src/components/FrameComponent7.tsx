import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import Innovation from "./Innovation";
import Integrity from "./Integrity";
import Impact from "./Impact";
import Sustainability from "./Sustainability";
import Empowerment from "./Empowerment";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.aboutUsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.visionParent}>
                  <h1 className={styles.vision}>Vision</h1>
                  <h2 className={styles.toBuildA}>
                    To build a world where software is simple, accessible, and
                    transformative, driving innovation and progress across all
                    sectors
                  </h2>
                </div>
                <div className={styles.slicedCubeAbstractShapeWrapper}>
                  <img
                    className={styles.slicedCubeAbstractShape}
                    loading="lazy"
                    alt=""
                    src="/sliced-cube-abstract-shape@2x.png"
                  />
                </div>
                <div className={styles.lineGroup}>
                  <div className={styles.frameChild} />
                  <h1 className={styles.ourValues}>Our Values</h1>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.dAbstractShape8Wrapper}>
                <img
                  className={styles.dAbstractShape8}
                  loading="lazy"
                  alt=""
                  src="/3d-abstract-shape-8@2x.png"
                />
              </div>
              <div className={styles.lineContainer}>
                <div className={styles.frameChild} />
                <h1 className={styles.ourValues}>Mission</h1>
              </div>
              <h2 className={styles.atSevnContainer}>
                <span>
                  <span>{`At SEVN `}</span>
                  <span className={styles.span}>|</span>
                  <span>
                    {" "}
                    BYTES, we are committed to delivering intuitive, scalable,
                    and human-centered software solutions that solve challenges,
                    uplift lives, and enable meaningful growth.
                  </span>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.valuesGridWrapper}>
          <div className={styles.valuesGrid}>
            <Innovation property1="Default" />
            <Integrity property1="Default" />
            <Impact property1="Default" />
            <Sustainability property1="Default" />
            <Empowerment property1="Default" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;

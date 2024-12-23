import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import Hero from "./Hero";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.heroContainerWrapper, className].join(" ")}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroInstance}>
            <Hero property1="Variant8" />
          </div>
          <h1 className={styles.shapingTheFuture}>Shaping the future</h1>
        </div>
        <div className={styles.intuitiveTransformative}>
          <div className={styles.weCreateSimpleContainer}>
            <span className={styles.weCreateSimpleContainer1}>
              <span>
                <span
                  className={styles.weCreateSimple}
                >{`We create simple, intuitive, and transformative solutions that drive innovation, empower businesses, and inspire growth. At `}</span>
                <span className={styles.sevn}>{`SEVN `}</span>
              </span>
              <span className={styles.span}>|</span>
              <span>
                <span className={styles.sevn}> BYTES</span>
                <span className={styles.weCreateSimple}>
                  , we bridge gaps, break barriers, and redefine what's possible
                  with technology.
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className={styles.heroCTA}>
          <div className={styles.heroCtaButton}>
            <input
              className={styles.learnMoreButton}
              placeholder="Learn more"
              type="text"
            />
            <img
              className={styles.icroundArrowRightIcon}
              alt=""
              src="/icroundarrowright.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;

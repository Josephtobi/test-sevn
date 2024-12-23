import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import Component1 from "./Component1";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.shapingTomorrowContentWrapper, className].join(" ")}
    >
      <div className={styles.shapingTomorrowContent}>
        <div className={styles.shapingTomorrowHeader}>
          <div className={styles.shapingTomorrowHeaderChild} />
          <h1 className={styles.shapingTomorrowTodayContainer}>
            <span className={styles.shapingTomorrowTodayContainer1}>
              <span>{`Shaping Tomorrow, `}</span>
              <span className={styles.today}>Today</span>
            </span>
          </h1>
          <div className={styles.shapingTomorrowDescriptionC}>
            <div className={styles.ourJourneyIs}>
              Our journey is built on values that empower industries, inspire
              trust, and drive meaningful impact. As we innovate, these
              principles guide everything we do.
            </div>
          </div>
        </div>
        <div className={styles.shapingTomorrowCards}>
          <div className={styles.shapingTomrrowCard}>
            <div className={styles.component83}>
              <div className={styles.shapingTomorrowCardHeader}>
                <h3 className={styles.empowerment}>Empowerment</h3>
              </div>
              <div className={styles.atSevnContainer}>
                <span>{`At SEVN `}</span>
                <span className={styles.span}>{`| `}</span>
                <span>
                  BYTES, we believe in creating tools and solutions that empower
                  businesses, communities, and individuals to overcome
                  challenges and unlock their full potential
                </span>
              </div>
            </div>
            <Component1
              integrityTransparency={`Integrity & Transparency`}
              integrityIsAtTheCoreOfEveryth="Integrity is at the core of everything we build. From technology to partnerships, we prioritize transparency and trust to foster long-lasting relationships."
            />
            <Component1
              component84BoxShadow="4px 6px 4px rgba(203, 78, 40, 0.25)"
              integrityTransparency="Impact"
              integrityIsAtTheCoreOfEveryth="Our mission is to create solutions that make a meaningful difference—whether it’s transforming industries, empowering businesses, or improving lives."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;

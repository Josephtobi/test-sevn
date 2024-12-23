import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import ScaleDataEngine from "../components/ScaleDataEngine";
import FrameComponent from "../components/FrameComponent";
import EdgeCards from "../components/EdgeCards";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import Solutions from "../components/Solutions";
import styles from "./Landing.module.css";

const Landing: FunctionComponent = () => {
  return (
    <div className={styles.landing}>
      <section className={styles.header}>
        <img
          className={styles.backgroundEzgifcomResize1Icon}
          alt=""
          src="/backgroundezgifcomresize-1@2x.png"
        />
        <h1 className={styles.transforming}>{`Transforming `}</h1>
      </section>
      <FrameComponent1 />
      <FrameComponent2 />
      <section className={styles.insightsContainerWrapper}>
        <div className={styles.insightsContainer}>
          <div className={styles.insightsContainerChild} />
          <h1 className={styles.strategicInsightsSustainablContainer}>
            <span>{`Strategic Insights. Sustainable `}</span>
            <span className={styles.growth}>Growth</span>
          </h1>
        </div>
      </section>
      <section className={styles.sevnBytesCommitment}>
        <div className={styles.commitmentContainer}>
          <img
            className={styles.background2EzgifcomVideoToIcon}
            loading="lazy"
            alt=""
            src="/background2ezgifcomvideotogifconverter-1@2x.png"
          />
          <div className={styles.atSevnContainer}>
            <span className={styles.atSevnContainer1}>
              <span>{`At SEVN `}</span>
              <span className={styles.span}>|</span>
              <span>
                {" "}
                BYTES, we’re committed to advancing industries that shape our
                world. Through scalable and human-centered solutions, we empower
                critical sectors such as Finance, Agriculture, Retail,
                Logistics, and more. With every tool we create, we aim to solve
                challenges, drive innovation, and build a foundation for
                sustainable growth.
              </span>
            </span>
          </div>
        </div>
      </section>
      <div className={styles.cubeFrame} />
      <ScaleDataEngine />
      <section className={styles.advisoryContainerWrapper}>
        <div className={styles.advisoryContainer}>
          <FrameComponent />
          <EdgeCards />
        </div>
      </section>
      <div className={styles.adviisoryE1} />
      <FrameComponent3 />
      <Footer />
      <Solutions />
      <div className={styles.landingChild} />
    </div>
  );
};

export default Landing;

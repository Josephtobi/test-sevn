import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Hero: FunctionComponent<HeroType> = ({
  className = "",
  property1 = "Variant8",
}) => {
  return (
    <div
      className={[styles.hero, className].join(" ")}
      data-property1={property1}
    >
      <h1 className={styles.retail}>Retail</h1>
    </div>
  );
};

export default Hero;

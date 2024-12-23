import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./BenefitItems.module.css";

export type BenefitItemsType = {
  className?: string;
  innovativeProjects?: string;
  workOnCuttingEdgeTechnologies?: string;

  /** Style props */
  benefitItemsFlex?: CSSProperties["flex"];
};

const BenefitItems: FunctionComponent<BenefitItemsType> = ({
  className = "",
  benefitItemsFlex,
  innovativeProjects,
  workOnCuttingEdgeTechnologies,
}) => {
  const benefitItemsStyle: CSSProperties = useMemo(() => {
    return {
      flex: benefitItemsFlex,
    };
  }, [benefitItemsFlex]);

  return (
    <div
      className={[styles.benefitItems, className].join(" ")}
      style={benefitItemsStyle}
    >
      <div className={styles.streamlinedecentWorkAndEcoWrapper}>
        <img
          className={styles.streamlinedecentWorkAndEcoIcon}
          loading="lazy"
          alt=""
          src="/streamlinedecentworkandeconomicgrowth.svg"
        />
      </div>
      <h2 className={styles.innovativeProjects}>{innovativeProjects}</h2>
      <div className={styles.workOnCuttingEdge}>
        {workOnCuttingEdgeTechnologies}
      </div>
    </div>
  );
};

export default BenefitItems;

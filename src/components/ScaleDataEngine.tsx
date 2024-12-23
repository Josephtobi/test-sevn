import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import JanusCard from "./JanusCard";
import styles from "./ScaleDataEngine.module.css";

export type ScaleDataEngineType = {
  className?: string;
};

const ScaleDataEngine: FunctionComponent<ScaleDataEngineType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.scaleDataEngine, className].join(" ")}>
      <div className={styles.engineContainer}>
        <div className={styles.engineContainerChild} />
        <div className={styles.engineContent}>
          <div className={styles.engineHeading}>
            <div className={styles.scaleDataEngineTitle}>
              <div className={styles.headingContainer}>
                <h1 className={styles.heading2}>Discover</h1>
                <div className={styles.tablerarrowDownDashedWrapper}>
                  <img
                    className={styles.tablerarrowDownDashedIcon}
                    loading="lazy"
                    alt=""
                    src="/tablerarrowdowndashed@2x.png"
                  />
                </div>
              </div>
              <div className={styles.engineDescription}>
                <div className={styles.descriptionContainer}>
                  <div className={styles.ourTeamIs}>
                    Our team is hard at work developing innovative platforms to
                    tackle challenges in sectors like Health, Education,
                    Finance, Agriculture, and beyond. Here’s a glimpse of what’s
                    on the horizon:
                  </div>
                  <div className={styles.tablerarrowDownDashedContainer}>
                    <img
                      className={styles.tablerarrowDownDashedIcon1}
                      loading="lazy"
                      alt=""
                      src="/tablerarrowdowndashed-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.solutionsCards}>
              <JanusCard
                iconoirmoneySquareSolid="/iconoirmoneysquaresolid.svg"
                simplifyingPayrollEmpowering="Simplifying Payroll, Empowering Businesses"
                heading2ScaleDataEngine="JanusPayroll"
                janusPayrollIsOurInnovative="JanusPayroll is our innovative payroll solution designed to automate, streamline, and transform how businesses manage employee payments."
                learnMore="Learn more"
              />
              <JanusCard
                janusCardMinWidth="491px"
                iconoirmoneySquareSolid="/fluentpayment20filled1.svg"
                simplifyingPayrollEmpowering="Redefining Payments for a Connected World"
                heading2ScaleDataEngine="PayMe"
                heading2Width="412px"
                janusPayrollIsOurInnovative="PayMe is an advanced payment orchestration solution designed to make financial transactions secure, flexible, and seamless. "
                janusPayrollIsOurWidth="411px"
                solutionButtonsJustifyContent="space-between"
                solutionButtonsWidth="153px"
                learnMore="Explore"
                learnMoreTextDecoration="unset"
                learnMoreMinWidth="58px"
              />
            </div>
          </div>
          <div className={styles.medicIqCard}>
            <div className={styles.mediciqCard}>
              <div className={styles.mediciqCardChild} />
              <div className={styles.medicIqIcon}>
                <img
                  className={styles.materialSymbolsLightmedicatIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolslightmedication.svg"
                />
                <div className={styles.medicIqTitle}>
                  <div className={styles.transformingHealthcareManage}>
                    Transforming Healthcare Management
                  </div>
                </div>
              </div>
              <div className={styles.scaleDataEngine1}>
                <h1 className={styles.heading21}>MedicIQ</h1>
              </div>
              <div className={styles.medicIqDescription}>
                <div className={styles.descriptionContainer1}>
                  <div className={styles.mediciqIsThe}>
                    MedicIQ is the future of smart healthcare
                    management—connecting patients, providers, and
                    administrators like never before. Designed to address
                    accessibility and workflow challenges.
                  </div>
                  <div className={styles.buttonContainerParent}>
                    <div className={styles.buttonContainer}>
                      <div className={styles.discoverHow}>Discover how</div>
                    </div>
                    <img
                      className={styles.icroundArrowRightIcon}
                      loading="lazy"
                      alt=""
                      src="/icroundarrowright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleDataEngine;
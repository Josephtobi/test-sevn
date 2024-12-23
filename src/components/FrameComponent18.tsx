import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./FrameComponent18.module.css";

export type FrameComponent18Type = {
  className?: string;
};

const FrameComponent18: FunctionComponent<FrameComponent18Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.solutionsInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <h1 className={styles.ourCurrentInnovations}>
            Our Current Innovations in Progress
          </h1>
        </div>
        <div className={styles.healthcareWrapper}>
          <div className={styles.healthcare}>
            <div className={styles.management}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <div className={styles.materialSymbolsLightmedicatParent}>
                  <div className={styles.materialSymbolsLightmedicat}>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.transformingHealthcareManageWrapper}>
                    <div className={styles.transformingHealthcareManage}>
                      Transforming Healthcare Management
                    </div>
                  </div>
                </div>
                <h1 className={styles.heading2}>MedicIQ</h1>
                <div className={styles.mediciqIsThe}>
                  MedicIQ is the future of smart healthcare
                  management—connecting patients, providers, and
                  administrators like never before. Designed to address
                  accessibility and workflow challenges.
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.frameGroup}>
                  <div className={styles.fluentpayment20FilledParent}>
                    <img
                      className={styles.fluentpayment20FilledIcon}
                      loading="lazy"
                      alt=""
                      src="/fluentpayment20filled.svg"
                    />
                    <div className={styles.redefiningPaymentsForAConnWrapper}>
                      <div className={styles.redefiningPaymentsFor}>
                        Redefining Payments for a Connected World
                      </div>
                    </div>
                  </div>
                  <h1 className={styles.heading21}>PayMe</h1>
                </div>
                <div
                  className={styles.paymeIsAn}
                >{`PayMe is an advanced payment orchestration solution designed to make financial transactions secure, flexible, and seamless. `}</div>
              </div>
            </div>
            <div className={styles.management1}>
              <div className={styles.managementChild} />
              <div className={styles.iconoirmoneySquareSolidParent}>
                <img
                  className={styles.iconoirmoneySquareSolid}
                  loading="lazy"
                  alt=""
                  src="/iconoirmoneysquaresolid.svg"
                />
                <div className={styles.simplifyingPayrollEmpowerinWrapper}>
                  <div className={styles.transformingHealthcareManage}>
                    Simplifying Payroll, Empowering Businesses
                  </div>
                </div>
              </div>
              <div className={styles.heading2ScaleDataEngineWrapper}>
                <h1 className={styles.heading22}>JanusPayroll</h1>
              </div>
              <div className={styles.januspayrollIsOurInnovativeWrapper}>
                <div className={styles.januspayrollIsOur}>
                  JanusPayroll is our innovative payroll solution designed to
                  automate, streamline, and transform how businesses manage
                  employee payments.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent18;

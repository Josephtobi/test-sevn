import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./FrameComponent10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.futureContentWrapper, className].join(" ")}>
      <div className={styles.futureContent}>
        <div className={styles.futureWrapper}>
          <div className={styles.callToAction}>
            <div className={styles.futureDivider} />
            <h1 className={styles.yourFutureStarts}>Your Future Starts Here</h1>
          </div>
        </div>
        <div className={styles.opportunityDescription}>
          <div className={styles.atSevnContainer}>
            <span>{`At SEVN `}</span>
            <span className={styles.span}>|</span>
            <span>
              {" "}
              BYTES, every role is an opportunity to innovate, grow, and make a
              real impact. If you’re ready to build what’s next, we’d love to
              hear from you.
            </span>
          </div>
        </div>
        <div className={styles.joinUsContainer}>
          <div className={styles.joinUsWrapper}>
            <div className={styles.joinUsButton}>
              <div className={styles.buttonContent}>
                <div className={styles.joinOurTeam}>Join our team today</div>
              </div>
              <img
                className={styles.icroundArrowRightIcon}
                loading="lazy"
                alt=""
                src="/icroundarrowright.svg"
              />
            </div>
          </div>
          <div className={styles.contactDividerParent}>
            <div className={styles.futureDivider} />
            <div className={styles.contactDetails}>
              <h1 className={styles.contactUs}>Contact Us</h1>
              <div className={styles.inquiryDetails}>
                <div className={styles.forQuestionsAboutContainer}>
                  <span className={styles.forQuestionsAboutContainer1}>
                    <span className={styles.forQuestionsAbout}>
                      For questions about careers or specific opportunities,
                      reach out to us at:  
                    </span>
                    <a
                      className={styles.careerssevnbytescom}
                      href="mailto:careers@sevnbytes.com"
                      target="_blank"
                    >
                      <span className={styles.careerssevnbytescom1}>
                        careers@sevnbytes.com
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;

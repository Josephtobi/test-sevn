import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import Button2WAnimation from "./Button2WAnimation";
import styles from "./FrameComponent16.module.css";

export type FrameComponent16Type = {
  className?: string;
};

const FrameComponent16: FunctionComponent<FrameComponent16Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.lineParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.contactImageParent}>
        <img
          className={styles.contactImageIcon}
          loading="lazy"
          alt=""
          src="/rectangle-59651@2x.png"
        />
        <div className={styles.getInTouchParent}>
          <h1 className={styles.getInTouch}>Get in Touch</h1>
          <Button2WAnimation property1="Default" />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.emailParent}>
            <a className={styles.email}>Email</a>
            <h3 className={styles.infosevnbytescom}>info@sevnbytes.com</h3>
          </div>
          <div className={styles.phoneParent}>
            <h2 className={styles.phone}>Phone</h2>
            <div className={styles.sevnbytes}>+234 (0) 800-SEVNBYTES</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.letsBuildTheFutureTogetheWrapper}>
              <div className={styles.letsBuildThe}>
                Let’s Build the Future Together
              </div>
            </div>
            <img
              className={styles.icroundArrowRightIcon}
              loading="lazy"
              alt=""
              src="/icroundarrowright.svg"
            />
          </div>
        </div>
        <div className={styles.addressPartnershipsItemParent}>
          <div className={styles.emailParent}>
            <h2 className={styles.phone}>Address</h2>
            <h3 className={styles.infosevnbytescom}>SevnBytes Technologies</h3>
          </div>
          <div className={styles.addressPartnershipsItem1}>
            <h2 className={styles.phone}>Partnerships</h2>
            <h3 className={styles.infosevnbytescom}>partners@sevnbytes.com</h3>
          </div>
          <div className={styles.socialMediaParent}>
            <h2 className={styles.phone}>Social media</h2>
            <div className={styles.basilfacebookSolidParent}>
              <img
                className={styles.icroundArrowRightIcon}
                loading="lazy"
                alt=""
                src="/basilfacebooksolid.svg"
              />
              <img
                className={styles.icroundArrowRightIcon}
                loading="lazy"
                alt=""
                src="/icoutlinetiktok.svg"
              />
              <img
                className={styles.icroundArrowRightIcon}
                loading="lazy"
                alt=""
                src="/jamlinkedin.svg"
              />
              <div className={styles.primetwitterWrapper}>
                <img
                  className={styles.primetwitterIcon}
                  loading="lazy"
                  alt=""
                  src="/primetwitter1@2x.png"
                />
              </div>
              <img
                className={styles.icroundArrowRightIcon}
                loading="lazy"
                alt=""
                src="/uilinstagram.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent16;

import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent15 from "../components/FrameComponent15";
import styles from "./ContactUs.module.css";

const ContactUs: FunctionComponent = () => {
  return (
    <div className={styles.contactUs}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.component87Wrapper}>
          <img
            className={styles.component87Icon}
            loading="lazy"
            alt=""
            src="/component-87@2x.png"
          />
        </div>
        <div className={styles.companyResourcesWrapper}>
          <div className={styles.companyResources}>
            <a className={styles.company}>Company</a>
            <a className={styles.products}>Products</a>
            <a className={styles.resources}>Resources</a>
          </div>
        </div>
        <button className={styles.contactUsWrapper}>
          <a className={styles.contactUs1}>Contact Us</a>
        </button>
      </header>
      <section className={styles.contactUsInner}>
        <div className={styles.frameParent}>
          <FrameComponent12 />
          <FrameComponent13 />
          <FrameComponent14 />
          <FrameComponent16 />
        </div>
      </section>
      <section className={styles.contactUsChild}>
        <div className={styles.frameGroup}>
          <FrameComponent11 />
          <FrameComponent15 />
          <footer className={styles.solutionsContainerWrapper}>
            <div className={styles.solutionsContainer}>
              <div className={styles.solutionsLogos}>
                <div className={styles.solutions}>Solutions</div>
                <div className={styles.component51}>
                  <div className={styles.janushr}>MedicIQ</div>
                </div>
                <div className={styles.component52}>
                  <div className={styles.janushr1}>JanusPayroll</div>
                </div>
                <div className={styles.component53}>
                  <div className={styles.janushr2}>PAYme</div>
                </div>
              </div>
              <div className={styles.solutionsLogos}>
                <div className={styles.industries}>Company</div>
                <div className={styles.component51}>
                  <a className={styles.janushr3}>About us</a>
                </div>
                <div className={styles.component521}>
                  <div className={styles.janushr4}>Careers - We’re hiring!</div>
                </div>
                <div className={styles.component53}>
                  <div className={styles.janushr5}>Contact</div>
                </div>
                <div className={styles.component53}>
                  <a className={styles.janushr6}>Cookies</a>
                </div>
                <div className={styles.component55}>
                  <div className={styles.janushr7}>Terms of service</div>
                </div>
                <div className={styles.component55}>
                  <div className={styles.janushr8}>Privacy and Security</div>
                </div>
              </div>
              <div className={styles.industriesParent}>
                <div className={styles.industries}>Industries</div>
                <div className={styles.component51}>
                  <div className={styles.janushr9}>Retail</div>
                </div>
                <div className={styles.component522}>
                  <div className={styles.janushr10}>Health</div>
                </div>
                <div className={styles.component53}>
                  <div className={styles.janushr10}>Energy</div>
                </div>
                <div className={styles.component541}>
                  <div className={styles.janushr12}>Finance</div>
                </div>
                <div className={styles.component541}>
                  <div className={styles.janushr13}>Defense</div>
                </div>
                <div className={styles.component51}>
                  <div className={styles.janushr14}>Logistics</div>
                </div>
                <div className={styles.component58}>
                  <div className={styles.janushr15}>Education</div>
                </div>
                <div className={styles.component59}>
                  <div className={styles.janushr16}>Agriculture</div>
                </div>
                <div className={styles.component59}>
                  <div className={styles.janushr17}>Government</div>
                </div>
              </div>
              <div className={styles.footer}>
                <img
                  className={styles.sevnbytesLogoHorizontalInveIcon}
                  loading="lazy"
                  alt=""
                  src="/sevnbyteslogohorizontalinvertedrgb500px2x-3@2x.png"
                />
                <div className={styles.socialMediaIcons}>
                  <img
                    className={styles.basilfacebookSolidIcon}
                    loading="lazy"
                    alt=""
                    src="/basilfacebooksolid.svg"
                  />
                  <img
                    className={styles.basilfacebookSolidIcon}
                    loading="lazy"
                    alt=""
                    src="/icoutlinetiktok.svg"
                  />
                  <img
                    className={styles.basilfacebookSolidIcon}
                    loading="lazy"
                    alt=""
                    src="/jamlinkedin.svg"
                  />
                  <div className={styles.twitterIcon}>
                    <img
                      className={styles.primetwitterIcon}
                      loading="lazy"
                      alt=""
                      src="/primetwitter@2x.png"
                    />
                  </div>
                  <img
                    className={styles.basilfacebookSolidIcon}
                    loading="lazy"
                    alt=""
                    src="/uilinstagram.svg"
                  />
                </div>
                <div className={styles.sevnbytesTechnologiesLlc}>
                  © 2024 SevnBytes Technologies LLC. All rights reserved.
                </div>
              </div>
            </div>
          </footer>
          <h1 className={styles.sevnbytes}>
            <span className={styles.sevnbytesTxt}>
              <span className={styles.sevn}>SEVN</span>
              <span className={styles.span}>|</span>
              <span className={styles.sevn}>BYTES</span>
            </span>
          </h1>
        </div>
      </section>
      <div className={styles.contactUsItem} />
    </div>
  );
};

export default ContactUs;

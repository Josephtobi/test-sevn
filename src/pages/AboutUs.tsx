import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent8 from "../components/FrameComponent8";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <FrameComponent4 />
      <section className={styles.aboutUsInner}>
        <div className={styles.aboutUsParent}>
          <h1 className={styles.aboutUs1}>About Us</h1>
          <div className={styles.sevnBytesTechnologiesSimpWrapper}>
            <h2 className={styles.sevnBytesContainer}>
              <span className={styles.sevnBytesContainer1}>
                <p className={styles.sevnBytesTechnologiesSimp}>
                  <span className={styles.sevn}>{`SEVN `}</span>
                  <span className={styles.span}>|</span>
                  <span>
                    {" "}
                    BYTES Technologies simplifies software solutions for diverse
                    sectors, ensuring technology is accessible, impactful, and
                    transformative. We go beyond creating solutions—we redefine
                    how businesses, governments, and communities leverage
                    technology to achieve their goals.
                  </span>
                </p>
                <p className={styles.sevnBytesTechnologiesSimp}>&nbsp;</p>
                <p className={styles.sevnBytesTechnologiesSimp}>
                  Driven by purpose and innovation, we bridge gaps, turn
                  challenges into opportunities, and transform potential into
                  progress. As a trusted partner, we empower our clients by
                  delivering intuitive, powerful software tailored to their
                  needs.
                </p>
              </span>
            </h2>
          </div>
        </div>
      </section>
      <section className={styles.sevnWrapper}>
        <img
          className={styles.sevnIcon}
          loading="lazy"
          alt=""
          src="/sevn@2x.png"
        />
      </section>
      <section className={styles.aboutUsChild}>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.whatWeDoParent}>
            <h1 className={styles.whatWeDo}>What We Do</h1>
            <div className={styles.sevnBytesEmpowersIndustriWrapper}>
              <h2 className={styles.sevnBytesContainer2}>
                <span className={styles.sevnBytesContainer1}>
                  <span>{`SEVN `}</span>
                  <span className={styles.span}>|</span>
                  <span>
                    {" "}
                    BYTES empowers industries with forward-thinking technology
                    solutions designed to address real-world challenges. By
                    simplifying complexity, we help our clients achieve
                    measurable results and drive sustainable growth, resilience,
                    and transformation.
                  </span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent7 />
      <FrameComponent8 />
      <footer className={styles.frameFooter}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.solutionsParent}>
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
              <div className={styles.solutionsParent}>
                <div className={styles.company}>Company</div>
                <div className={styles.component51}>
                  <a className={styles.janushr3}>About us</a>
                </div>
                <div className={styles.component521}>
                  <div className={styles.janushr4}>Careers - We’re hiring!</div>
                </div>
                <div className={styles.component53}>
                  <a className={styles.janushr5}>Contact</a>
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
                <div className={styles.company}>Industries</div>
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
              <div className={styles.sevnbytesLogoHorizontalInveParent}>
                <img
                  className={styles.sevnbytesLogoHorizontalInveIcon}
                  loading="lazy"
                  alt=""
                  src="/sevnbyteslogohorizontalinvertedrgb500px2x-3@2x.png"
                />
                <div className={styles.socials}>
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
                  <div className={styles.twitter}>
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
          </div>
          <h1 className={styles.sevnbytes}>
            <span className={styles.sevnbytesTxt}>
              <span className={styles.bytes}>SEVN</span>
              <span className={styles.span2}>|</span>
              <span className={styles.bytes}>BYTES</span>
            </span>
          </h1>
        </div>
      </footer>
      <div className={styles.aboutUsItem} />
    </div>
  );
};

export default AboutUs;

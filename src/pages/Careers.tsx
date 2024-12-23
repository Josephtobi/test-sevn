import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent9 from "../components/FrameComponent9";
import StepItems from "../components/StepItems";
import FrameComponent10 from "../components/FrameComponent10";
import Content from "../components/Content";
import styles from "./Careers.module.css";

const Careers: FunctionComponent = () => {
  return (
    <div className={styles.careers}>
      <FrameComponent4 />
      <main className={styles.header}>
        <section className={styles.titleWrapper}>
          <div className={styles.sloganContainerWrapper}>
            <div className={styles.sloganContainer}>
              <h1 className={styles.sevnbytesCareers}>SevnBytes Careers</h1>
              <div className={styles.subheading}>
                <h2 className={styles.buildTheFuture}>
                  Build the Future. Shape Tomorrow. Grow with Us.
                </h2>
              </div>
            </div>
          </div>
          <div className={styles.impactContentWrapper}>
            <div className={styles.impactContent}>
              <div className={styles.divider} />
              <div className={styles.impactStatementsParent}>
                <div className={styles.impactStatements}>
                  <h1 className={styles.whySevnbytes}>Why SevnBytes</h1>
                  <div className={styles.impactDescription}>
                    <h3 className={styles.makeAnImpact}>
                      Make an Impact That Matters
                    </h3>
                  </div>
                </div>
                <div className={styles.empowerment}>
                  <h3 className={styles.sevnbytesEmpowersIndustries}>
                    SevnBytes empowers industries with forward-thinking
                    technology solutions designed to address real-world
                    challenges. By simplifying complexity, we help our clients
                    achieve measurable results and drive sustainable growth,
                    resilience, and transformation.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent9 />
          <div className={styles.applicationStepsWrapper}>
            <div className={styles.applicationSteps}>
              <StepItems
                sifactCheckLine="/sifactcheckline.svg"
                apply="Apply"
                shareYourResumeAndTellUsWhat="Share your resume and tell us what excites you about SevnBytes."
              />
              <StepItems
                sifactCheckLine="/lineiconsmessage2.svg"
                apply="Interview"
                shareYourResumeAndTellUsWhat="A chance to meet our team and showcase your skills"
              />
              <StepItems
                sifactCheckLine="/bifilecheck.svg"
                apply="Join Us"
                shareYourResumeAndTellUsWhat="Welcome aboard! Let’s shape the future together."
              />
            </div>
          </div>
          <FrameComponent10 />
          <Content />
          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <div className={styles.footerLinks}>
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
              <div className={styles.footerLinks}>
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
              <div className={styles.industriesLinks}>
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
              <div className={styles.copyright}>
                <img
                  className={styles.sevnbytesLogoHorizontalInveIcon}
                  loading="lazy"
                  alt=""
                  src="/sevnbyteslogohorizontalinvertedrgb500px2x-3@2x.png"
                />
                <div className={styles.socialIcons}>
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
        </section>
      </main>
      <div className={styles.careersChild} />
    </div>
  );
};

export default Careers;

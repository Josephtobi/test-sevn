import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent9 from "../components/FrameComponent9";
import StepItems from "../components/StepItems";
import FrameComponent10 from "../components/FrameComponent10";
import Content from "../components/Content";
import FooterNavItem from "../components/FooterNavItem";
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
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="84px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="MedicIQ"
                  janusHRWidth="58px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="167px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="JanusPayroll"
                  janusHRWidth="83px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="67px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="PAYme"
                  janusHRWidth="47px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
              </div>
              <div className={styles.footerLinks}>
                <div className={styles.company}>Company</div>
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="84px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="About us"
                  janusHRWidth="60px"
                  janusHRTextDecoration="none"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="208px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Careers - We’re hiring!"
                  janusHRWidth="146px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="67px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Contact"
                  janusHRWidth="54px"
                  janusHRTextDecoration="none"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="67px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Cookies"
                  janusHRWidth="55px"
                  janusHRTextDecoration="none"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="67px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px 1px 0px"
                  janusHR="Terms of service"
                  janusHRWidth="107px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="67px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px 1px 0px"
                  janusHR="Privacy and Security"
                  janusHRWidth="135px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
              </div>
              <div className={styles.industriesLinks}>
                <div className={styles.company}>Industries</div>
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="84px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Retail"
                  janusHRWidth="39px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="156px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Health"
                  janusHRWidth="46px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="67px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Energy"
                  janusHRWidth="46px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="76px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Finance"
                  janusHRWidth="55px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="76px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Defense"
                  janusHRWidth="56px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="84px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Logistics"
                  janusHRWidth="59px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="98px"
                  component51Height="13px"
                  component51AlignItems="flex-end"
                  component51Padding="unset"
                  janusHR="Education"
                  janusHRWidth="69px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="-1.7px"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="103px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Agriculture"
                  janusHRWidth="73px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="103px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Government"
                  janusHRWidth="84px"
                  janusHRTextDecoration="unset"
                  janusHRMarginBottom="unset"
                />
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
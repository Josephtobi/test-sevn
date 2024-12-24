import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent8 from "../components/FrameComponent8";
import FooterNavItem from "../components/FooterNavItem";
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
              <div className={styles.solutionsParent}>
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
              <div className={styles.industriesParent}>
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
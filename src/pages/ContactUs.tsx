import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent14 from "../components/FrameComponent14";
import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent15 from "../components/FrameComponent15";
import FooterNavItem from "../components/FooterNavItem";
import styles from "./ContactUs.module.css";

const ContactUs: FunctionComponent = () => {
  return (
    <div className={styles.contactUs}>
      <FrameComponent1
        frameDivHeight="unset"
        frameDivPosition="sticky"
        frameDivTop="0"
        rectangleHeaderHeight="100%"
        rectangleHeaderBottom="-1px"
      />
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
              <div className={styles.solutionsLogos}>
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
                  janusHRTextDecoration="unset"
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
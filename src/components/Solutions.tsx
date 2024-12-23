import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import FooterNavItem from "./FooterNavItem";
import styles from "./Solutions.module.css";

export type SolutionsType = {
  className?: string;
};

const Solutions: FunctionComponent<SolutionsType> = ({ className = "" }) => {
  return (
    <footer className={[styles.solutions, className].join(" ")}>
      <div className={styles.solutionsContent}>
        <div className={styles.solutionsContainer}>
          <div className={styles.solutionsHeader}>
            <div className={styles.solutionsTitleContainer}>
              <div className={styles.solutions1}>Solutions</div>
              <FooterNavItem property1="JanusHR" janusHR="MedicIQ" />
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
            <div className={styles.solutionsTitleContainer}>
              <div className={styles.company}>Company</div>
              <div className={styles.solutionsNavigationItem}>
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
              </div>
              <div className={styles.solutionsNavigationItem1}>
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
              </div>
              <div className={styles.solutionsNavigationItem}>
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
              </div>
              <div className={styles.solutionsNavigationItem}>
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
              </div>
              <div className={styles.solutionsNavigationItem}>
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
              </div>
              <div className={styles.solutionsNavigationItem}>
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
            </div>
            <div className={styles.industriesNavigation}>
              <div className={styles.company}>Industries</div>
              <div className={styles.solutionsNavigationItem}>
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
              </div>
              <div className={styles.solutionsNavigationItem1}>
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
              </div>
              <div className={styles.solutionsNavigationItem}>
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
              </div>
              <div className={styles.solutionsNavigationItem}>
                <FooterNavItem
                  property1="JanusHR"
                  component51Width="76px"
                  component51Height="19px"
                  component51AlignItems="flex-start"
                  component51Padding="1px 0px"
                  janusHR="Finance"
                  janusHRWidth="55px"
                  janusHRTextDecoration="none"
                  janusHRMarginBottom="unset"
                />
              </div>
              <div className={styles.solutionsNavigationItem}>
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
              </div>
              <div className={styles.solutionsNavigationItem}>
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
              </div>
              <div className={styles.solutionsNavigationItem}>
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
              </div>
              <div className={styles.solutionsNavigationItem}>
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
              </div>
              <div className={styles.solutionsNavigationItem}>
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
            </div>
            <div className={styles.footerInfo}>
              <img
                className={styles.sevnbytesLogoHorizontalInveIcon}
                loading="lazy"
                alt=""
                src="/sevnbyteslogohorizontalinvertedrgb500px2x-3@2x.png"
              />
              <div className={styles.socialMedia}>
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
                <div className={styles.socialMediaTwitter}>
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
        <h1 className={styles.sevnbytesLogo}>
          <span className={styles.sevnbytesLogoTxtContainer}>
            <span className={styles.sevn}>SEVN</span>
            <span className={styles.span}>|</span>
            <span className={styles.sevn}>BYTES</span>
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Solutions;

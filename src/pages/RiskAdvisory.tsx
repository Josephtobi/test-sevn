import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent21 from "../components/FrameComponent21";
import FooterNavItem from "../components/FooterNavItem";
import styles from "./RiskAdvisory.module.css";

const RiskAdvisory: FunctionComponent = () => {
  return (
    <div className={styles.riskAdvisory}>
      <FrameComponent4 />
      <main className={styles.riskAdvisoryInner}>
        <section className={styles.contentColumnParent}>
          <div className={styles.contentColumn}>
            <div className={styles.contentBlock}>
              <div className={styles.riskAdvisoryInner}>
                <div className={styles.riskAdvisoryParent}>
                  <h1 className={styles.riskAdvisory1}>Risk Advisory</h1>
                  <div className={styles.anticipateMitigateThriveWrapper}>
                    <div className={styles.anticipateMitigateThrive}>
                      Anticipate. Mitigate. Thrive.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inARapidlyContainer}>
                <span>{`In a rapidly evolving world, risks are unavoidable—but they can be managed. At `}</span>
                <span className={styles.sevn}>{`SEVN `}</span>
                <span className={styles.span}>|</span>
                <span className={styles.sevn}> BYTES</span>
                <span>, our </span>
                <span className={styles.span}>Risk Advisory Services</span>
                <span>
                   provide proactive strategies to identify, assess, and
                  mitigate risks that could disrupt operations, finances, or
                  regulatory standing. We empower businesses to move forward
                  with confidence, agility, and resilience.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.innovationsColumnWrapper}>
            <div className={styles.innovationsColumn}>
              <div className={styles.innovationsHeader}>
                <div className={styles.innovationsHeaderChild} />
                <h1 className={styles.ourCurrentInnovations}>
                  Our Current Innovations in Progress
                </h1>
              </div>
              <div className={styles.eRMColumnsParent}>
                <div className={styles.eRMColumns}>
                  <div className={styles.eRMColumnTitles}>
                    <h1 className={styles.erm}>ERM</h1>
                  </div>
                  <img
                    className={styles.eRMColumnTitles1}
                    loading="lazy"
                    alt=""
                    src="/frame-1000006119@2x.png"
                  />
                  <img
                    className={styles.eRMColumnTitles1}
                    loading="lazy"
                    alt=""
                    src="/frame-1000006121@2x.png"
                  />
                  <img
                    className={styles.eRMColumnTitles1}
                    loading="lazy"
                    alt=""
                    src="/frame-1000006123@2x.png"
                  />
                  <img
                    className={styles.eRMColumnTitles1}
                    loading="lazy"
                    alt=""
                    src="/frame-1000006125@2x.png"
                  />
                </div>
                <div className={styles.enterpriseRiskColumnsWrapper}>
                  <div className={styles.enterpriseRiskColumns}>
                    <div className={styles.enterpriseRiskList}>
                      <h2 className={styles.enterpriseRiskManagement}>
                        Enterprise Risk Management (ERM)
                      </h2>
                      <div className={styles.takeControlOfContainer}>
                        <span>
                          Take control of uncertainty. We help organizations
                          build robust frameworks to 
                        </span>
                        <span
                          className={styles.span}
                        >{`identify, manage, `}</span>
                        <span>and </span>
                        <span className={styles.span}>mitigate</span>
                        <span>{` `}</span>
                        <span className={styles.span}>
                          operational, financial, and regulatory risks
                        </span>
                        <span> for sustainable growth</span>
                      </div>
                    </div>
                    <div className={styles.enterpriseRiskList}>
                      <h2
                        className={styles.enterpriseRiskManagement}
                      >{`Cybersecurity & IT Risk`}</h2>
                      <div className={styles.takeControlOfContainer}>
                        <span>
                          Safeguard your digital assets. Our experts assess
                          vulnerabilities, fortify IT infrastructure, and
                          manage 
                        </span>
                        <span className={styles.span}>cyber threats</span>
                        <span>
                           to protect sensitive data and ensure regulatory
                          compliance.
                        </span>
                      </div>
                    </div>
                    <div className={styles.enterpriseRiskList}>
                      <h2
                        className={styles.enterpriseRiskManagement}
                      >{`Compliance & Regulatory Advisory`}</h2>
                      <div className={styles.takeControlOfContainer}>
                        <span>
                          Navigate complexity with ease. SevnBytes ensures your
                          business adheres to evolving 
                        </span>
                        <span className={styles.span}>laws, policies</span>
                        <span>, and </span>
                        <span className={styles.span}>
                          industry regulations
                        </span>
                        <span>
                          —minimizing compliance risks and enhancing trust.
                        </span>
                      </div>
                    </div>
                    <div className={styles.enterpriseRiskList}>
                      <h2 className={styles.enterpriseRiskManagement}>
                        Internal Audit Services
                      </h2>
                      <div className={styles.takeControlOfContainer}>
                        <span>
                          Strengthen governance. We evaluate your internal
                          controls, 
                        </span>
                        <span className={styles.span}>
                          governance processes
                        </span>
                        <span>, and </span>
                        <span className={styles.span}>
                          risk management systems
                        </span>
                        <span>
                           to identify gaps and improve operational efficiency.
                        </span>
                      </div>
                    </div>
                    <div className={styles.enterpriseRiskList}>
                      <h2 className={styles.enterpriseRiskManagement}>
                        Fraud Risk Management
                      </h2>
                      <div className={styles.takeControlOfContainer}>
                        <span>
                          Prevent. Detect. Protect. SevnBytes helps businesses
                          build systems to 
                        </span>
                        <span className={styles.span}>
                          prevent, identify, and respond
                        </span>
                        <span>
                           to fraud and financial misrepresentation—protecting
                          your reputation and assets.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent21 />
          <footer className={styles.footer}>
            <div className={styles.footerContent}>
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
                  janusHRTextDecoration="unset"
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
                <div className={styles.basilfacebookSolidParent}>
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
                  <div className={styles.primetwitterWrapper}>
                    <img
                      className={styles.primetwitterIcon}
                      loading="lazy"
                      alt=""
                      src="/primetwitter2@2x.png"
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
              <span className={styles.sevn1}>SEVN</span>
              <span className={styles.span1}>|</span>
              <span className={styles.sevn1}>BYTES</span>
            </span>
          </h1>
        </section>
      </main>
      <div className={styles.riskAdvisoryChild} />
    </div>
  );
};

export default RiskAdvisory;
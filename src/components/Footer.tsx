import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerContentChild} />
        <div className={styles.footerSubscription}>
          <h1 className={styles.heading2Container}>
            <span className={styles.heading2Container1}>
              <span>{`Unlocking Limitless `}</span>
              <span className={styles.potential}>Potential.</span>
            </span>
          </h1>
          <div className={styles.footerSubscriptionDescriptio}>
            <div className={styles.joinUsInContainer}>
              <span className={styles.heading2Container1}>
                <span>{`Join us in driving innovation and unlocking limitless possibilities. Let’s redefine progress together—partner with SEVN `}</span>
                <span className={styles.potential}>|</span>
                <span> BYTES today.</span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.footerForm}>
          <div className={styles.footerFormContainer}>
            <div className={styles.footerFormInput}>
              <div className={styles.enterYourEmail}>
                Enter your email address...
              </div>
              <div className={styles.footerFormInputChild} />
            </div>
            <FormControl
              className={styles.footerFormButton}
              variant="standard"
              sx={{
                borderColor: "#eb4c28",
                borderStyle: "SOLID",
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "1px",
                borderLeftWidth: "0px",
                borderRadius: "10px",
                width: "23.832923832923832%",
                height: "41px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "41px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "41px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "41px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "41px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "Medium",
                  fontFamily: "Alliance No.1",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "10px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src="/icroundarrowright-7.svg"
                    style={{ marginRight: "10px" }}
                  />
                )}
              >
                <MenuItem>Learn more</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

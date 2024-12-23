import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import styles from "./FrameComponent11.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.dropUsAMessageParent}>
            <h1 className={styles.dropUsA}>Drop Us a Message</h1>
            <div className={styles.haveAQuestion}>
              Have a question or an idea you’d like to explore? Fill out the
              form below, and we’ll get back to you within 24 hours
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.formFieldItemParent}>
                <div className={styles.formFieldItem}>
                  <h3 className={styles.fullName}>Full name</h3>
                  <TextField
                    className={styles.formFieldInputs}
                    placeholder="Enter your full name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "rgba(203, 78, 40, 0.4)" },
                      "& .MuiInputBase-root": {
                        height: "45px",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(255, 255, 255, 0.6)",
                      },
                    }}
                  />
                </div>
                <div className={styles.formFieldItem}>
                  <h3 className={styles.fullName}>Email address</h3>
                  <TextField
                    className={styles.formFieldInputs}
                    placeholder="Enter your email address"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "rgba(203, 78, 40, 0.4)" },
                      "& .MuiInputBase-root": {
                        height: "45px",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(255, 255, 255, 0.6)",
                      },
                    }}
                  />
                </div>
                <div className={styles.formFieldItem}>
                  <h3 className={styles.fullName}>Subject</h3>
                  <TextField
                    className={styles.formFieldInputs}
                    placeholder="Enter Subject"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "rgba(203, 78, 40, 0.4)" },
                      "& .MuiInputBase-root": {
                        height: "45px",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(255, 255, 255, 0.6)",
                      },
                    }}
                  />
                </div>
                <div className={styles.formFieldItem}>
                  <h3 className={styles.fullName}>Message</h3>
                  <textarea
                    className={styles.formFieldItemInner}
                    placeholder="Message..."
                    rows={7}
                    cols={21}
                  />
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.sendMessageWrapper}>
                  <div className={styles.sendMessage}>Send message</div>
                </div>
                <img
                  className={styles.icroundArrowRightIcon}
                  loading="lazy"
                  alt=""
                  src="/icroundarrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;

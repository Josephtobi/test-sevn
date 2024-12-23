import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { Typography, Box } from "@mui/material";
import styles from "./WhySevnBytes.module.css";

export type WhySevnBytesType = {
  className?: string;
  showWhySevnBytes?: boolean;
  simplifiedSolutions?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  whySevnBytesTransitionProperty?: CSSProperties["transitionProperty"];
  whySevnBytesTransitionTimingFunction?: CSSProperties["transitionTimingFunction"];
  whySevnBytesTransitionDuration?: CSSProperties["transitionDuration"];
  frameBoxGap?: CSSProperties["gap"];
  simplifiedSolutionsHeight?: CSSProperties["height"];
  simplifiedSolutionsWidth?: CSSProperties["width"];
  simplifiedSolutionsMarginTop?: CSSProperties["marginTop"];
};

const WhySevnBytes: FunctionComponent<WhySevnBytesType> = ({
  className = "",
  property1 = "Default",
  showWhySevnBytes,
  whySevnBytesTransitionProperty,
  whySevnBytesTransitionTimingFunction,
  whySevnBytesTransitionDuration,
  frameBoxGap,
  simplifiedSolutions,
  simplifiedSolutionsHeight,
  simplifiedSolutionsWidth,
  simplifiedSolutionsMarginTop,
}) => {
  const whySevnBytesStyle: CSSProperties = useMemo(() => {
    return {
      transitionProperty: whySevnBytesTransitionProperty,
      transitionTimingFunction: whySevnBytesTransitionTimingFunction,
      transitionDuration: whySevnBytesTransitionDuration,
    };
  }, [
    whySevnBytesTransitionProperty,
    whySevnBytesTransitionTimingFunction,
    whySevnBytesTransitionDuration,
  ]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      gap: frameBoxGap,
    };
  }, [frameBoxGap]);

  const simplifiedSolutionsStyle: CSSProperties = useMemo(() => {
    return {
      height: simplifiedSolutionsHeight,
      width: simplifiedSolutionsWidth,
      marginTop: simplifiedSolutionsMarginTop,
    };
  }, [
    simplifiedSolutionsHeight,
    simplifiedSolutionsWidth,
    simplifiedSolutionsMarginTop,
  ]);

  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openStyleObject = {
        "grid-template-rows": "1fr",
      };
      const closeStyleObject = {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "margin-bottom": "0px",
        "margin-top": "0px",
        "grid-template-rows": "0fr",
      };

      function applyStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.assign(element.style, styleObject);
      }

      function removeStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.keys(styleObject).forEach((key) => {
          element?.style.removeProperty(key);
        });
      }

      if (isOpen) {
        removeStyles(accContent, openStyleObject);
        applyStyles(accContent, closeStyleObject);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          removeStyles(siblingAccContent, closeStyleObject);
          applyStyles(siblingAccContent, openStyleObject);
        }, 1);
      }
    },
    []
  );

  return (
    showWhySevnBytes && (
      <div
        className={[styles.whySevnbytes, className].join(" ")}
        data-acc-item
        data-acc-header
        data-acc-original
        onClick={onAccordionHeaderClick}
        data-property1={property1}
        style={whySevnBytesStyle}
      >
        <div className={styles.whySevnbytesInner}>
          <div
            className={styles.simplifiedSolutionsParent}
            style={frameDiv2Style}
          >
            <h2
              className={styles.simplifiedSolutions}
              style={simplifiedSolutionsStyle}
            >
              {simplifiedSolutions}
            </h2>
            <img
              className={styles.icroundArrowRightIcon}
              loading="lazy"
              alt=""
              src="/icroundarrowright1@2x.png"
            />
          </div>
        </div>
        <div className={styles.whySevnbytesChild} />
      </div>
    )
  );
};

export default WhySevnBytes;

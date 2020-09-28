import * as React from "react";
import { Typography } from "../typography";
import styles from "./Footer.scss";
import { TypographyPreset } from "@types/typography";

export interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.Footer}>
      <Typography
        className={styles.Footer__item}
        preset={TypographyPreset.Common}
      >
        Санкт-Петербург
      </Typography>
      <Typography
        className={styles.Footer__item}
        preset={TypographyPreset.Common}
      >
        {year}
      </Typography>
    </footer>
  );
};

Footer.displayName = "Footer";

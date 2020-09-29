import * as React from "react";
import styles from "./Member.scss";
import { Typography } from "@components/common/typography";
import { TypographyPreset } from "@types/typography";

export interface IMemberProps {
  name: string;
  avatar: string;
  position: string;
}

export const Member: React.FC<IMemberProps> = ({ name, avatar, position }) => {
  return (
    <div className={styles.Member}>
      <div className={styles.Member__avatarFrame}>
        <img
          className={styles.Member__avatar}
          src={avatar}
          alt={`${name} Avatar`}
        />
      </div>
      <Typography
        className={styles.Member__name}
        tag="p"
        preset={TypographyPreset.Label}
      >
        {name}
      </Typography>
      <Typography
        className={styles.Member__position}
        tag="p"
        preset={TypographyPreset.Common}
      >
        {position}
      </Typography>
    </div>
  );
};

Member.displayName = "Member";

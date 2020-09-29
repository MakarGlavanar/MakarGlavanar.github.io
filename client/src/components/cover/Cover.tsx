import * as React from "react";
import styles from "./Cover.scss";
import { Typography } from "@components/common/typography";
import { TypographyPreset } from "@types/typography";
import { VideoBackground } from "@components/video-background";

export interface ICoverProps {}

export class Cover extends React.Component<ICoverProps> {
  public render(): JSX.Element {
    return (
      <div className={styles.Cover}>
        <div className={styles.Cover__content}>
          <Typography
            className={styles.Cover__title}
            tag="h1"
            preset={TypographyPreset.H1}
          >
            Брендинг{"\n"}сервисы{"\n"}сайты
          </Typography>
          <Typography
            className={styles.Cover__aim}
            tag="p"
            preset={TypographyPreset.Label}
          >
            для бизнесов{"\n"}и стартапов
          </Typography>
          <VideoBackground scrollHeight={window.innerHeight} />
        </div>
      </div>
    );
  }
}

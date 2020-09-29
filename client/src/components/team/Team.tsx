import * as React from "react";
import styles from "./Team.scss";
import { IMemberProps, Member } from "./partials/member";
import { Typography } from "@components/common/typography";
import { TypographyPreset } from "@types/typography";
import glavanarPhoto from "@assets/members/glavanar.jpeg";
import zhrnovPhoto from "@assets/members/zhirnov.jpeg";
import sorokinPhoto from "@assets/members/sorokin.jpeg";
import windukePhoto from "@assets/members/winduke.png";
import malininaPhoto from "@assets/members/malinina.jpg";
import chirkovPhoto from "@assets/members/chirkov.jpeg";

// TODO: create IMember interface, get from API
const members: IMemberProps[] = [
  {
    name: "Макар",
    avatar: glavanarPhoto,
    position: "Основатель",
  },
  {
    name: "Вася",
    avatar: zhrnovPhoto,
    position: "Технический лидер",
  },
  {
    name: "Никита",
    avatar: sorokinPhoto,
    position: "Продуктовый дизайнер",
  },
  {
    name: "Саша",
    avatar: windukePhoto,
    position: "Менеджер проектов",
  },
  {
    name: "Полина",
    avatar: malininaPhoto,
    position: "Фронтенд разработчик",
  },
  {
    name: "Коля",
    avatar: chirkovPhoto,
    position: "Бекенд разработчик",
  },
];

export interface ITeamProps {}

export const Team: React.FC<ITeamProps> = () => {
  return (
    <div className={styles.Team}>
      <Typography
        className={styles.Team__title}
        tag="h2"
        preset={TypographyPreset.Heading}
      >
        Команда
      </Typography>
      <div className={styles.Team__members}>
        {members.map((member, index) => {
          if (index > 2) return null;

          return <Member key={member.name} {...member} />;
        })}
      </div>
      <div className={styles.Team__members}>
        {members.map((member, index) => {
          if (index <= 2) return null;

          return <Member key={member.name} {...member} />;
        })}
      </div>
    </div>
  );
};

Team.displayName = "Team";

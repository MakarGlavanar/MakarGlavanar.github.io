import * as React from "react";
import { ContactButton } from "../contact-button";
import styles from "./Header.scss";
import { Logo } from "@components/common/logo";

export interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className={styles.Header}>
      <Logo />
      <ContactButton />
    </header>
  );
};

Header.displayName = "Header";

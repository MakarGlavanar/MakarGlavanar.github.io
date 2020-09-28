import * as React from "react";
import { Header } from "../header";
import styles from "./Page.scss";

export interface IPageProps {
  children: React.ReactNode;
  hasHeader?: boolean;
}

export const Page: React.FC<IPageProps> = ({ children, hasHeader }) => {
  return (
    <div className={styles.Page}>
      {hasHeader && <Header />}
      {children}
    </div>
  );
};

Page.defaultProps = {
  hasHeader: true,
};

Page.displayName = "Page";

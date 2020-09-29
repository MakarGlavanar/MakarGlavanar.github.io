import * as React from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import styles from "./Page.scss";

export interface IPageProps {
  children: React.ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
}

export const Page: React.FC<IPageProps> = ({
  children,
  hasHeader,
  hasFooter,
}) => {
  return (
    <div className={styles.Page}>
      {hasHeader && <Header />}
      {children}
      {hasFooter && <Footer />}
    </div>
  );
};

Page.defaultProps = {
  hasHeader: true,
  hasFooter: true,
};

Page.displayName = "Page";

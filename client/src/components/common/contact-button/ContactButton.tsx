import * as React from "react";
import styles from "./ContactButton.scss";

export interface IContactButtonProps {}

export const ContactButton: React.FC<IContactButtonProps> = () => {
  return (
    <button className={styles.ContactButton}>
      <span className={styles.ContactButton__text}>связаться</span>
      <span className={styles.ContactButton__textHovered}>связаться</span>
    </button>
  );
};

ContactButton.displayName = "ContactButton";

import * as React from "react";
import styles from "./ContactButton.scss";

export interface IContactButtonProps {}

export const ContactButton: React.FC<IContactButtonProps> = () => {
  return <button className={styles.ContactButton}>связаться</button>;
};

ContactButton.displayName = "ContactButton";

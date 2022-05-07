import React from "react";
import styles from "./ListItems.module.scss";

export const ListItems = (children) => {
  return (
    <div className={styles.List}>
      <div className={styles.ListContainer}>{children}</div>
    </div>
  );
};

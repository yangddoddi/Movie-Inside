import React from "react";
import styles from "./ListItems.module.scss";
import img from "../../image/logo.png";
import axios from "axios";

export const ListItems = (children) => {
  return (
    <div className={styles.List}>
      <div className={styles.ListContainer}>{children}</div>
    </div>
  );
};

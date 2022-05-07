import React from "react";
import styles from "./ListItems.module.scss";
import img from "../../image/logo.png";
import axios from "axios";

export const ListItems = (childeren) => {
  return (
    <div className={styles.List}>
      <div className={styles.ListContainer}>{childeren}</div>
    </div>
  );
};

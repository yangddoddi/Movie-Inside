import React from "react";
import styles from "./ListItems.module.scss";

export const ListItems = (props) => {
  return (
    <div className={styles.List} ref={"container"}>
      <div className={styles.ListContainer}>{props.children}</div>
    </div>
  );
};

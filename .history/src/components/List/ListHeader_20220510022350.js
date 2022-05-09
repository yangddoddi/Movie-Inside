import React from "react";
import styles from "./ListHeader.module.scss";

export const ListHeader = ({ listName }) => {
  return (
    <header className={styles.listHeader}>
      <div className={styles.container}>
        <h1> {listName} </h1>
      </div>
    </header>
  );
};

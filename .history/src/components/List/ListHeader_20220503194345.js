import React from "react";
import styles from "./ListHeader.module.scss";

export const ListHeader = () => {
  return (
    <header className={styles.listHeader}>
      <div className={styles.container}>
        <h1> 상영 중인 영화 </h1>
      </div>
    </header>
  );
};

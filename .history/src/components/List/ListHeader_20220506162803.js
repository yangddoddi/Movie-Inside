import React from "react";
import styles from "./ListHeader.module.scss";

export const ListHeader = ({ listName }) => {
  return (
    <header className={styles.listHeader}>
      <div className={styles.container}>
        <h1> {listName} </h1>
        <select>
          <option>인기도 내림차순</option>
          <option>인기도 오름차순</option>
          <option>개봉일 내림차순</option>
          <option>개봉일 오름차순</option>
        </select>
      </div>
    </header>
  );
};

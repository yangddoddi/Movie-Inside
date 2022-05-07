import React from "react";
import styles from "./ListHeader.module.scss";

export const ListHeader = () => {
  return (
    <header className={styles.listHeader}>
      <div className={styles.container}>
        <h1> 상영 중인 영화 </h1>
      </div>
      <select>
        <option>인기도 내림차순</option>
        <option>인기도 오름차순</option>
        <option>개봉일 내림차순</option>
        <option>개봉일 오름차순</option>
      </select>
    </header>
  );
};

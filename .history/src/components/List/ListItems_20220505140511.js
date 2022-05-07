import React from "react";
import styles from "./ListItems.module.scss";
import img from "../../image/logo.png";
import axios from "axios";

export const ListItems = ({ key, title, release, poster }) => {
  console.log(key);
  return (
    <div className={styles.List}>
      <div className={styles.ListContainer}>
        <article className={styles.card}>
          <img src={img} />
          <h4>제목</h4>
          <span>출시년월</span>
        </article>
      </div>
    </div>
  );
};

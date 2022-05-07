import React from "react";
import styles from "./ListItems.module.scss";
import img from "../../image/logo.png";
import axios from "axios";

export const ListItems = ({ title, release, poster }) => {
  return (
    <div className={styles.List}>
      <div className={styles.ListContainer}>
        <article className={styles.card}>
          <img src={img} />
          <h4>{title}</h4>
          <span>{release}</span>
        </article>
      </div>
    </div>
  );
};

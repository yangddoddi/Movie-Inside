import React from "react";
import styles from "./ListItems.module.scss";
import img from "../../image/logo.png";

export const ListItems = () => {
  return (
    <div className={styles.List}>
      <div className={styles.ListContainer}>
        <article className={styles.card}>
          <img src={img} />
          <span>제목</span>
          <span>출시년월</span>
        </article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
        <article className={styles.card}></article>
      </div>
    </div>
  );
};

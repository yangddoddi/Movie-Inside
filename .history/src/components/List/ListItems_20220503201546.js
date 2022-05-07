import React from "react";
import styles from "./ListItems.module.scss";
import img from "../../image/logo.png";

export const ListItems = () => {
  return (
    <div className={styles.List}>
      <div className={styles.ListContainer}>
        <article className={styles.card}>
          <img />
          <span>제목</span>
          <span>{props.release}</span>
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

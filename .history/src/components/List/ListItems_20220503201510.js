import React from "react";
import styles from "./ListItems.module.scss";

export const ListItems = () => {
  return (
    <div className={styles.List}>
      <div className={styles.ListContainer}>
        <article className={styles.card}>
          <img />
          <span>
            {props.title.length < 12
              ? props.title
              : `${props.title.slice(0, 12)}…`}
          </span>
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

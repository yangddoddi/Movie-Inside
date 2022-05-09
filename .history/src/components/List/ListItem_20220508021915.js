import React from "react";
import { Link } from "react-router-dom";
import styles from "./ListItems.module.scss";

export const ListItem = ({ id, title, release, poster }) => {
  return (
    <Link to={`/detail/${id}`}>
      <article className={styles.card}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} />
        <h4>{title}</h4>
        <span>{release}</span>
      </article>
    </Link>
  );
};

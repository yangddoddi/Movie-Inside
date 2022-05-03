import React from "react";
import logo from "../../image/logo.png";

import styles from "./Carousel.module.scss";

export const CarouselItem = (props) => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <header>{props.release}</header>
        <img src={`https://image.tmdb.org/t/p/w500/${props.src}`} />
        <span>{props.title}</span>
      </div>
    </div>
  );
};

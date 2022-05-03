import React from "react";
import logo from "../../image/logo.png";

import styles from "./Carousel.module.scss";

export const CarouselItem = (props) => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <header>{props.title}</header>
        <img src={props.src} />
        <span>{props.release}</span>
      </div>
    </div>
  );
};

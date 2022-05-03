import React from "react";
import styles from "./Carousel.module.scss";
import "../../image/logo.png";

export const Carousel = () => {
  return (
    <section className={styles.carousel}>
      <h2>Latest Movie</h2>
      <div className={styles.carouselContainer}>
        <div className={styles.card}>
          <header>제목</header>
          <img src={logo} />
        </div>
      </div>
    </section>
  );
};

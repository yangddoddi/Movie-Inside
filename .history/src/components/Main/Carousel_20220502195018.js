import React from "react";
import styles from "./Carousel.module.scss";

export const Carousel = () => {
  return (
    <section className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div className={styles.card}></div>
      </div>
    </section>
  );
};

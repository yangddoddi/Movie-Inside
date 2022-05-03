import React from "react";
import styles from "./Carousel.module.scss";
import logo from "../../image/logo.png";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export const Carousel = () => {
  return (
    <section className={styles.carousel}>
      <h2>Latest Movie</h2>
      <div className={styles.carouselContainer}>
        <BsFillArrowLeftCircleFill className={styles.arrow} />
        <BsFillArrowRightCircleFill className={styles.arrow} />
        <div className={styles.cards}>
          <div className={styles.card}>
            <header>제목</header>
            <img src={logo} />
            <span>개봉일</span>
          </div>
          <div className={styles.card}>
            <header>제목</header>
            <img src={logo} />
            <span>개봉일</span>
          </div>
          <div className={styles.card}>
            <header>제목</header>
            <img src={logo} />
            <span>개봉일</span>
          </div>
          <div className={styles.card}>
            <header>제목</header>
            <img src={logo} />
            <span>개봉일</span>
          </div>
          <div className={styles.card}>
            <header>제목</header>
            <img src={logo} />
            <span>개봉일</span>
          </div>
        </div>
      </div>
    </section>
  );
};

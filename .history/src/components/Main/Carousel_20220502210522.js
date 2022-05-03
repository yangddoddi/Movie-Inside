import React, { useRef } from "react";
import styles from "./Carousel.module.scss";
import logo from "../../image/logo.png";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export const Carousel = () => {
  const slider = useRef();

  const clickLeftArrow = () => {};

  const clickRightArrow = () => {
    console.log(slider.current);
  };

  return (
    <section className={styles.carousel}>
      <h2>Latest Movie</h2>
      <div className={styles.carouselContainer}>
        <BsFillArrowLeftCircleFill
          className={styles.arrow}
          onClick={clickLeftArrow}
        />
        <BsFillArrowRightCircleFill
          className={styles.arrow}
          onClick={clickRightArrow}
        />
        <div className={styles.cards} ref={slider}>
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

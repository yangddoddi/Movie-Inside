import React, { useRef, useEffect } from "react";
import styles from "./Carousel.module.scss";
import { CarouselItem } from "./CarouselItem";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export const Carousel = () => {
  const slider = useRef();

  useEffect(() => {
    slider.current.scrollLeft =
      slider.current.getBoundingClientRect().width / 2;
  }, []);
  const clickLeftArrow = () => {};

  const clickRightArrow = () => {
    console.log(slider.current.offsetWidth);
    console.log(window.innerWidth);
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
        <div className={styles.carouselSlider} ref={slider}>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </div>
      </div>
    </section>
  );
};

import React, { useRef, useEffect, useState } from "react";
import styles from "./Carousel.module.scss";
import { CarouselItem } from "./CarouselItem";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import axios from "axios";

export const Carousel = () => {
  const slider = useRef();
  const [popular, setPopular] = useState([]);
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`
      )
      .then((response) => {
        return setPopular(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  const clickLeftArrow = () => {
    slider.current.scrollLeft -= 300;
  };

  const clickRightArrow = () => {
    slider.current.scrollLeft += 300;
  };

  return (
    <section className={styles.carousel}>
      <h2>Popular Now</h2>
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
          {popular.map((movie) => {
            return (
              <CarouselItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                src={movie.poster_path}
                release={movie.release_date}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

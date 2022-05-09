import React, { useRef, useEffect, useState } from "react";
import styles from "./Carousel.module.scss";
import { CarouselItem } from "./CarouselItem";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import axios from "axios";

export const SimilarMovie = () => {
  const slider = useRef();
  const [popular, setPopular] = useState([]);
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";

  const getData = () => {
    const similarMovieData = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
  }

  useEffect(() => {
      getData()
  }, []);
  
  const clickLeftArrow = () => {
    slider.current.scrollLeft -= 400;
  };

  const clickRightArrow = () => {
    slider.current.scrollLeft += 400;
  };

  return (
    <article className={styles.carousel}>
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
    </article>
  );
};

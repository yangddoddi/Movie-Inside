import React from "react";
import styles from "./Carousel.module.scss";
import { Navigate, useNavigate } from "react-router-dom";

export const CarouselItem = (props) => {
  const navigate = useNavigate();
  const onClickHandler = navigate(`/detail/${props.id}`);

  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={`https://image.tmdb.org/t/p/w500/${props.src}`} />
        <span>
          {props.title.length < 12
            ? props.title
            : `${props.title.slice(0, 12)}…`}
        </span>
        <span>{props.release}</span>
      </div>
    </div>
  );
};

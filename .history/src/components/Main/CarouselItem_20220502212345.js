import React from "react";
import logo from "../../image/logo.png";

export const CarouselItem = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <header>제목</header>
        <img src={logo} />
        <span>개봉일</span>
      </div>
    </div>
  );
};

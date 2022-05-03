import React from "react";
import styles from "./Jumbotron.module.scss";

export const Jumbotron = () => {
  return (
    <div className={styles.jumbotron}>
      <div className={styles.jumbotronContainer}>
        <h1> Welcome to Movie Inside </h1>
        <h4>You can find the movie you want on our website.</h4>
      </div>
    </div>
  );
};

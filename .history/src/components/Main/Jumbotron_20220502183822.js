import React from "react";
import styles from "./Jumbotron.module.scss";

export const Jumbotron = () => {
  return (
    <div className={styles.jumbotron}>
      <div className={styles.jumbotronContainer}>
        <h1> Welcome to Movie Inside </h1>
        <p>You can find the movie you want on our website.</p>
      </div>
    </div>
  );
};

import React from "react";
import logo from "../../image/logo.png";
import styles from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <>
        <img className={styles.logo} src={logo}></img>
        <input type={"text"} />
      </>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>Top100</li>
        <li className={styles.navItem}>상영중</li>
        <li className={styles.navItem}>높은평점</li>
      </ul>
    </nav>
  );
};

import React from "react";
import logo from "../../image/logo.png";
import styles from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={logo}></img>
      <ul className={styles.navItems}>
        <li className={styles.navItem}></li>
      </ul>
    </nav>
  );
};

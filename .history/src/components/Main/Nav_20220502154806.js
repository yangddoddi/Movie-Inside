import React from "react";
import logo from "../../image/logo.png";
import styles from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img className="nav__logo" src={logo}></img>
      <ul className="nav__items">
        <li className="nav__items__item"></li>
      </ul>
    </nav>
  );
};

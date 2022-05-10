import React from "react";
import logo from "../../image/logo.png";
import styles from "./Nav.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.leftContainer}>
          <Link to="./">
            <img className={styles.logo} src={logo}></img>
          </Link>
          <div className={styles.logoContainer}>
            <span>MOVIE</span>
            <span>inside</span>
          </div>
        </div>
        <ul className={styles.navItems}>
          <Link to="./popular">
            <li className={styles.navItem}>인기영화</li>
          </Link>
          <Link to="./now_playing">
            <li className={styles.navItem}>상영중</li>
          </Link>
          <Link to="./toprating">
            <li className={styles.navItem}>최고평점</li>
          </Link>
          <Link to="./upcoming">
            <li className={styles.navItem}>개봉예정</li>
          </Link>
        </ul>
        <button className={styles.navTtem}></button>
      </div>
    </nav>
  );
};

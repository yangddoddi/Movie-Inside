import React from "react";
import logo from "../image/logo.png";
import styles from "./Nav.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.leftContainer}>
          <img className={styles.logo} src={logo}></img>
          <div className={styles.logoContainer}>
            <span>MOVIE</span>
            <span>inside</span>
          </div>
        </div>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>Top100</li>
          <li className={styles.navItem}>상영중</li>
          <li className={styles.navItem}>개봉예정</li>
          <li className={styles.navItem}>전체영화</li>
        </ul>
        <form className={styles.navForm}>
          <input type={"text"} id="searchInput" />
          <label htmlFor="searchInput">
            <AiOutlineSearch className={styles.searchIcon} />
          </label>
        </form>
      </div>
    </nav>
  );
};

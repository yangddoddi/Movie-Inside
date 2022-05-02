import React from "react";
import logo from "../../image/logo.png";
import styles from "./Nav.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftContainer}>
        <img className={styles.logo} src={logo}></img>
        <div className={styles.logoContainer}>
          <span>MOVIE</span>
          <span>inside</span>
        </div>
        <form>
          <input type={"text"} />
          <label>
            <AiOutlineSearch />
          </label>
        </form>
      </div>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>Top100</li>
        <li className={styles.navItem}>상영중</li>
        <li className={styles.navItem}>높은평점</li>
      </ul>
    </nav>
  );
};

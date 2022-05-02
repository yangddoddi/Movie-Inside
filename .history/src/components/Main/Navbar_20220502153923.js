import React from "react";
import logo from "../../image/logo.png";
import Navbar from "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav">
      <img className="nav__logo" src={logo}></img>
      <ul className="nav__items">
        <li className="nav__items__item"></li>
      </ul>
    </nav>
  );
};

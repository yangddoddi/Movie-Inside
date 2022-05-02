import React from "react";
import logo from "../../image/logo.png";

export const Navbar = () => {
  return (
    <nav className="nav">
      <img className="nav__logo" src={logo}></img>
      <ul className="nav__items"></ul>
    </nav>
  );
};

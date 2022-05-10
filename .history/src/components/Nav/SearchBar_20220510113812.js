import React from "react";
import styled from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div className={styled.searchBar}>
      <div className={styled.container}>
        <form>
          <input placeholder="Search Movie..."></input>
        </form>
      </div>
    </div>
  );
};

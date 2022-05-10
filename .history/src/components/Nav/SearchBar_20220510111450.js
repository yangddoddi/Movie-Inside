import React from "react";
import styled from "./SearchBar.module.scss";

export const SearchBar = () => {
  return (
    <div className={styled.searchBar}>
      <div className={styled.container}>
        <select>
          <option>인기도 높은순</option>
          <option>인기도 낮은순</option>
        </select>
        <select>
          <option>인기도 높은순</option>
          <option>인기도 낮은순</option>
        </select>
        <select>
          <option>인기도 높은순</option>
          <option>인기도 낮은순</option>
        </select>
      </div>
    </div>
  );
};

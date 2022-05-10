import axios from "axios";
import React, { useState } from "react";
import styled from "./SearchBar.module.scss";

export const SearchBar = () => {
  const getData = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=true`
    );
  };

  const [serachText, setSearchText] = useState(null);

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

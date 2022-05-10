import axios from "axios";
import React, { useState } from "react";
import styled from "./SearchBar.module.scss";

export const SearchBar = () => {
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";

  const getData = async (keyword) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=kr=KO&query=${keyword}&page=1&include_adult=true`
    );
    console.log(data);
  };

  const [serachText, setSearchText] = useState(null);
  const onChangeHander = (e) => {
    e.preventDefault();
    if (e.target.value == "") {
      return;
    }
    setSearchText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    getData(serachText);
  };

  return (
    <div className={styled.searchBar}>
      <div className={styled.container}>
        <form>
          <input
            onChange={onChangeHander}
            placeholder="Search Movie..."
          ></input>
        </form>
      </div>
    </div>
  );
};

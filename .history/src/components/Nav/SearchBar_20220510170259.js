import axios from "axios";
import React, { useState } from "react";
import styled from "./SearchBar.module.scss";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";

  const getData = async (keyword) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=kr=KO&query=${keyword}&page=1&include_adult=true`
    );
    console.log(data);
  };

  const [searchText, setSearchText] = useState(null);
  const onChangeHandler = (e) => {
    e.preventDefault();
    if (e.target.value == "") {
      return;
    }
    setSearchText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    getData(searchText);
  };

  return (
    <div className={styled.searchBar}>
      <div className={styled.container}>
        <form onSubmit={onSubmitHandler}>
          <input
            onChange={onChangeHandler}
            placeholder="Search Movie..."
          ></input>
        </form>
      </div>
    </div>
  );
};

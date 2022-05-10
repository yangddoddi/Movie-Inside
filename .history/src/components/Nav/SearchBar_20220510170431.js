import axios from "axios";
import React, { useState } from "react";
import styled from "./SearchBar.module.scss";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();

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
    navigate(`/search/${searchText}`);
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

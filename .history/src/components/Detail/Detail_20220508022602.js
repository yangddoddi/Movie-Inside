import React, { useEffect } from "react";
import styled from "./Detail.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Detail = () => {
  const { id } = useParams();
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";

  const getData = async () => {
    const data = await axios.get(`
    https://api.themoviedb.org/3/movie/{id}?api_key=%24%7BAPI_KEY%7D&language=ko-kr`);
    console.log(data);
  };

  return <div className={styled.detailContainer}> aa</div>;
};

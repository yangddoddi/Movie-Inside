import React, { useEffect } from "react";
import styled from "./Detail.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Detail = ({ id }) => {
  const { param } = useParams();
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";

  const getData = async () => {
    const data = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-kr`);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className={styled.detailContainer}> a{param}a</div>;
};

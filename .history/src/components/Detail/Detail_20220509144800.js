import React, { useEffect, useState } from "react";
import styled from "./Detail.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Detail = () => {
  const { id } = useParams();
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";

  const { poster, setPoster } = useState("");

  const getData = async () => {
    const data = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-kr`);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className={styled.detailContainer}
      style={`backgroundImage : url('https://image.tmdb.org/t/p/w500/${poster}')`}
    ></div>
  );
};

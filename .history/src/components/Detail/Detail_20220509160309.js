import React, { useEffect, useState } from "react";
import styled from "./Detail.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Detail = () => {
  const { id } = useParams();
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";

  const [backPoster, setBackPoster] = useState("");
  const [poster, setPoster] = useState(null);
  const [title, setTitle] = useState(null);
  const [generes, setGeneres] = useState(null);

  const getData = async () => {
    const data = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-kr`);
    const movieData = await data.data;
    console.log(movieData);
    setBackPoster(movieData.backdrop_path);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <article
      className={styled.detailContainer}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${backPoster})`,
      }}
    >
      <div className={styled.movieInfo}></div>
    </article>
  );
};

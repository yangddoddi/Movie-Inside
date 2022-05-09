import React, { useEffect, useState } from "react";
import styled from "./Detail.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Detail = () => {
  const { id } = useParams();
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";
  const BACK_POSTER = "https://image.tmdb.org/t/p/original";
  const POSTER = "https://image.tmdb.org/t/p/w500";

  const [backPoster, setBackPoster] = useState(null);
  const [poster, setPoster] = useState(null);
  const [title, setTitle] = useState(null);
  const [originTitle, setOriginTitle] = useState(null);
  const [genres, setGenres] = useState([]);
  const [overView, setOverView] = useState(null);
  const [grade, setGrade] = useState(null);
  const [runTime, setRunTime] = useState(null);

  const getData = async () => {
    const data = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-kr`);
    const movieData = await data.data;
    console.log(movieData);
    setBackPoster(movieData.backdrop_path);
    setPoster(movieData.poster_path);
    setTitle(movieData.title);
    setOriginTitle(movieData.original_title);
    setGenres(movieData.genres);
    setOverView(movieData.overview);
    setGrade(movieData.vote_average);
    setRunTime(movieData.runtime);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <article
      className={styled.detailContainer}
      style={{
        backgroundImage: `url(${BACK_POSTER}/${backPoster})`,
      }}
    >
      <div className={styled.movieInfo}></div>
    </article>
  );
};

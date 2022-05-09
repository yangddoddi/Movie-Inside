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
  const [genre, setGenre] = useState([]);
  const [overView, setOverView] = useState(null);
  const [grade, setGrade] = useState(null);
  const [runTime, setRunTime] = useState(null);

  const getData = async () => {
    const data = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-kr`);
    const movieData = await data.data;
    console.log(movieData);
    console.log(movieData.backdrop_path);
    setBackPoster(movieData.backdrop_path);
    setPoster(movieData.poster_path);
    setTitle(movieData.title);
    setOriginTitle(movieData.original_title);
    setGenre(movieData.genres[0].name);
    setOverView(movieData.overview);
    setGrade(movieData.vote_average);
    setRunTime(movieData.runtime);
  };

  useEffect(() => {
    getData();
  }, []);

  // const getData2 = async () => {
  //   const data = await axios.get(`
  //   https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
  // };

  const backgroundPoster = {
    backgroundImage: `url(${BACK_POSTER}/${backPoster})`,
  };

  const movieInfoPoster = `${POSTER}/${poster}`;

  return (
    <article className={styled.detailContainer} style={backgroundPoster}>
      <div className={styled.movieInfo}>
        <div className={styled.leftArea}>
          <img className={styled.poster} src={movieInfoPoster} />
        </div>
        <div className={styled.rightArea}>
          <h1>{title}</h1>
          <h5>{originTitle}</h5>
          <span>
            {runTime}분 · {genre} · 평점 {grade}/10
          </span>
          <p>{overView}</p>
        </div>
      </div>
    </article>
  );
};

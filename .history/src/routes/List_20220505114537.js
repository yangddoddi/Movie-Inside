import React, { useEffect, useState } from "react";
import { ListHeader } from "../components/List/ListHeader";
import { ListItems } from "../components/List/ListItems";
import axios from "axios";

export const List = () => {
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=kr-KO&page=1&region=kr`
      )
      .then((response) => {
        console.log(response);
        setMovies(...movies, response.data.result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ListHeader />
      {movies
        ? movies.map((movie) => (
            <ListItems
              key={movies.data.results.id}
              title={movies.data.results.title}
              release={movies.data.results.release_date}
              poster={movies.data.results.poster_path}
            />
          ))
        : null}
    </>
  );
};

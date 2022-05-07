import React, { useEffect, useState } from "react";
import { ListHeader } from "../components/List/ListHeader";
import { ListItems } from "../components/List/ListItems";
import axios from "axios";

export const List = () => {
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=kr-KO&page=1&region=kr`
      )
      .then((response) => {
        console.log(response);
        return setMovies(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ListHeader />
      {movies
        ? movies.map((movie) => (
            <ListItems
              key={movies.id}
              title={movies.title}
              release={movies.release_date}
              poster={movies.poster_path}
            />
          ))
        : null}
    </>
  );
};

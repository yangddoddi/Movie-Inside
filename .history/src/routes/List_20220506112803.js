import React, { useEffect, useState } from "react";
import { ListHeader } from "../components/List/ListHeader";
import { ListItems } from "../components/List/ListItems";
import { ListItem } from "../components/List/ListItem";
import axios from "axios";
// import { uuid } from "uuid";

export const List = () => {
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  console.log(movies);

  const getData = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=kr-ko&page=${page}&region=kr`
    );
    const movies = data.data.results;
    setMovies((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    getData();
  }, [page]);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=kr-ko&page=${page}&region=kr`
  //       )
  //       .then((response) => {
  //         console.log(response);
  //         return setMovies((prev) => [...prev, ...response.data.results]);
  //       })
  //       .catch((error) => console.log(error));
  //   }, [page]);

  return (
    <>
      <ListHeader />
      <ListItems>
        {movies
          ? movies.map((movie) => (
              <ListItem
                key={movie.id}
                title={movie.title}
                release={movie.release_date}
                poster={movie.poster_path}
              />
            ))
          : null}
      </ListItems>
    </>
  );
};

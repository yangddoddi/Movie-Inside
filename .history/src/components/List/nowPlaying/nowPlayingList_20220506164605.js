import React, { useEffect, useState } from "react";
import { ListHeader } from "../ListHeader";
import { ListItems } from "../ListItems";
import { ListItem } from "../ListItem";
import axios from "axios";
// import { uuid } from "uuid";

export const NowPlayingList = () => {
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    if (!page) {
      return;
    }
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=kr-ko&page=${page}&region=kr`
    );
    const movies = data.data.results;
    setMovieData([...movieData, ...movies]);
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    const observerCallback = (entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 50) {
        console.log('ㅎㅎ')
      }
    }
    const observerOption = () => {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }
    const observer = new IntersectionObserver()
  })

  return (
    <>
      <ListHeader listName={"상영 중인 영화"} />
      <ListItems>
        {movieData
          ? movieData.map((movie) => (
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

import React, { useEffect, useState, useRef } from "react";
import { ListHeader } from "../ListHeader";
import { ListItems } from "../ListItems";
import { ListItem } from "../ListItem";
import axios from "axios";
// // import { uuid } from "uuid";
import { Spinner } from "../../../common/loadingSpiner";

export const NowPlayingList = () => {
  const listEnd = useRef(null);
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getData = async (page) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=kr-ko&page=${page}&region=kr`
    );
    const movies = data.data.results;
    setMovieData([...movieData, ...movies]);
  };

  useEffect(() => {
    getData(page);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    if (!loading) {
      const observerCallback = (entries) => {
        const entry = entries[0];
        console.log(entry);
        if (entry.isIntersecting && entry.intersectionRatio > 1) {
          console.log("loading...");
          setPage((prev) => prev + 1);
        }
      };
      const observerOption = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
      const observer = new IntersectionObserver(
        observerCallback,
        observerOption
      );
      observer.observe(listEnd.current);
    }
  }, [loading]);

  return (
    <>
      <ListHeader listName={"상영 중인 영화"} />
      <ListItems ref={listEnd}>
        {!loading ? (
          movieData.map((movie) => (
            <ListItem
              key={movie.id}
              title={movie.title}
              release={movie.release_date}
              poster={movie.poster_path}
            />
          ))
        ) : (
          <Spinner />
        )}
      </ListItems>
    </>
  );
};

import React, { useEffect, useState, useRef } from "react";
import { ListHeader } from "../ListHeader";
import { ListItems } from "../ListItems";
import { ListItem } from "../ListItem";
import axios from "axios";
// // import { uuid } from "uuid";
import { Spinner } from "../../../common/loadingSpiner";

export const NowPlayingList = () => {
  const listContainer = useRef(null);
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=kr-ko&page=${page}&region=kr`
    );
    const movies = data.data.results;
    setMovieData([...movieData, ...movies]);
  };

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, [page]);

  useEffect(() => {
    if (!loading) {
      const observerCallback = (enties) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          console.log("ㅎㅎ");
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
      observer.observe(listContainer.current);
    }
  }, [loading]);

  return (
    <>
      <ListHeader listName={"상영 중인 영화"} />
      <ListItems ref={listContainer}>
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

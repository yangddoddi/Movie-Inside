import React, { useEffect, useState, useRef } from "react";
import { ListHeader } from "../ListHeader";
import { ListItems } from "../ListItems";
import { ListItem } from "../ListItem";
import axios from "axios";
import { Spinner } from "../../../common/loadingSpiner";

export const TopRating = () => {
  const listEnd = useRef(null);
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getData = async (page) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ko-kr&page=${page}&region=kr`
    );
    const movies = await data.data.results;
    setMovieData([...movieData, ...movies]);
    setLoading(false);
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  useEffect(() => {
    if (!loading) {
      const observerCallback = (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setPage((prev) => prev + 1);
          setSpinner(true);
        }
      };
      const observerOption = {
        root: null,
        rootMargin: "200px",
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
      <ListHeader listName={"최고 평점 영화"} />
      <ListItems ref={listEnd} setPage={setPage} page={page}>
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

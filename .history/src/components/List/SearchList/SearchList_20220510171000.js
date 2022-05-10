import React, { useEffect, useState, useRef } from "react";
import { ListHeader } from "../ListHeader";
import { ListItems } from "../ListItems";
import { ListItem } from "../ListItem";
import axios from "axios";
import { Spinner } from "../../../common/loadingSpiner";
import { useParams } from "react-router-dom";

export const SearchList = () => {
  const listEnd = useRef(null);
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const { search } = useParams();

  const getData = async (page) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=kr=KO&query=${search}&page=${page}&include_adult=true`
    );
    const movies = await data.data.results;
    setMovieData([...movieData, ...movies]);
    setLoading(false);
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  useEffect(() => {
    getData();
  }, [search]);

  useEffect(() => {
    if (!loading) {
      console.log(listEnd.current);
      const observerCallback = (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setPage((prev) => prev + 1);
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
      <ListHeader listName={"상영 중인 영화"} />
      <ListItems ref={listEnd} setPage={setPage} page={page}>
        {!loading ? (
          movieData.map((movie) => (
            <ListItem
              API_KEY={API_KEY}
              key={movie.id}
              id={movie.id}
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

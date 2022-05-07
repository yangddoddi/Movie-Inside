import React from "react";
import { ListHeader } from "../components/List/ListHeader";
import { ListItems } from "../components/List/ListItems";
import axios

export const List = () => {
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=%24%7BAPI_KEY%7D&language=ko-KR&page=1&region=korea`
      )
      .then((response) => {
        console.log(response);
        return setPopular(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ListHeader />
      <ListItems />
    </>
  );
};

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./Main";
import { Detail } from "../routes/Detail";
import { List } from "./List/nowPlaying/List";

export const RouteJS = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
};

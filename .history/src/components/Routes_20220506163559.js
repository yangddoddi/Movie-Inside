import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./Main";
import { Detail } from "./Detail/Detail";
import { nowPlayingList } from "./List/nowPlaying/nowPlayingList";

export const RouteJS = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/list" element={<nowPlay />} />
    </Routes>
  );
};

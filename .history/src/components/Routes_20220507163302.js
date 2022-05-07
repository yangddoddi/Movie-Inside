import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./Main";
import { Detail } from "./Detail/Detail";
import { NowPlayingList } from "./List/nowPlaying/nowPlayingList";
import { PopularList } from "./List/popular/Popular";
import { TopRating } from "./List/TopRate/TopRating";
import { Upcoming } from "./List/Upcoming/Upcoming";

export const RouteJS = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/now_playing" element={<NowPlayingList />} />
      <Route path="/popular" element={<PopularList />} />
      <Route path="/toprating" element={<TopRating />} />
      <Route path="/upcoming" element={<Upcoming />} />
    </Routes>
  );
};

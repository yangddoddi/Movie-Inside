import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./Main";
import { Detail } from "./Detail/Detail";
import { NowPlayingList } from "./List/nowPlaying/nowPlayingList";
import { PopularList } from "./List/popular/Popular";
import { TopRating } from "./List/TopRating/TopRating";
import { Upcoming } from "./List/Upcoming/Upcoming";
import { SearchList } from "./List/SearchList/SearchList";

export const RouteJS = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/now_playing" element={<NowPlayingList />} />
      <Route path="/popular" element={<PopularList />} />
      <Route path="/toprating" element={<TopRating />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/search/:search" element={<SearchList />} />
    </Routes>
  );
};

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./Main";
import { Detail } from "./Detail/Detail";
import { NowPlayingList } from "./List/nowPlaying/nowPlayingList";
import { PopularList } from "./List/popular/Popular";
import { TopRate } from "./List/TopRate/TopRate";
import { Upcoming } from "./List/Upcoming/Upcoming";

export const RouteJS = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/now_playing" element={<NowPlayingList />} />
      <Route path="/popular" element={<PopularList />} />
    </Routes>
  );
};

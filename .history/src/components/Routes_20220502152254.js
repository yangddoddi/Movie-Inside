import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "../routes/Main";
import { Detail } from "../routes/Detail";

export const RouteJS = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

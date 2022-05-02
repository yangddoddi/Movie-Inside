import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "../routes/Main";
import { Detail } from "../routes/detail";

export const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Detail:id" element={<Detail />} />
    </Routes>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../views/HomePage";
import NewTagPage from "../views/NewTagPage";
import SearchPage from "../views/SearchPage";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/new-tag" element={<NewTagPage />} />
    </Routes>
  );
};

export default Routers;

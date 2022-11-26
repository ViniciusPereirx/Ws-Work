import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import Newcar from "../components/Newcar/Newcar";
import Search from "../components/Search/Search";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route path="/newcar" element={<Newcar />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Root;

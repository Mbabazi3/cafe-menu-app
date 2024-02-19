import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMeals from "./pages/AllMeals";
import Lunch from "./pages/Lunch";
import Shakes from "./pages/Shakes";
import BreakFast from "./pages/BreakFast";
import Header from "./Header";

const Links = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllMeals />} />
        <Route path="/breakfast" element={<BreakFast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/shakes" element={<Shakes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Links;

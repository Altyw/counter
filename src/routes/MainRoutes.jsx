import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import MainPage from "../pages/MainPage";
import CounterPage from "../pages/CounterPage";
import ParagraphPage from "../pages/ParagraphPage";

const MainRoutes = ({ counter, increment, decrement }) => {
  return (
    <Routes>
      <Route element={<MainLayOut />}>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/count"
          element={
            <CounterPage
              counter={counter}
              increment={increment}
              decrement={decrement}
            />
          }
        />
        <Route path="/paragraph" element={<ParagraphPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;

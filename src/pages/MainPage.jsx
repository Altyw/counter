import React from "react";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        height: "500px",
      }}
    >
      <NavLink to="/count">Counter</NavLink>
      <NavLink to="/paragraph">Paragraph</NavLink>
    </div>
  );
};

export default MainPage;

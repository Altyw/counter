import React from "react";
import { useNavigate } from "react-router-dom";

const Counter = ({ counter, increment, decrement }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: "70px",
          padding: "5px",
          margin: "20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "10%",
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <button
        style={{
          width: "50px",
          padding: "5px",
          margin: "20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "10%",
          cursor: "pointer",
        }}
        onClick={() => {
          decrement();
        }}
      >
        -1
      </button>
      <h4>{counter}</h4>
      <button
        style={{
          width: "50px",
          padding: "5px",
          margin: "20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "10%",
          cursor: "pointer",
        }}
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Counter;

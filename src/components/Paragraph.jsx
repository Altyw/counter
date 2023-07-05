import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Paragraph = () => {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState("");
  function addText(text) {
    if (text !== "") {
      setInputVal(text);
    }
  }
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addText(e.target.elements[0].value);
        }}
      >
        <input type="text" />
        <button
          style={{
            width: "70px",
            padding: "5px",
            margin: "20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "10%",
            cursor: "pointer",
          }}
        >
          add text
        </button>
        <p>{inputVal}</p>
      </form>
    </div>
  );
};

export default Paragraph;

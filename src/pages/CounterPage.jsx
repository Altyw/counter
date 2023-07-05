import React from "react";
import Counter from "../components/Counter";

const CounterPage = ({ counter, increment, decrement }) => {
  return (
    <Counter counter={counter} increment={increment} decrement={decrement} />
  );
};

export default CounterPage;

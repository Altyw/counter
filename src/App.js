import { useState } from "react";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <MainRoutes counter={counter} increment={increment} decrement={decrement} />
  );
}

export default App;

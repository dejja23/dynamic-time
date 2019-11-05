import React from "react";
import Timer from "./timer";

import "./App.css";

function App() {
  const time = 10000000;

  return <Timer time={time} />;
}

export default App;

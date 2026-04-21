import React, { useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay.js";

const App = () => {
  let [weather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });
  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;

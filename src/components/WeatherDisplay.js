import React from "react";
export default function WeatherDisplay({ weather }) {
  let { temperature, conditions } = weather;
  const style = {
    color: temperature > 20 ? "red" : "blue",
  };
  return (
    <>
      <p>
        Temparature: <span style={style}>{temperature}</span>
      </p>
      <p>Conditions: {conditions}</p>
    </>
  );
}

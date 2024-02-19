import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function ConverToCel(evt) {
    evt.preventDefault();
    if (unit === "fahrenheit") setUnit("celsius");
    if (unit === "celsius") setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |
          <a href="/" onClick={ConverToCel}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsiusTemp = (props.fahrenheit - 32) * 5/9
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celsiusTemp)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={ConverToCel}>
            °F
          </a>
        </span>
      </div>
    );
  }
}

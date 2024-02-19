import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    let res = response.data;
    setWeatherData({
        iconUrl:"https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png",
        descript:res.weather[0].description,
        temp:res.main.temp,
        humidity: res.main.humidity,
        wind: res.wind.speed,
        city: res.name
    })
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter City"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>
        <h1> New York</h1>
        <ul>
          <li>Wed 07:09</li>
          <li>{weatherData.descript}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl}></img>
            {Math.round(weatherData.temp)}
          </div>
          <div className="col-6">
            <ul>
              <li >humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}%</li>
              <li>Clody</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "68dec89f5577f56bb12d71530e92be60";
    let city = "new York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}

import React, { useState } from "react";
import WeatherInfo from "./weatherinfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [forecastData, setForecastData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response)
    let res = response.data;
    setWeatherData({
      ready: true,
      iconUrl: `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
      descript: res.weather[0].description,
      temp: res.main.temp,
      date: new Date(res.dt * 1000),
      humidity: res.main.humidity,
      wind: res.wind.speed,
      city: res.name,
    });
  }

/////////////////////////////////////////////////////
  function handelForecast(response) {
    let res = response.data.daily;
    // console.log(res);
    setForecastData(
      { ready: true,
        data : res }
    );
  }


  function search() {
      const apiKey = "68dec89f5577f56bb12d71530e92be60";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);

    const key = "9afc5146bea2t731f3ee989f0a290f4o";
    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=imperial`;
    axios.get(forecastUrl).then(handelForecast);


    console.log(city)
    // console.log(forecastUrl);

  }
  function handlesubmit(event) {
    event.preventDefault();
    search();
    //search for city
  }
  function handlecitychange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Weatherlayer">
          <form onSubmit={handlesubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter City.."
                  className="form-control"
                  autoFocus="on"
                  onChange={handlecitychange}
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

          <WeatherInfo data={weatherData} />
          <WeatherForecast forecastData={forecastData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

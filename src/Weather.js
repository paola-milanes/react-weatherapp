import React, { useState } from "react";
import WeatherInfo from "./weatherinfo";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response) {
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
  function search(){
     const apiKey = "68dec89f5577f56bb12d71530e92be60";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    
  }
  function handlesubmit(event){
    event.preventDefault();
    search(city);
    //search for city
  }
  function handlecitychange(event){
    setCity(event.target.value)
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
        </div>
      </div>
    );
  } else {
    search()
    return "Loading...";
  }
}

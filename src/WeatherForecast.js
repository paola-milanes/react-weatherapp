import React, { useState } from "react";
import "./WeatherForecast.css"




export default function WeatherForecast(props){
    // console.log(props);
    let cutDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    // let[forecasts, setForecasts] = useState(null)
    // let [loaded, setLoaded] = useState(false);
    
      return (
        <div className="WeatherForecast">
          <div id="slider" className="forecastContainer">
            {props.forecastData.ready ? (
              props.forecastData.data.slice(0, 7).map((data, index) => (
                <div>
                  <div className="WeatherForecast-day"> {cutDays[index]}</div>
                  <img
                    src={data.condition.icon_url}
                    className="float-left "
                    alt="icon"
                  />
                  <div className="Weatherprops.forecastData-temp">
                    <span className="Weather-temp-max">
                      {Math.round(data.temperature.maximum)}°
                    </span>
                    <span className="Weather-temp-min">
                      {Math.round(data.temperature.minimum)}°
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <h1>loading</h1>
            )}
          </div>
        </div>
      );
    }
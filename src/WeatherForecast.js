import React, { useState } from "react";
import "./WeatherForecast.css"
// import { FormatedForecatDate } from "./FormatedForecastDate";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    console.log(props);
    // let[forecasts, setForecasts] = useState(null)
    // let [loaded, setLoaded] = useState(false);
    
      return (
        <div className="WeatherForecast">
          <div className="forecastContainer">
            {props.forecastData.ready ? (
              props.forecastData.data.slice(0, 5).map((data) => (
                <div>
                  {/* <div className="WeatherForecast-day"> tue</div> */}
                  <img
                    src={data.condition.icon_url}
                    className="float-left "
                    alt="icon"
                  />
                  <div className="Weatherprops.forecastData-temp">
                    <span className="Weather-temp-max">
                      {Math.round(data.temperature.maximum)}
                    </span>
                    <span className="Weather-temp-min">
                      {Math.round(data.temperature.minimum)}
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
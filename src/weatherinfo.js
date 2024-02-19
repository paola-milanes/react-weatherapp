import React from "react";
import { FormatedDate } from "./FormatedDate";
import WeatherTemperature from "./WeatherTemp";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="cityName"> {props.data.city}</h1>
      <ul>
        <li>
          <FormatedDate date={props.data.date}></FormatedDate>
        </li>
        <li className="text-capitalize">{props.data.descript}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img src={props.data.iconUrl} className="float-left" />

            <div className="float-left">
              <WeatherTemperature fahrenheit={props.data.temp} />
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FormatedDate } from "./FormatedDate";
import WeatherTemperature from "./WeatherTemp";

// import Time  from "./Time";
export default function WeatherInfo(props) {
    // console.log(props)
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <h1 className="cityName"> {props.data.city}</h1>
        </div>
        <div className="col-4">
          <ul>
            <li>{/* <Time time={props.data.date}></Time> */}</li>
            <li>
              <FormatedDate date={props.data.date}></FormatedDate>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="clearfix">
            <div className="float-left currentTemp">
              <WeatherTemperature fahrenheit={props.data.temp} />
            </div>
            <img src={props.data.iconUrl}className="float-left icon " alt="icon" />
          </div>
          <div className="col-12">
            <ul>
              <li className="tempinfo">humidity: {props.data.humidity}%</li>
              <li className="tempinfo">Wind: {props.data.wind}%</li>
              <li className="tempinfo">{props.data.descript}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export function FormatedDate(props) {
  let days = [
    "sunday ",
    "Monday ",
    "Tuesday ",
    "Wednesday ",
    "Thursday ",
    "Friday ",
    "Saturday ",
  ];
  let months = [
    "January",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  let month = months[props.date.getMonth()]
  let date = props.date.getDate()
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;

  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="time">
      {" "}
      <span className="hours">
        {hours}:{minutes} <br></br>
      </span>
      <span>
      {day}, {month} {date} <br></br>
      </span>
    </div>
  );
}

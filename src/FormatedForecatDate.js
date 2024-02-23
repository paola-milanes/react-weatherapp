import React from "react";

export function FormatedForecatDate(props) {
  let days = ["Sun ", "Mon ", "Tue ", "Wed", "Thur ", "Fri ", "Sat"];
  let date = props.date.getDate();
  let day = days[props.date.getDay()];
  return (
    <div>
      <span>{day[days]}</span>
    </div>
  );
}

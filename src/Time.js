import React from "react";

export function Time(props) {
  let hours = props.time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {" "}
      {hours}:{minutes} <br></br>
    </div>
  );
}

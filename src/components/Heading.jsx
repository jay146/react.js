import React from "react";

function Heading() {
  const currentdate = new Date();
  const currentTime = currentdate.getHours();
  const currentMin = currentdate.getMinutes();

  return <h1>My favorite DIshes</h1>;
}
export default Heading;

import React from "react";

function Datee() {
  const currentdate = new Date();
  const currentTime = currentdate.getHours();
  const currentMin = currentdate.getMinutes();
  let greeting;

  const customStyle = {
    color: ""
  };
  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
  // return  <h1>Todays date is {currentTime + ":" + currentMin}</h1>
}

export default Datee;

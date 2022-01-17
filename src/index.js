// import ReactDOM from "react-dom";
// import react from "react";
// const name = "krishna";
// const randomno = Math.random() * 10;
// const img1 = "https://picsum.photos/200";
// const img2 = "https://picsum.photos/200/300";
// const customStyle = { color: "green" };
// ReactDOM.render(
//   <div>
//     <h1>hello {name}</h1>
//     <p>how was u doing today!!!</p>
//     <h1>Random no is {Math.floor(randomno)}</h1>

//     <h1 className="heading" contentEditable="true" spellCheck="true">
//       My favorite food
//     </h1>
//     <ul>
//       <li style={customStyle}>Mango</li>
//       <li>strawberry</li>
//       <li>pineapple</li>
//     </ul>
//     <div className=".img-center">
//       <img class="img-size" align="left" src={img1} />
//       <img class="img-size" align="right" src={img2} />
//       <img class="img-size" align="left" src={img1 + "?grayscale"} />
//       <img class="img-size" align="right" src={img2 + "?grayscale"} />
//     </div>
//   </div>,

//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
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
  greeting = "Good Evening";
  customStyle.color = "green";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1>Todays date is {currentTime + ":" + currentMin}</h1>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);

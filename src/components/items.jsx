import React from "react";

function Items() {
  const customStyle = {
    color: "orange"
  };
  return (
    <ul>
      <li style={customStyle}>Mango</li>
      <li style={customStyle}>strawberry</li>
      <li style={customStyle}>pineapple</li>
    </ul>
  );
}

export default Items;

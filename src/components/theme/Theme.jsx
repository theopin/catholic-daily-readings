import React from "react";
import "./Theme.css"; // Component-specific CSS

function Theme(props) {
  // Component code here
  const formattedLine = props.title
    .replace(/<\/?[^>]+(>|$)/g, "")
    .split(/&#160;&#160;/g);
  const elements = formattedLine.map((part, index) => (
    <h3 key={index}>{part}</h3>
  ));
  return (
    <div className="theme">
      <div>{elements}</div>
      <h4>{props.date}</h4>
    </div>
  );
}

export default Theme;

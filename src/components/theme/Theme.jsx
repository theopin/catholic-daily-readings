import React from "react";
import "./Theme.css"; // Component-specific CSS

function Theme(props) {
  // Component code here

  return (
    <div className="theme">
    <h2>{props.title}</h2>
    <h4>{props.date}</h4> 
    </div>


  
  );
}

export default Theme;

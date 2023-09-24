import React from "react";
// import "./Reading.css"; // Component-specific CSS
import "../../commons/Commons.css"; // Common/shared CSS
import Header from "../header/Header";

function Reading(props) {
  // Component code here

  return (
    <div className="reading">
      <Header title={props.title} verse={props.verse}/>

      <div className="content">
        {props.text}
      </div>
    </div>
  );
}

export default Reading;

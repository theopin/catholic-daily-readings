import React from "react";
// import "./Reading.css"; // Component-specific CSS
import "../../commons/Commons.css"; // Common/shared CSS
import Header from "../header/Header";

function Reading(props) {
  // Component code here

  return (
    <div class="reading">
      <Header title={props.title} verse={props.verse}/>

      <div class="content">
        <p>
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default Reading;

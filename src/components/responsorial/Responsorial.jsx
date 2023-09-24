import React from "react";
// import "./Responsorial.css"; // Component-specific CSS
import "../../commons/Commons.css"; // Common/shared CSS
import Header from "../header/Header";

function Responsorial(props) {
  // Component code here

  return (
    <div class="responsorial">
      <Header title={props.title} verse={props.verse}/>
      <div class="content">
        {/* <p class="response">R. Alleluia, alleluia.</p>

        <p>Open our hearts, O Lord,to listen to the words of your Son.</p>

        <p class="response">R. Alleluia, alleluia.</p> */}
        {props.text}
        
      </div>
    </div>
  );
}

export default Responsorial;

import React from "react";
// import "./Responsorial.css"; // Component-specific CSS
import "../../commons/Commons.css"; // Common/shared CSS
import Header from "../header/Header";

function Responsorial() {
  // Component code here

  return (
    <div class="responsorial">
      <Header />
      <div class="content">
        <p class="response">R. Alleluia, alleluia.</p>

        <p>Open our hearts, O Lord,to listen to the words of your Son.</p>

        <p class="response">R. Alleluia, alleluia.</p>
      </div>
    </div>
  );
}

export default Responsorial;

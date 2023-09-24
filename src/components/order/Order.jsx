import React from "react";
import Reading from "../reading/Reading";
import "../../commons/Commons.css"; // Common/shared CSS
import Responsorial from "../responsorial/Responsorial";
import Celebration from "../../title/Celebration";

function Order() {

  return (
    <div class="container">
      <Celebration/>
      <Reading />
      <Responsorial />
      <Reading />
      <Responsorial />
      <Reading />
    </div>
  );
}

export default Order;

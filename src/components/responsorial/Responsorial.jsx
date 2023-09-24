import React from "react";
import "./Responsorial.css"; // Component-specific CSS
import "../../commons/Commons.css"; // Common/shared CSS
import Header from "../header/Header";

function Responsorial(props) {

  const lines = props.text.split('\n');

  const formattedResponse = [];
  let formattedVerse = [];

  lines.forEach((line, index) => {
    if (line.startsWith('R. ')) {
      if(formattedVerse.length > 0) {
        formattedResponse.push(
          <div key={"R" + props.title + index} className="r-verse">
          {formattedVerse}
          </div>
        )
        formattedVerse = [];
      }

      formattedResponse.push(
              <div key={"V" + props.title + index} className="response">
              {line.replace(/\(\d+[a-zA-Z]?\)/g, '')}
              </div>
            )
    } else {
      formattedVerse.push(
        <div key={props.title + index}>
        {line}
        </div>
      )
    }
  })

  return (
    <div className="responsorial">
      <Header title={props.title} verse={props.verse}/>
      <div className="content">
        {formattedResponse} 

      </div>
    </div>
  );
}

export default Responsorial;

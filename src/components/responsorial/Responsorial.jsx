import React from "react";
import "./Responsorial.css"; // Component-specific CSS
import "../../commons/Commons.css"; // Common/shared CSS
import Header from "../header/Header";

function Responsorial(props) {
  const lines = decodeHtmlEntities(props.text)
  .match(/[^.!?]+[.!?'"”’]*(?=\s|$)/g)
        .filter(sentence => sentence.trim() !== '');
  const formattedResponse = [];
  let formattedVerse = [];

  let response = ""

  lines.forEach((line, index) => {
    if (index === 0 || response.toUpperCase().includes(line.toUpperCase().trim())) {
      if(index !== 0) {
        formattedResponse.push(
          <div key={"R" + props.title + index} className="r-verse">
          {formattedVerse}
          </div>
        )
        formattedVerse = [];
      } else {
        response = line.replace(/\(\d+[a-zA-Z]?\)/g, '').trim() 
      }

      formattedResponse.push(
              <div key={"V" + props.title + index} className="response">
              {"R. " + line.replace(/\(\d+[a-zA-Z]?\)/g, '').trim() }
              </div>
            )

      
    } else {
      formattedVerse.push(
        <div key={props.title + index}>
        {line.trim()}
        </div>
      )
    }
  })

  return (
    <div className="responsorial">
      <Header title={props.title} verse={props.verse} summary= {props.summary}/>
      <div className="content">
        {formattedResponse} 

      </div>
    </div>
  );
}

function decodeHtmlEntities(htmlString) {
  // Create a temporary DOM element
  const textContentArray = [];
  const tempElement = document.createElement('div');
  
  // Set the HTML content of the temporary element
  tempElement.innerHTML = htmlString;

  tempElement.querySelectorAll('div').forEach(div => {
    textContentArray.push(div.textContent.trim());
  });
  
  // Join the text content together into a single string
  return textContentArray.join(' ');
}

export default Responsorial;

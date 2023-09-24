import React from "react";
import "./Responsorial.css"; // Component-specific CSS
import "../../commons/Commons.css"; // Common/shared CSS
import Header from "../header/Header";

function Responsorial(props) {
  
  const lines = decodeHtmlEntities(props.text)
        .split(/(?<=[.!?])\s*(?=[A-Z])/)
        .filter(sentence => sentence.trim() !== '');
  console.log(lines)
  const formattedResponse = [];
  let formattedVerse = [];

  let response = ""

  lines.forEach((line, index) => {
    if (index === 0 || response.includes(line)) {
      if(index !== 0) {
        formattedResponse.push(
          <div key={"R" + props.title + index} className="r-verse">
          {formattedVerse}
          </div>
        )
        formattedVerse = [];
      } else {
        response = line.replace(/\(\d+[a-zA-Z]?\)/g, '')
      }

      formattedResponse.push(
              <div key={"V" + props.title + index} className="response">
              {"R. " + line.replace(/\(\d+[a-zA-Z]?\)/g, '')}
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

function decodeHtmlEntities(htmlString) {
  // Create a temporary DOM element
  const tempElement = document.createElement('div');
  
  // Set the HTML content of the temporary element
  tempElement.innerHTML = htmlString;

  // Retrieve the decoded text content
  const decodedString = tempElement.textContent;

  return decodedString;
}

export default Responsorial;

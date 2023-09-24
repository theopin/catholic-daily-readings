import React from "react";
// import "./Reading.css"; // Component-specific CSS
import "../../commons/Commons.css"; // Common/shared CSS
import Header from "../header/Header";

function Reading(props) {
  // Component code here
    const decodedString = decodeHtmlEntities(props.text)
    console.log(101, decodedString)
    const paragraphs = splitTextIntoParagraphs(
      
      decodedString
        .split(/(?<=[.!?])\s*(?=[A-Z])/)
        .filter(sentence => sentence.trim() !== ''));
        
      console.log(paragraphs)
  const formattedParagraphs = paragraphs.map((paragraph, index) => (
    <p key={props.title+index} className="content">
      {paragraph}
    </p>
  ));

  return (
    <div className="reading">
      <Header title={props.title} verse={props.verse}/>

      <div className="content">
        {formattedParagraphs}
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



function splitTextIntoParagraphs(sentences) {
  const newParagraphs = []
  let currParagraph = ""

  sentences.forEach((sentence, index) => {
    if(sentence === "") {
      newParagraphs.push(currParagraph.trimEnd());
      return
    }

    // Word count of current para at most 50 or curr para is not in middle of a inner dialogue
    if ((currParagraph + sentence).split(" ").length <= 90) {
      currParagraph += sentence + " ";

      if (index === sentences.length - 1) {
        newParagraphs.push(currParagraph.trimEnd());
      }
    }
    
    else {
      if (index === sentences.length - 1) {
        currParagraph += sentence + " ";
        newParagraphs.push(currParagraph.trimEnd());
      } else {
        newParagraphs.push(currParagraph.trimEnd());
        currParagraph = sentence + " ";
      }
    }
    
  });

  return newParagraphs
}



export default Reading;

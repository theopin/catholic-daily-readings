import React from "react";
// import "./Reading.css"; // Component-specific CSS
import "../../commons/Commons.css"; // Common/shared CSS
import Header from "../header/Header";

function Reading(props) {
  // Component code here

    const paragraphs = splitTextIntoParagraphs(
      props.text
        .replace(/\n/g, ' ')
        .split(/(?<=[.!?] |[.!?]["']|[.!?]['"])/)
        .filter(sentence => sentence.trim() !== ''));


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
    
    console.log(currParagraph, newParagraphs)
  });

  return newParagraphs
}



export default Reading;

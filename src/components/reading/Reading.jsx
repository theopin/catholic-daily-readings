import React from "react";
// import "./Reading.css"; // Component-specific CSS
import "../../commons/Commons.css"; // Common/shared CSS
import Header from "../header/Header";

function Reading(props) {
  // Component code here

  const paragraphs = splitTextIntoParagraphs((props.text + "\n").split(".\n"));
  // console.log(props.text)

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
  console.log(sentences)
  sentences.forEach((sentence, index) => {
    if(sentence === "") {
      newParagraphs.push(currParagraph.trimEnd());
      return
    }

    // Word count of current para at most 50 or curr para is not in middle of a inner dialogue
    if ((currParagraph + sentence).split(" ").length <= 50 || (currParagraph.split("'").length - 1) % 2 !== 0) {
      console.log(1, index, sentences.length, sentence)
      currParagraph += sentence.endsWith("\n") ? sentence : sentence + ". ";

      if (index === sentences.length - 1) {
        console.log(11, currParagraph.split(" ").length - 1)
        newParagraphs.push(currParagraph.trimEnd());
      }
    }
    
    else {
      if (index === sentences.length - 1) {
        console.log(2, index, sentences.length, sentence)
        currParagraph += sentence.endsWith("\n") ? sentence : sentence + ". ";
        console.log(currParagraph.split(" ").length - 1)
        newParagraphs.push(currParagraph.trimEnd());
      } else {
        console.log(22, index, sentences.length, sentence)
        console.log(currParagraph.split(" ").length - 1)
        newParagraphs.push(currParagraph.trimEnd());
        currParagraph = sentence.endsWith("\n") ? sentence : sentence + ". ";
      }
    }
    
    console.log(currParagraph, newParagraphs)
  });

  return newParagraphs
}



export default Reading;

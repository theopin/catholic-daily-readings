import React from "react";
import "../../commons/Commons.css"; // Common/shared CSS
import Header from "../header/Header";

function Reading(props) {
  // Component code here
  const formattedParagraphs = createFormattedParagraphs(props);

  return (
    <div className="reading">
      <Header title={props.title} verse={props.verse} summary={props.summary} />

      <div className="content">{formattedParagraphs}</div>
    </div>
  );
}

function createFormattedParagraphs(props) {
  const decodedString = decodeHtmlEntities(props.text);
  const paragraphs = splitTextIntoParagraphs(
    decodedString
      .match(/[^.!?]+[.!?'"”’]*(?=\s|$)/g)
      .filter((sentence) => sentence.trim() !== "")
  );
  const formattedParagraphs = paragraphs.map((paragraph, index) => (
    <p key={props.title + index} className="content">
      {paragraph}
    </p>
  ));
  return formattedParagraphs;
}

function decodeHtmlEntities(htmlString) {
  // Create a temporary DOM element
  const textContentArray = [];
  const tempElement = document.createElement("div");

  // Set the HTML content of the temporary element
  tempElement.innerHTML = htmlString;

  tempElement.querySelectorAll("div").forEach((div) => {
    textContentArray.push(div.textContent.trim());
  });

  // Join the text content together into a single string
  return textContentArray.join(" ");
}

function splitTextIntoParagraphs(sentences) {
  const newParagraphs = [];
  let currParagraph = "";
  sentences.forEach((sentence, index) => {
    if (sentence === "") {
      newParagraphs.push(currParagraph.trimEnd());
      return;
    }

    // Word count of current para at most 50 or curr para is not in middle of a inner dialogue
    if ((currParagraph + sentence).split(" ").length <= 60) {
      currParagraph += sentence + " ";

      if (index === sentences.length - 1) {
        newParagraphs.push(currParagraph.trimEnd());
      }
    } else {
      if (index === sentences.length - 1) {
        currParagraph += sentence + " ";
        newParagraphs.push(currParagraph.trimEnd());
      } else if (currParagraph === "") {
        newParagraphs.push(sentence.trimEnd());
      } else {
        newParagraphs.push(currParagraph.trimEnd());
        currParagraph = sentence + " ";
      }
    }
  });

  return newParagraphs;
}

export default Reading;

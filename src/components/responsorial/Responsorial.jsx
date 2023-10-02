import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';

import Title from '../title/Title';
import './Responsorial.css'; // Component-specific CSS
import '../../commons/Commons.css'; // Common/shared CSS

function decodeHtmlEntities(htmlString) {
  // Create a temporary DOM element
  const textContentArray = [];
  const tempElement = document.createElement('div');

  // Set the HTML content of the temporary element
  tempElement.innerHTML = htmlString;

  tempElement.querySelectorAll('div').forEach((div) => {
    textContentArray.push(div.textContent.trim());
  });

  // Join the text content together into a single string
  return textContentArray.join(' ');
}

function combineShortSentences(sentences, minLength) {
  const combinedSentences = [];
  let currentSentence = '';

  sentences.forEach((sentence) => {
    if ((currentSentence.length + sentence.length) < minLength) {
      // Add the sentence to the currentSentence variable
      if (currentSentence.length > 0) {
        currentSentence += ` ${sentence}`;
      } else {
        currentSentence = sentence;
      }
    } else {
      // Combine the current sentence with the next one
      if (currentSentence.length > 0) {
        combinedSentences.push(currentSentence);
      }
      currentSentence = sentence;
    }
  });

  // Add the last remaining sentence if it's not empty
  if (currentSentence.length > 0) {
    combinedSentences.push(currentSentence);
  }

  return combinedSentences;
}

function createFormattedResponse(lines, props) {
  const formattedResponse = [];
  let formattedVerse = [];

  let response = '';

  lines.forEach((line, index) => {
    // Condition 1: line is a response and is not part of the verse
    if (
      index === 0
      || (response.includes(line.trim().toUpperCase())
        && !response.includes(lines[index - 1].trim().toUpperCase()))
    ) {
      // Condition 1a: line is the not the first time a response is being encountered
      if (index !== 0) {
        formattedResponse.push(
          <div key={`R${props.title}${index + 1}`} className="r-verse">
            {formattedVerse}
          </div>,
        );
        // reset the verse paragraph
        formattedVerse = [];
      } else {
        // Condition 1b: line is the first time a response is being encountered
        response = line
          .replace(/\(\d+[a-zA-Z]?\)/g, '')
          .trim()
          .toUpperCase();
      }

      formattedResponse.push(
        <div key={`V${props.title}${index + 1}`} className="response">
          {`R. ${he.decode(line).trim()}`}
        </div>,
      );
    } else if (line.trim().startsWith('or') && response.includes(lines[index - 1].trim().toUpperCase())) {
      // Condition 2: There is an alternative response (starting with or) coming after the response
      formattedResponse.push(
        <div key={`V${props.title}${index + 1}`} className="response">
          {`or R. ${he.decode(line.split('or')[1]).trim()}`}
        </div>,
      );
    } else {
      // Condition 3: The line is part of the verse paragraph
      const decodedLine = he.decode(line).trim();

      if (decodedLine.length < 70) {
        // Condition 3a: Process the line without splitting it
        formattedVerse.push(<div key={`VL-${index + 1}`}>{he.decode(decodedLine).trim()}</div>);
      } else {
        // Condition 3b: Split the line (combine small splits) and then feed it as divs
        const sentences = decodedLine.match(/[^;:,]+[;:,.!?'"”’)]*(?=\s|$)/g);

        const formattedSentences = combineShortSentences(sentences, 55);

        formattedSentences.forEach((phrase, phraseIndex) => {
          formattedVerse.push(
            <div key={`VL-${index + 1}-${phraseIndex + 1}`}>
              {phrase}
            </div>,
          );
        });
      }
    }
  });
  return formattedResponse;
}

function Responsorial(props) {
  const { title, verse, text } = props;
  const lines = text
    && decodeHtmlEntities(text)
      .match(/[^.!?]+[.!?'"”’)]*(?=\s|$)/g)
      .filter((sentence) => sentence.trim() !== '');

  const formattedResponse = text && createFormattedResponse(lines, props);

  return (
    <div className="responsorial">
      <Title title={title} verse={verse} summary="" />
      {text && <div className="content">{formattedResponse}</div>}
    </div>
  );
}

Responsorial.propTypes = {
  title: PropTypes.string.isRequired,
  verse: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Responsorial;

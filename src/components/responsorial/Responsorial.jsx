import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';

import Title from '../title/Title';
import './Responsorial.css'; // Component-specific CSS
import '../../commons/Commons.css'; // Common/shared CSS

// function combineShortSentences(sentences, minLength) {
//   const combinedSentences = [];
//   let currentSentence = '';

//   sentences.forEach((sentence) => {
//     if ((currentSentence.length + sentence.length) < minLength) {
//       // Add the sentence to the currentSentence variable
//       if (currentSentence.length > 0) {
//         currentSentence += ` ${sentence}`;
//       } else {
//         currentSentence = sentence;
//       }
//     } else {
//       // Combine the current sentence with the next one
//       if (currentSentence.length > 0) {
//         combinedSentences.push(currentSentence);
//       }
//       currentSentence = sentence;
//     }
//   });

//   // Add the last remaining sentence if it's not empty
//   if (currentSentence.length > 0) {
//     combinedSentences.push(currentSentence);
//   }

//   return combinedSentences;
// }

function createFormattedResponse(response, paragraphs, props) {
  let customResponse = response;
  const formattedResponse = [];

  if (response) {
    formattedResponse.push(
      <div key={`V${props.title}-1${0}`} id={`V${props.title}-1${0}`} className="response">
        {`R. ${he.decode(customResponse).trim()}`}
      </div>,
    );
  } else {
    formattedResponse.push(
      <div key={`V${props.title}-2${0}`} id={`V${props.title}-2${0}`} className="response">
        {`R. ${he.decode(paragraphs[0][0]).trim()}`}
      </div>,
    );
    customResponse = paragraphs[0][paragraphs[0].length - 1];
    paragraphs[0].shift();
    paragraphs[0].pop();
  }

  paragraphs.forEach((paragraph, paragraphIndex) => {
    // paste lines
    let splitIndex = -1;
    if (paragraph.length > 4) {
      splitIndex = Math.ceil(paragraph.length / 2);
    }

    paragraph.forEach((line, lineIndex) => {
      if (splitIndex > -1 && lineIndex === splitIndex) {
        formattedResponse.push(
          <br key={`BR-${props.title}-3${lineIndex + 1}-${paragraphIndex + 1}`} id={`BR-${props.title}-3${lineIndex + 1}-${paragraphIndex + 1}`} />,
        );
      }
      formattedResponse.push(
        <div key={`VL-${props.title}-3${lineIndex + 1}-${paragraphIndex + 1}`} id={`VL-${props.title}-3${lineIndex + 1}-${paragraphIndex + 1}`}>
          {line}
        </div>,
      );
    });

    formattedResponse.push(
      <div key={`V${props.title}-4${paragraphIndex + 1}`} id={`V${props.title}-4${paragraphIndex + 1}`} className="response">
        {`R. ${he.decode(customResponse).trim()}`}
      </div>,
    );
  });

  return formattedResponse;
}

function Responsorial(props) {
  const { title, verse, text } = props;

  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');

  // Extract the <i> tag without any tags as a single string
  const response = doc.querySelector('i') && doc.querySelector('i').textContent;
  // Initialize arrays
  const paragraphs = [];
  const divs = [...doc.querySelectorAll('div')];

  let currentParagraph = [];

  divs.forEach((div) => {
    if (div.querySelector('i')) {
      // If a new <i> tag is found, push the current paragraph and start a new one
      if (currentParagraph.length > 0) {
        paragraphs.push(currentParagraph);
      }
      currentParagraph = [];
    } else {
      // Exclude the <div> with <i> tag from the current paragraph
      currentParagraph.push(div.textContent.trim());
    }
  });

  // Push the last paragraph if it exists
  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph);
  }

  const formattedResponse = text && createFormattedResponse(response, paragraphs, props);

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

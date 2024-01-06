import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import Title from '../title/Title';

function createFormattedResponse(response, paragraphs, props) {
  let customResponse = response;
  const formattedResponse = [];

  if (response) {
    formattedResponse.push(
      <p key={`V${props.title}-1${0}`} id={`V${props.title}-1${0}`} className="fw-bold">
        {`R. ${he.decode(customResponse).trim()}`}
      </p>,
    );
  } else {
    formattedResponse.push(
      <p key={`V${props.title}-2${0}`} id={`V${props.title}-2${0}`} className="fw-bold">
        {`R. ${he.decode(paragraphs[0][0]).trim()}`}
      </p>,
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
      <br key={`BRE-${props.title}-${paragraphIndex + 1}`} id={`BRE-${props.title}-${paragraphIndex + 1}`} />,
      <p key={`V${props.title}-4${paragraphIndex + 1}`} id={`V${props.title}-4${paragraphIndex + 1}`} className="fw-bold">
        {`R. ${he.decode(customResponse).trim()}`}
      </p>,
    );
  });

  return formattedResponse;
}

function Responsorial(props) {
  const { title, verse, text } = props;
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');

  // Extract the <i> tag without any tags as a single string
  let response = doc.querySelector('i') && doc.querySelector('i').textContent;
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

      if (response && response.endsWith('or')) {
        response += ` ${div.textContent.trim()}`;
        return;
      }

      currentParagraph = [];
    } else {
      if (div.textContent.trim() === 'or') {
        if (!response.includes(' or ')) {
          response += ` ${div.textContent.trim()}`;
        }
        return;
      }

      if (response && response.endsWith('or')) {
        response += ` ${div.textContent.trim()}`;
        return;
      }

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
    <div>
      <Title title={title} verse={verse} summary="" />
      {text && <div>{formattedResponse}</div>}
    </div>
  );
}

Responsorial.propTypes = {
  title: PropTypes.string.isRequired,
  verse: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Responsorial;

import React from 'react';
import PropTypes from 'prop-types';

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

function createFormattedResponse(lines, props) {
  const formattedResponse = [];
  let formattedVerse = [];

  let response = '';

  lines.forEach((line, index) => {
    if (
      index === 0
      || (response.includes(line.trim().toUpperCase())
        && !response.includes(lines[index - 1].trim().toUpperCase()))
    ) {
      if (index !== 0) {
        formattedResponse.push(
          <div key={`R${props.title}${index + 1}`} className="r-verse">
            {formattedVerse}
          </div>,
        );
        formattedVerse = [];
      } else {
        response = line
          .replace(/\(\d+[a-zA-Z]?\)/g, '')
          .trim()
          .toUpperCase();
      }

      formattedResponse.push(
        <div key={`V${props.title}${index + 1}`} className="response">
          {`R. ${line.trim()}`}
        </div>,
      );
    } else if (line.trim().startsWith('or') && response.includes(lines[index - 1].trim().toUpperCase())) {
      formattedResponse.push(
        <div key={`V${props.title}${index + 1}`} className="response">
          {`or R. ${line.split('or')[1].trim()}`}
        </div>,
      );
    } else {
      formattedVerse.push(<div key={`VL-${index + 1}`}>{line.trim()}</div>);
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

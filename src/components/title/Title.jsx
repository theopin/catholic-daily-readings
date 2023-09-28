import React from 'react';
import PropTypes from 'prop-types';

import './Title.css'; // Component-specific CSS

function Title(props) {
  // Component code here
  const { title, verse, summary = null } = props;
  return (
    <div>
      <div className="header">
        <h3 className="title">{title}</h3>
        <h5 className="verse">
          {verse.replace(/(\D)(\d)/, '$1 $2').replace(/\bcf\.\s*/gi, '')}
        </h5>
      </div>
      <h5 className="summary">{summary}</h5>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  verse: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Title;

import React, { ReactPropTypes } from 'react';
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
  title: ReactPropTypes.string.isRequired,
  verse: ReactPropTypes.string.isRequired,
  summary: ReactPropTypes.string.isRequired,
};

export default Title;

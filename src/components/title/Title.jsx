import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';

function Title(props) {
  const { title, verse, summary } = props;
  return (
    <div>
      <div className="row justify-content-between">
        <p className="col-auto text-center fw-bold fs-5">
          {he.decode(title)}
        </p>
        <p className="col-auto text-center">
          {he.decode(verse).replace(/(\D)(\d)/, '$1 $2').replace(/\bcf\.\s*/gi, '')}
        </p>
      </div>
      {summary !== '' && <p className="fst-italic text-center fw-bold">{he.decode(summary)}</p>}
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  verse: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Title;

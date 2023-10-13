import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SundayToggle(props) {
  const {
    isSundayMode,
  } = props;

  return (
    <div className="col-auto">

      <Link
        to={
          isSundayMode
            ? '/readings'
            : '/readings/sunday'
        }
        onClick={() => {
          window.location.href = isSundayMode
            ? '/readings'
            : '/readings/sunday';
        }}
      >
        <button
          type="button"
          className="btn btn-primary"
        >
          {isSundayMode ? 'Current' : 'Next Sunday'}

        </button>
      </Link>
    </div>
  );
}

SundayToggle.propTypes = {
  isSundayMode: PropTypes.bool.isRequired,
};

export default SundayToggle;

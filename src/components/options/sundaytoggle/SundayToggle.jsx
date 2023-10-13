import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SundayToggle(props) {
  const {
    isSundayMode,
    selectedRegion,
  } = props;

  return (
    <div className="col-auto">

      <Link
        to={
          isSundayMode
            ? `/readings?region=${selectedRegion}`
            : `/readings/sunday/?region=${selectedRegion}`
        }
        onClick={() => {
          window.location.href = isSundayMode
            ? `/readings/?region=${selectedRegion}`
            : `/readings/sunday/?region=${selectedRegion}`;
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
  selectedRegion: PropTypes.string.isRequired,
};

export default SundayToggle;

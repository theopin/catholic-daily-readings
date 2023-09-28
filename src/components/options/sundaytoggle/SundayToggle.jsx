import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../Options.css';

function SundayToggle(props) {
  const {
    isSundayMode,
    selectedRegion,
  } = props;

  return (
    <div className="button custom-element">
      <Link
        to={
          isSundayMode
            ? `/?region=${selectedRegion}`
            : `/sunday/?region=${selectedRegion}`
        }
        onClick={() => {
          window.location.href = isSundayMode
            ? `/?region=${selectedRegion}`
            : `/sunday/?region=${selectedRegion}`;
        }}
      >
        <button type="button">{isSundayMode ? 'Sunday' : 'Weekday'}</button>
      </Link>
    </div>
  );
}

SundayToggle.propTypes = {
  isSundayMode: PropTypes.bool.isRequired,
  selectedRegion: PropTypes.string.isRequired,
};

export default SundayToggle;

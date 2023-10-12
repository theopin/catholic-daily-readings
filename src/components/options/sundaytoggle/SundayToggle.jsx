import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SundayToggle(props) {
  const {
    isSundayMode,
    selectedRegion,
  } = props;

  return (
    <div>
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
        <button type="button">{isSundayMode ? 'Current' : 'Next Sunday'}</button>
      </Link>
    </div>
  );
}

SundayToggle.propTypes = {
  isSundayMode: PropTypes.bool.isRequired,
  selectedRegion: PropTypes.string.isRequired,
};

export default SundayToggle;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function SundayToggle(props) {
  const {
    isSundayMode,
  } = props;

  const navigate = useNavigate();

  return (
    <div className="col-auto">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          navigate(isSundayMode
            ? '/mass/readings'
            : '/mass/readings/sunday');
        }}
      >
        {isSundayMode ? 'Current' : 'Next Sunday'}
      </button>

    </div>
  );
}

SundayToggle.propTypes = {
  isSundayMode: PropTypes.bool.isRequired,
};

export default SundayToggle;

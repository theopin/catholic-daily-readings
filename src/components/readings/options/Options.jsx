import React from 'react';
import PropTypes from 'prop-types';
import SundayToggle from './sundaytoggle/SundayToggle';
import DatePickerObject from './datepickerobject/DatePickerObject';

function Options(props) {
  const {
    isSundayMode,
  } = props;

  return (
    <div className="row justify-content-end d-print-none">

      <SundayToggle
        isSundayMode={isSundayMode}
      />

      {!isSundayMode && (<DatePickerObject />)}

    </div>
  );
}

Options.propTypes = {
  isSundayMode: PropTypes.bool.isRequired,
};

export default Options;

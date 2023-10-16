import React from 'react';
import PropTypes from 'prop-types';
import SundayToggle from './sundaytoggle/SundayToggle';
import DatePickerObject from './datepickerobject/DatePickerObject';

function Options(props) {
  const {
    isSundayMode,
    selectedDate,
    setSelectedDate,
  } = props;

  return (
    <div className="row justify-content-end d-print-none">

      <SundayToggle
        isSundayMode={isSundayMode}
      />

      {!isSundayMode && (
        <DatePickerObject
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}

    </div>
  );
}

Options.propTypes = {
  isSundayMode: PropTypes.bool.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

export default Options;

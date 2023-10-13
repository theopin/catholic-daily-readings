import React from 'react';
import PropTypes from 'prop-types';
import SundayToggle from './sundaytoggle/SundayToggle';
import DatePickerObject from './datepickerobject/DatePickerObject';

function Options(props) {
  const {
    isSundayMode,
    selectedRegion,
    selectedDate,
    setSelectedDate,
  } = props;

  return (
    <div className="row justify-content-end">

      <SundayToggle
        isSundayMode={isSundayMode}
        selectedRegion={selectedRegion}
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
  selectedRegion: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

export default Options;

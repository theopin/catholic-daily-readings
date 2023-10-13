import React from 'react';
import PropTypes from 'prop-types';
import Region from './region/Region';
import SundayToggle from './sundaytoggle/SundayToggle';
import DatePickerObject from './datepickerobject/DatePickerObject';

function Options(props) {
  const {
    isSundayMode,
    selectedRegion,
    setSelectedRegion,
    selectedDate,
    setSelectedDate,
  } = props;

  return (
    <div className="row justify-content-end">

      <SundayToggle
        isSundayMode={isSundayMode}
        selectedRegion={selectedRegion}
      />

      <Region
        isSundayMode={isSundayMode}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
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
  setSelectedRegion: PropTypes.func.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

export default Options;

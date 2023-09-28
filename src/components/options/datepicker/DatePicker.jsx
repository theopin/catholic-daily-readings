import React from 'react';
import PropTypes from 'prop-types';

import '../Options.css';

function DatePicker(props) {
  const { selectedDate, setSelectedDate } = props;

  const currentDate = new Date();
  const minDate = new Date();
  minDate.setDate(currentDate.getDate() - 3);

  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 8);

  return (
    <div className="custom-element">
      <input
        type="date"
        id="datepicker"
        onChange={(e) => setSelectedDate(e.target.value)}
        value={selectedDate}
        min={minDate.toISOString().split('T')[0]}
        max={maxDate.toISOString().split('T')[0]}
      />
    </div>
  );
}

DatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

export default DatePicker;

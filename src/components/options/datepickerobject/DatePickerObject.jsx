import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import DatePicker from 'react-datepicker';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-datepicker/dist/react-datepicker.css';

import '../Options.css';

function DatePickerObject(props) {
  const { selectedDate, setSelectedDate } = props;

  const currentDate = new Date();
  const minDate = new Date();
  minDate.setDate(currentDate.getDate() - 3);

  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 8);

  return (
    <div className="custom-element">
      <DatePicker
        selected={selectedDate}
        minDate={minDate}
        maxDate={maxDate}
        onChange={(date) => setSelectedDate(date)} // only when value has changed
      />
    </div>
  );
}

DatePickerObject.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

export default DatePickerObject;

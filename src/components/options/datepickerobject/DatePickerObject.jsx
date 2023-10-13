import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function DatePickerObject(props) {
  const { selectedDate, setSelectedDate } = props;

  const currentDate = new Date();

  const minDate = moment(new Date().setDate(currentDate.getDate() - 3)).format('YYYY-MM-DD');
  const maxDate = moment(new Date().setDate(currentDate.getDate() + 8)).format('YYYY-MM-DD');

  return (
    // <div className="custom-element">
    <div className="col-auto">

      <input
        className="form-control"
        type="date"
        min={minDate}
        max={maxDate}
        value={moment(selectedDate).format('YYYY-MM-DD')}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

    </div>
  );
}

DatePickerObject.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

export default DatePickerObject;

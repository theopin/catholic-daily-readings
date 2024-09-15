import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { changePickedDate } from '../../slices/PickedDateSlice';

function DatePickerObject() {
  const selectedDate = useSelector((state) => state.pickedDate.value);
  const dispatch = useDispatch();

  const currentDate = new Date();

  // Min and Max Date supported by Universalis API
  const minDate = moment(new Date().setDate(currentDate.getDate() - 3)).format('YYYY-MM-DD');
  const maxDate = moment(new Date().setDate(currentDate.getDate() + 8)).format('YYYY-MM-DD');

  return (
    <div className="col-auto">
      <input
        className="form-control"
        type="date"
        min={minDate}
        max={maxDate}
        value={selectedDate}
        onChange={(e) => dispatch(changePickedDate(moment(new Date(e.target.value)).format('YYYY-MM-DD')))}
      />
    </div>
  );
}

export default DatePickerObject;

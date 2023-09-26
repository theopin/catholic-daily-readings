import React from "react";
import "./DatePicker.css"; // Component-specific CSS
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function DatePicker(props) {
  // Component code here

  const currentDate = new Date();
  const minDate = new Date();
  minDate.setDate(currentDate.getDate() - 3);

  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 8);


  return (
    <div className="datepicker">
    <ReactDatePicker
      selected={props.selected}
      onChange={(date) => props.setSelectedDate(date)}
      minDate={minDate}
      maxDate={maxDate}
    />
  </div>
  );
}

export default DatePicker;

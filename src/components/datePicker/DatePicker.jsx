import React from "react";
import "./DatePicker.css"; // Component-specific CSS
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function DatePicker(props) {
  // Component code here

  return (
    <div className="datepicker">
    <ReactDatePicker
      selected={props.selected}
      onChange={(date) => props.setSelectedDate(date)}
      minDate={props.minDate}
      maxDate={props.maxDate}
    />
  </div>
  );
}

export default DatePicker;

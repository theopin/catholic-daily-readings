import React from "react";
import ReactDropdown from "react-dropdown";
import ReactDatePicker from "react-datepicker";

import "./Options.css"; // Component-specific CSS
import "react-dropdown/style.css";
import "react-datepicker/dist/react-datepicker.css";
function Options(props) {
  // Component code here

  const regionOptions = ["africa.kenya", "africa.madagascar", "africa.nigeria", "africa.safrica",
    "asia.india","asia.malaysia", "asia.singapore",
    "americas.brazil",
    "australia",
    "canada",
    "europe", "europe.belarus", "europe.denmark", "europe.england", "europe.estonia", "europe.finland", "europe.france", "europe.ireland",
    "europe.italy", "europe.malta", "europe.netherlands", "europe.poland", "europe.scotland", "europe.slovakia", "europe.sweden", "europe.wales",
    "meast.sarabia",
    "nz",
    "philippines",
    "usa"];
  const defaultOption = regionOptions[0];

  const currentDate = new Date();
  const minDate = new Date();
  minDate.setDate(currentDate.getDate() - 3);

  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 8);
  return (
    <div className="options">
      <ReactDropdown
        options={regionOptions}
        onChange={(region) => props.setSelectedRegion(region)}
        value={props.selectedRegion}
        placeholder="Select an option"
      />

      <ReactDatePicker
        selected={props.selectedDate}
        onChange={(date) => props.setSelectedDate(date)}
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  );
}

export default Options;

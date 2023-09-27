import React from "react";

import "./Options.css"; // Component-specific CSS
import { Link } from "react-router-dom";
function Options(props) {
  // Component code here

  const regionOptions = [
    { value: "africa.kenya", label: "Kenya" },
    { value: "africa.madagascar", label: "Madagascar" },
    { value: "africa.nigeria", label: "Nigeria" },
    { value: "africa.safrica", label: "South Africa" },
    { value: "asia.india", label: "India" },
    { value: "asia.malaysia", label: "Malaysia" },
    { value: "asia.singapore", label: "Singapore" },
    { value: "americas.brazil", label: "Brazil" },
    { value: "australia", label: "Australia" },
    { value: "canada", label: "Canada" },
    { value: "europe", label: "Europe" },
    { value: "europe.belarus", label: "Belarus" },
    { value: "europe.denmark", label: "Denmark" },
    { value: "europe.england", label: "England" },
    { value: "europe.estonia", label: "Estonia" },
    { value: "europe.finland", label: "Finland" },
    { value: "europe.france", label: "France" },
    { value: "europe.ireland", label: "Ireland" },
    { value: "europe.italy", label: "Italy" },
    { value: "europe.malta", label: "Malta" },
    { value: "europe.netherlands", label: "Netherlands" },
    { value: "europe.poland", label: "Poland" },
    { value: "europe.scotland", label: "Scotland" },
    { value: "europe.slovakia", label: "Slovakia" },
    { value: "europe.sweden", label: "Sweden" },
    { value: "europe.wales", label: "Wales" },
    { value: "meast.sarabia", label: "Saudi Arabia" },
    { value: "nz", label: "New Zealand" },
    { value: "philippines", label: "Philippines" },
    { value: "usa", label: "USA" },
  ];

  const currentDate = new Date();
  const minDate = new Date();
  minDate.setDate(currentDate.getDate() - 3);

  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 8);

  const regionOptionsDiv = regionOptions.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className="options">

{/* icon and name */}


      <div className="button custom-element">
        <Link to={props.date ? "/" : "/sunday"} onClick={() => window.location.href= props.date ? "/" : "/sunday"}>

          <button>{props.date ? "Weekday" : "Sunday"}</button>
        </Link>
      </div>

      <div className="custom-dropdown custom-element">
        <select
          id="region"
          onChange={(e) => props.setSelectedRegion(e.target.value)}
          value={props.selectedRegion}
        >
          {regionOptionsDiv}
        </select>
      </div>

      {!props.date && (
        <div className="custom-datepicker custom-element">
          <input
            type="date"
            id="datepicker"
            onChange={(e) => props.setSelectedDate(e.target.value)}
            value={props.selectedDate}
            min={minDate.toISOString().split("T")[0]}
            max={maxDate.toISOString().split("T")[0]}
          />
        </div>
      )}
    </div>
  );
}

export default Options;

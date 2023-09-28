import React from 'react';
import PropTypes from 'prop-types';

import * as reactRouterDom from 'react-router-dom';
import './Options.css'; // Component-specific CSS

function Options(props) {
  const {
    date = null, selectedRegion, setSelectedRegion, selectedDate, setSelectedDate,
  } = props;

  const regionOptions = [
    { value: 'africa.kenya', label: 'Kenya' },
    { value: 'africa.madagascar', label: 'Madagascar' },
    { value: 'africa.nigeria', label: 'Nigeria' },
    { value: 'africa.safrica', label: 'South Africa' },
    { value: 'asia.india', label: 'India' },
    { value: 'asia.malaysia', label: 'Malaysia' },
    { value: 'asia.singapore', label: 'Singapore' },
    { value: 'americas.brazil', label: 'Brazil' },
    { value: 'australia', label: 'Australia' },
    { value: 'canada', label: 'Canada' },
    { value: 'europe', label: 'Europe' },
    { value: 'europe.belarus', label: 'Belarus' },
    { value: 'europe.denmark', label: 'Denmark' },
    { value: 'europe.england', label: 'England' },
    { value: 'europe.estonia', label: 'Estonia' },
    { value: 'europe.finland', label: 'Finland' },
    { value: 'europe.france', label: 'France' },
    { value: 'europe.ireland', label: 'Ireland' },
    { value: 'europe.italy', label: 'Italy' },
    { value: 'europe.malta', label: 'Malta' },
    { value: 'europe.netherlands', label: 'Netherlands' },
    { value: 'europe.poland', label: 'Poland' },
    { value: 'europe.scotland', label: 'Scotland' },
    { value: 'europe.slovakia', label: 'Slovakia' },
    { value: 'europe.sweden', label: 'Sweden' },
    { value: 'europe.wales', label: 'Wales' },
    { value: 'meast.sarabia', label: 'Saudi Arabia' },
    { value: 'nz', label: 'New Zealand' },
    { value: 'philippines', label: 'Philippines' },
    { value: 'usa', label: 'USA' },
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
        <reactRouterDom.Link
          to={date ? '/' : '/sunday'}
          onClick={() => {
            window.location.href = date ? '/' : '/sunday';
          }}
        >
          <button type="button">{date ? 'Weekday' : 'Sunday'}</button>
        </reactRouterDom.Link>
      </div>

      <div className="custom-element">
        <select
          id="region"
          onChange={(e) => setSelectedRegion(e.target.value)}
          value={selectedRegion}
        >
          {regionOptionsDiv}
        </select>
      </div>

      {!date && (
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
      )}
    </div>
  );
}

Options.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  selectedRegion: PropTypes.string.isRequired,
  selectedDate: PropTypes.string.isRequired,
  setSelectedRegion: PropTypes.func.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

export default Options;

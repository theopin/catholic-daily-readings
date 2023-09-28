import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Options.css'; // Component-specific CSS

// Convert the country code to the corresponding emoji flag
function getFlagEmoji(countryCode) {
  if (countryCode === '') return '';

  return countryCode
    .toUpperCase()
    .split('')
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    .join('');
}

function Options(props) {
  const {
    isSundayMode, selectedRegion, setSelectedRegion, selectedDate, setSelectedDate,
  } = props;

  const regionOptions = [
    { value: 'africa.kenya', label: 'Kenya', code: 'KE' },
    { value: 'africa.madagascar', label: 'Madagascar', code: 'MG' },
    { value: 'africa.nigeria', label: 'Nigeria', code: 'NG' },
    { value: 'africa.safrica', label: 'South Africa', code: 'ZA' },
    { value: 'asia.india', label: 'India', code: 'IN' },
    { value: 'asia.malaysia', label: 'Malaysia', code: 'MY' },
    { value: 'asia.singapore', label: 'Singapore', code: 'SG' },
    { value: 'americas.brazil', label: 'Brazil', code: 'BR' },
    { value: 'australia', label: 'Australia', code: 'AU' },
    { value: 'canada', label: 'Canada', code: 'CA' },
    { value: 'europe', label: 'Europe', code: '' }, // No code specified for Europe
    { value: 'europe.belarus', label: 'Belarus', code: 'BY' },
    { value: 'europe.denmark', label: 'Denmark', code: 'DK' },
    { value: 'europe.england', label: 'England', code: 'GB' },
    { value: 'europe.estonia', label: 'Estonia', code: 'EE' },
    { value: 'europe.finland', label: 'Finland', code: 'FI' },
    { value: 'europe.france', label: 'France', code: 'FR' },
    { value: 'europe.ireland', label: 'Ireland', code: 'IE' },
    { value: 'europe.italy', label: 'Italy', code: 'IT' },
    { value: 'europe.malta', label: 'Malta', code: 'MT' },
    { value: 'europe.netherlands', label: 'Netherlands', code: 'NL' },
    { value: 'europe.poland', label: 'Poland', code: 'PL' },
    { value: 'europe.scotland', label: 'Scotland', code: 'GB' },
    { value: 'europe.slovakia', label: 'Slovakia', code: 'SK' },
    { value: 'europe.sweden', label: 'Sweden', code: 'SE' },
    { value: 'europe.wales', label: 'Wales', code: 'GB' },
    { value: 'meast.sarabia', label: 'Saudi Arabia', code: 'SA' },
    { value: 'nz', label: 'New Zealand', code: 'NZ' },
    { value: 'philippines', label: 'Philippines', code: 'PH' },
    { value: 'usa', label: 'USA', code: 'US' },
  ];

  const currentDate = new Date();
  const minDate = new Date();
  minDate.setDate(currentDate.getDate() - 3);

  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 8);

  const regionOptionsDiv = regionOptions.map((option) => (
    <option key={option.value} value={option.value}>
      {`${option.label}  ${getFlagEmoji(option.code)}`}
    </option>
  ));
  const navigate = useNavigate();
  return (
    <div className="options">
      {/* icon and name */}

      <div className="button custom-element">
        <Link
          to={isSundayMode ? `/?region=${selectedRegion}` : `/sunday/?region=${selectedRegion}`}
          onClick={() => {
            window.location.href = isSundayMode ? `/?region=${selectedRegion}` : `/sunday/?region=${selectedRegion}`;
          }}
        >
          <button type="button">{isSundayMode ? 'Sunday' : 'Weekday'}</button>
        </Link>
      </div>

      <div className="custom-element">
        <select
          id="region"
          onChange={(e) => {
            setSelectedRegion(e.target.value);
            navigate(`${isSundayMode ? '/sunday' : ''}/?region=${e.target.value}`);
          }}
          value={selectedRegion}
        >
          {regionOptionsDiv}
        </select>
      </div>

      {!isSundayMode && (
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
  isSundayMode: PropTypes.bool.isRequired,
  selectedRegion: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedRegion: PropTypes.func.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

export default Options;

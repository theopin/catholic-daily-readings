import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import moment from 'moment';

function Header(props) {
  const { title, date } = props;

  const formattedLines = title
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/week/g, 'Week')
    .split(/&#160;&#160;/g);

  let isAlertDisplayable = false;

  const searchIndex = formattedLines.findIndex((el) => el.includes('Ordinary Time'));

  if (searchIndex > 0 && formattedLines[searchIndex].startsWith('on')) { isAlertDisplayable = true; } else { isAlertDisplayable = false; }

  const elements = formattedLines.map((part, index) => (<h4 key={`part-${index + 1}`}>{he.decode(part).trim()}</h4>));
  const dateString = moment(date, 'dddd DD MMMM YYYY').format('YYYYMMDD');

  return (

    <div className="text-center">
      <h1>Daily Mass Reading</h1>
      <br />
      <div>{elements}</div>
      <h5>{date}</h5>
      {
        isAlertDisplayable
        && <br />
      }
      {
        isAlertDisplayable
        && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          For the memorial option, please visit
          {' '}
          <a href={`https://universalis.com/${dateString}/mass.htm`} className="alert-link">the Universalis website</a>
          .
        </div>
        )
      }

    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,

};

export default Header;

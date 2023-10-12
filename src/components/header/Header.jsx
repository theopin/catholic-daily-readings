import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';

function Header(props) {
  const { title, date } = props;

  const formattedLine = title
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/week/g, 'Week')
    .split(/&#160;&#160;/g);
  const elements = formattedLine.map((part, index) => (<h4 key={`part-${index + 1}`}>{he.decode(part).trim()}</h4>));

  return (

    <div className="text-center">
      <h1>Daily Mass Reading</h1>
      <br />
      <div>{elements}</div>
      <h5>{date}</h5>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,

};

export default Header;

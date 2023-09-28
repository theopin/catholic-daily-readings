import React from 'react';
import PropTypes from 'prop-types';

import './Header.css'; // Component-specific CSS

function Header(props) {
  const { title, date } = props;

  const formattedLine = title
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/week/g, 'Week')
    .split(/&#160;&#160;/g);
  const elements = formattedLine.map((part, index) => (<h3 key={`part-${index + 1}`}>{part.replace('&#160;', ' ')}</h3>));

  return (
    <div className="theme">
      <div>{elements}</div>
      <h4>{date}</h4>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,

};

export default Header;

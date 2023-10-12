import React from 'react';
import './Footer.css'; // Component-specific CSS

function Footer() {
  // Component code here
  const currentDate = new Date();

  return (
    // eslint-disable-next-line react/style-prop-object
    <div>
      <hr />
      <div className="footer-text">
        Copyright &#169; 1996-
        {currentDate.getFullYear()}
        {' '}
        Universalis Publishing Limited: see
        www.universalis.com. Scripture readings from the Jerusalem Bible are
        published and copyright &#169; 1966, 1967 and 1968 by Darton, Longman
        &amp; Todd, Ltd and Doubleday, a division of Random House, Inc, and used
        by permission of the publishers. Text of the Psalms: Copyright &#169;
        1963, The Grail (England). Used with permission of A.P. Watt Ltd. All
        rights reserved.
      </div>
    </div>
  );
}

export default Footer;

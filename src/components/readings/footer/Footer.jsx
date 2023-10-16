import React from 'react';

function Footer() {
  const currentDate = new Date();

  return (
    <div>
      <hr />
      <p className="fs-6 fw-light">
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
      </p>
    </div>
  );
}

export default Footer;

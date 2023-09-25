import React from "react";
import "./Header.css"; // Component-specific CSS

function Header(props) {
  // Component code here

  return (
    <div>
          <div className="header">
        <h3 className="title">{props.title}</h3>
        <h5 className="verse">{props.verse.replace(/(\D)(\d)/, '$1 $2').replace(/\bcf\.\s+/gi, "")}</h5>
      </div>
      <h5 className="summary">{props.summary}</h5>
    </div>

  );
}

export default Header;

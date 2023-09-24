import React from "react";
import "./Header.css"; // Component-specific CSS

function Header(props) {
  // Component code here

  return (
      <div className="header">
        <h3 className="title">{props.title}</h3>
        <h5 className="verse">{props.verse.replace(/\bCf\.\s+/gi, "")}</h5>
      </div>
  );
}

export default Header;

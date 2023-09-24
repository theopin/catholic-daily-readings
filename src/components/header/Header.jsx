import React from "react";
import "./Header.css"; // Component-specific CSS

function Header(props) {
  // Component code here

  return (
      <div class="header">
        <h3 class="title">{props.title}</h3>
        <h5 class="verse">{props.verse}</h5>
      </div>
  );
}

export default Header;

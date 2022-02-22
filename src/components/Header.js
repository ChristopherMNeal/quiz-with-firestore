import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li>logo</li>
        <li>User #1</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

import React from "react";

function Header(props) {

  const handleHome = () => props.handleHome();
  const handleSign = () => props.handleSign();
  return (
    <nav>
      <ul>
        <li>logo</li>
        <li>User #1</li>
        <li>
          <button onClick={handleHome}>Return Home</button>
        </li>
        <li>
          <button onClick={handleSign}>Sign In</button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

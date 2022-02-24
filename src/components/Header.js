import React from "react";
import { withFirestore, isLoaded } from "react-redux-firebase";

function Header(props) {
  const auth = props.firebase.auth();
  const handleHome = () => props.handleHome();
  const handleSign = () => props.handleSign();
  let greeting;
  if (auth.currentUser) {
    greeting = "You're signed in as: " + auth.currentUser.email;
  } else {
    greeting = "Not signed in";
  }
  return (
    <nav>
      <ul>
        <li>logo</li>
        <li>{greeting}</li>
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

export default withFirestore(Header);

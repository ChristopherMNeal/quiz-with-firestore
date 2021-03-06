import React from "react";
import firebase from "firebase/app";
import { withFirestore, isLoaded } from "react-redux-firebase";
import styled from "styled-components";

function Signin(props) {
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        console.log("Successfully signed in!");
        props.handleHome();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("Successfully signed out!");
        props.handleSign();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function handleSignUp() {
    props.handleSignUpClick();
  }

  const auth = props.firebase.auth();

  //styles
  const SignUpLink = styled.p `
    color: color: #446286;
    font-size: 1.2rem;
    :hover {
      cursor: pointer;
      color: #203d5e;
    }
  `;

  

  return !isLoaded(auth) ? (
    <h1>Loading...</h1>
  ) : isLoaded(auth) && auth.currentUser == null ? (
    <React.Fragment>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input type="text" name="signinEmail" placeholder="email" />
        <input type="password" name="signinPassword" placeholder="Password" />
        <button type="submit">Sign in</button>
      </form>
      <SignUpLink onClick={handleSignUp}>You new here? Sign up!</SignUpLink>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  );
}

export default withFirestore(Signin);

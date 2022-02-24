import React from "react";
import { withFirestore, isLoaded } from "react-redux-firebase";
import styled from "styled-components";

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

  const NavBar = styled.nav `
    background-color: #ededed;
    font-size: 1.2rem;
    padding: .25em 2em;
  `;

  const UlFlex = styled.ul `
    display: flex;
    list-style: none;
    padding-left: 0;
  `;

  const ToTheRight = styled.li `
    margin-left: auto
  `;

  const NavLi = styled.li `
    margin-left: 1em;
  `;

  const ButtonStyle = styled.button `
    padding: .5em 1em; 
    background-color: #c3ddfa;
    border: none;
    border-radius: .5em;
    :hover {
      background-color:#4d5c6e;
      color: white; 
    }
  `;

  return (
    <NavBar>
      <UlFlex>
        <li id="logo" onClick={handleHome}>
          Quiz Maker
        </li>
        <ToTheRight>
          {greeting}
        </ToTheRight>
        <NavLi>
          <ButtonStyle onClick={handleSign}>Sign In</ButtonStyle>
        </NavLi>
        <NavLi>
          <ButtonStyle onClick={handleHome}>Home</ButtonStyle>
        </NavLi>
      </UlFlex>
    </NavBar>
  );
}

export default withFirestore(Header);

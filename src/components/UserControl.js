import React, { useState } from "react";

function UserControl(){

  const [ loggedIn, setLoggedIn ] = useState(false)

  const handleClick = () => {
    setLoggedIn(!loggedIn)
  }

  return(
    <React.Fragment>
      {loggedIn ? 
      <div>
      <h1>User1 is logged in</h1>
      <button onClick={handleClick}>Log Out</button>
      </div> :
      <div>
      <h1>No users logged in</h1>
      <button onClick={handleClick}>Log In</button>
      <button>Create an Account</button>
      </div>
      }
    </React.Fragment>
  )
}

export default UserControl;
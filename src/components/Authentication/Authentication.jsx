import React, { useState, useEffect } from 'react';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';

const authentication = (props) => {

  let show;
  const [display, setDisplay] = useState('login');

  const handleLoginClick = () => {
    setDisplay('login')
  }

  const handleSignUpClick = () => {
    setDisplay('signup')
  }


  if (display === 'login') {
    show = <Login/>;
  } else {
    show = <Signup/>;
  }



  return (

    <div>
      <button onClick={()=> handleLoginClick()}>Log In</button>
      <button onClick={() => handleSignUpClick()}>Sign Up</button>
      {show}
    </div>
  )
}

export default authentication;

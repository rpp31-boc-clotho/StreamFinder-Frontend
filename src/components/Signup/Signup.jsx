import React from 'react';
import axios from 'axios';

const signup = (props) => {

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input id="signup-firstname" type="text" required></input>
        </div>
        <div>
          <label>Last Name</label>
          <input id="signup-lastname" type="text" required></input>
        </div>
        <div>
          <label>Email Address</label>
          <input id="signup-email" type="email" required></input>
        </div>
        <div>
          <label>Password</label>
          <input id="signup-password1" type="password" required></input>
        </div>
        <div>
          <label>Re-enter Password</label>
          <input id="signup-password2" type="password" required></input>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  )

}

export default signup;
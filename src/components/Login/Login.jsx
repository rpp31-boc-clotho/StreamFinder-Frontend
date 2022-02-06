import React from 'react';
import axios from 'axios';

const login = (props) => {

  return (
    <div>
      <form>
        <div>
          <label>Email Address</label>
          <input id="login-email" type="email" required></input>
        </div>
        <div>
          <label>Password</label>
          <input id="login-password" type="password" required></input>
        </div>
        <div>
          <button>Log In</button>
        </div>
      </form>
    </div>
  )

}

export default login;
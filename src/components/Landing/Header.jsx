import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props)

  };

  render() {
    return (
      <div className="header">
        <h1 className="title">Stream Finder</h1>
        <button className="login">Login</button>
        <LoginButton />
      </div>
    );
  };
};

export default Header;
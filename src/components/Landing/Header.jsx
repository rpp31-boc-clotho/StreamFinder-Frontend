import React from 'react';
import LoginButton from './LoginButton.jsx';
import { Link } from 'react-router-dom';


var Header = (props) => {
  // let settings = null;

  // if (props.isLoggedIn) {
  //   settings = <Link to="/settings">Settings</Link>
  // }

    return (
      <div className="header">
      <img src="/sflogo2.png" alt="image" width="50" height="100"/>
        <h1 className="title"><Link to="/">StreamFinder</Link></h1>
        <span className="login"><LoginButton /></span>
        <Link to="/search">Search</Link>
        {/* {settings} */}
      </div>
    );

};


export default Header;
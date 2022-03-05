import React from 'react';
import LoginButton from './LoginButton.jsx';
import { Link } from 'react-router-dom';


var Header = (props) => {

    return (
      <div className="header">
        <div className="branding">
          <img src="/sflogo2.png" alt="stream-finder-logo"/>
          <h1 className="title"><Link to="/">StreamFinder</Link></h1>
        </div>
        <span className="login"><LoginButton /></span>
      </div>
    );

};


export default Header;
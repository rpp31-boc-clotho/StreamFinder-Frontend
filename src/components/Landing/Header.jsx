import React from 'react';
import LoginButton from './LoginButton.jsx';
import { Link } from 'react-router-dom';


var Header = (props) => {

    return (
      <div className="header">
      <img src="/sflogo2.png" alt="image" width="50" height="100"/>
        <h1 className="title"><Link to="/">StreamFinder</Link></h1>
        <span className="login"><LoginButton /></span>
      </div>
    );

};


export default Header;
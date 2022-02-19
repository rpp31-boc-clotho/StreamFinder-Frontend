import React from 'react';
import LoginButton from './LoginButton.jsx';
import { Link } from "react-router-dom";


 var Header = (props) => {

    return (
      <div className="header">
        <h1 className="title">Stream Finder</h1>
        <Link to="/Search">Search</Link>
        <Link to="/">Landing</Link>
        <span className="login"><LoginButton /></span>
      </div>
    );

};


export default Header;
import React from 'react';
import LoginButton from './LoginButton.jsx';
import { Link } from 'react-router-dom';


 var Header = (props) => {

    return (
      <div className="header">
         <Link to="/">Home</Link>
        <h1 className="title">Stream Finder</h1>
        <span className="login"><LoginButton /></span>



      </div>
    );

};


export default Header;
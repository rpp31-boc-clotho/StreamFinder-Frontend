import React from 'react';
import LoginButton from './LoginButton.jsx';


 var Header = (props) => {

    return (
      <div className="header">
        <h1 className="title">Stream Finder</h1>
        <span className="login"><LoginButton /></span>
      </div>
    );

};


export default Header;
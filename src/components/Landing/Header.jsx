import React from 'react';




 var Header = (props) => {
    console.log("Props.loggedin:",props.isLoggedIn);
    return (
      <div className="header">
        <h1 className="title">Stream Finder</h1>
        {props.isLoggedIn === false
          ?<button className="login" onClick={(event) => props.loginButtonClick(event)}>Login</button>
          :<span className="login">Welcome User!</span>
        }
      </div>
    );

};


export default Header;
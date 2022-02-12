import React from 'react';
import sample from '../images/blankImg.png';


 var Header = (props) => {
    console.log("Props.loggedin:",props.isLoggedIn);
    return (
      <div className="header">
        <h1 className="title">Stream Finder</h1>
        {props.isLoggedIn === false
          ?<button className="login" onClick={(event) => props.loginButtonClick(event)}>Login</button>
          :<img src={sample} className="avatar"></img>
        }
      </div>
    );

};


export default Header;
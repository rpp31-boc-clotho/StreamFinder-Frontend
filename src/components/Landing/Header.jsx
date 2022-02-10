import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props)

  };

  render() {
    return (
      <div className="header">
        <h1 className="title">Stream Finder</h1>
        <button className="login">Login</button>
      </div>
    );
  };
};

export default Header;
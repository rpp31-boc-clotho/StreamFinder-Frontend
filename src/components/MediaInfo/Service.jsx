import React from 'react';

class Service extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="services">
        <h3>Netflix</h3>
        <h3>Amazon</h3>
        <h3>Hulu</h3>
        <h3>Disney+</h3>
        <h3>HBOMax</h3>
      </div>
    )
  }
}

export default Service;
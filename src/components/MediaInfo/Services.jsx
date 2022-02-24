import React from 'react';
import Service from './Service.jsx';

class Services extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h3>Available on...</h3>
        <Service />
      </div>
    )
  }
}

export default Services;
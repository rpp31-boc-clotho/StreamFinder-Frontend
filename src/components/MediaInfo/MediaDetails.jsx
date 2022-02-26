import React from 'react';

class MediaDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="mediaDetails">
        <p onClick={this.props.getInfo}>Loading Media Info...</p>
      </div>
    )
  }
}

export default MediaDetails;
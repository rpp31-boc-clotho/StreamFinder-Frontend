import React from 'react';

const profile = (props) => {

  return (
    <div>
      <div>
        Username
      </div>
      <div>
        What services do you subscribe to?
        <div>
          <label className="switch">
            <input type="checkbox"></input>
            Netflix
            <span className="slider round"></span>
          </label>
          {/* <input id="services" type="checkbox"></input>
          <label>Netflix</label> */}
        </div>
        <div>
          <label className="switch">
            <input type="checkbox"></input>
            Amazon Prime
            <span className="slider round"></span>
          </label>
          {/* <input id="services" type="checkbox"></input>
          <label>Amazon Prime</label> */}
        </div>
        <div>
          <label className="switch">
            <input type="checkbox"></input>
            Hulu
            <span className="slider round"></span>
          </label>
        </div>
        <div>
          <label className="switch">
            <input type="checkbox"></input>
            HBO Max
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  )

}

export default profile;
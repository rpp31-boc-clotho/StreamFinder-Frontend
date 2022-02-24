import React, { useState, useEffect } from 'react';




const Providers = (props) => {

  // if (props.status) {
  //   return (
  //     <div>
  //       <input type="checkbox" id={props.provider} className="provider" defaultChecked></input>
  //       <label htmlFor={props.provider}>{props.provider}</label>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <input type="checkbox" id={props.provider} className="provider"></input>
  //       <label htmlFor={props.provider}>{props.provider}</label>
  //     </div>
  //   )
  // }
    return (
      <div>
        {props.status ? <input type="checkbox" id={props.provider} className="provider" defaultChecked></input> : <input type="checkbox" id={props.provider} className="provider"></input> }
        <label htmlFor={props.provider}>{props.provider}</label>
      </div>
    )

}

export default Providers;
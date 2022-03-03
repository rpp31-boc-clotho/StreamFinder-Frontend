import React, { useState, useEffect } from 'react';




const Providers = (props) => {

    return (
      <div>
        {props.status ?
        <input type="checkbox" id={props.provider} className="cm-toggle" defaultChecked></input> : <input type="checkbox" id={props.provider} className="cm-toggle"></input> }
        <label className="providerLabel" htmlFor={props.provider}>{props.provider}</label>
      </div>
    )

}

export default Providers;
import React, { useState, useEffect } from 'react';




const subscriptions = (props) => {

  if (props.status) {
    return (
      <div>
        <input type="checkbox" id={props.provider} checked></input>
        <label htmlFor={props.provider}>{props.provider}</label>
      </div>
    )
  } else {
    return (
      <div>
        <input type="checkbox" id={props.provider}></input>
        <label htmlFor={props.provider}>{props.provider}</label>
      </div>
    )
  }
}

export default subscriptions;
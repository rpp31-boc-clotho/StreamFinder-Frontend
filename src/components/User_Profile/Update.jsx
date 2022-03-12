import React, { useState, useEffect } from 'react';
import Providers from './Providers.jsx';

const Update = (props) => {

  let providers;
  if (props.providersList) {
    providers = Object.keys(props.providersList)
  }

  const updateSubscriptions = () => {
    let changes = {};
    var checked = document.getElementsByClassName('cm-toggle');

    for (let i = 0; i < checked.length; i++) {
      if (checked[i].checked) {
        console.log(checked[i].id)
      }
      changes[checked[i].id] = checked[i].checked
    }

    props.updateSubs(changes);
    props.hide();
  }

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="close-modal-button" onClick={()=> props.hide()}>
              <svg width="18" height="18" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 2.5L26.5 26.5M26.5 2.5L2.5 26.5" stroke="black" stroke-width="5" stroke-linecap="round"/>
              </svg>
            </div>
          <h1 className="modal-title">Available Providers</h1>
        </div>
        <div className="modal-body">
          {providers.map((providers, i) =>
            <Providers key={i} provider={providers} status={props.providersList[providers]} />
          )}
        </div>
        <div className="modal-footer">
          {/* <div className="submit-button"> */}
            <button className="modal-footer-button" onClick={() => updateSubscriptions()}>Update Subscriptions</button>
          {/* </div> */}
        </div>
      </div>
    </div>

  )
}

export default Update;
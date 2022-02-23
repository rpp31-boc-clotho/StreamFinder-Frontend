import React, { useState, useEffect } from 'react';
import Providers from './Providers.jsx';




const update = (props) => {

  const updateSubscriptions = () => {
    var checked = document.getElementsByClassName('provider');

    for (let i = 0; i < checked.length; i++) {
      if (checked[i].checked) {
        console.log(checked[i].id)
      }
    }
    props.hide();
  }

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="close-modal-button" onClick={()=> props.hide()}>X</div>
          <h3 className="modal-title">Available Providers</h3>
        </div>
        <div className="modal-body">
          {props.provider.map((providers, i) =>
            <Providers key={i} provider={providers} status={props.providersList[providers]} />
          )}

        </div>

        <div className="modal-footer">
          <div className="submit-button">
            <button className="modal-footer-button" onClick={() => updateSubscriptions()}>Update Subscriptions</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default update;
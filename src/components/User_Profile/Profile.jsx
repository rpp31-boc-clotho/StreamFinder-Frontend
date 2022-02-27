import React, { useState, useEffect } from 'react';
import Subscriptions from './Subscriptions.jsx';
import Update from './Update.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const profile = (props) => {

  // States
  const [ modal, setModal ] = useState(false);

  // Functions
  const hideModal = () => {
    setModal(false);
  }

  //Render
  return (
    <div className="profileLayer">
      <div className="profile">
        <div className="profileUserInfo">
          <img className="profileAvatar" src={props.avatar}></img>
          <h2 className="profileUsername">{props.username}</h2>
        </div>
        <div className="profileDivider"></div>
        <div className="profileSubscriptions">
          <h2>Your Subscriptions</h2>
          <div className="profileSubscriptionsList">
            <Subscriptions providersList={props.providersList} />
          </div>
          <div className="profileEditSubsButton">
            <button className="editSubs" onClick={() => setModal(true)}>Edit Subscriptions</button>
          </div>
          <div>
            <Update show={modal} hide={hideModal} providersList={props.providersList} updateSubs={props.updateSubscriptions}/>
          </div>
        </div>
      </div>
    </div>

  )

}

export default profile;
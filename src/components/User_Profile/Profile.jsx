import React, { useState, useEffect } from 'react';
import Subscriptions from './Subscriptions.jsx';
import Update from './Update.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const profile = (props) => {

  let navigate = useNavigate();
  const isAuthenticated = useAuth0();

  useEffect(() => {
    if (!isAuthenticated.isLoading && !isAuthenticated.isAuthenticated) {
      navigate('/')
    }
  })

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
          <h1 className="profileUsername">{props.username}</h1>
        </div>
        <div className="profileDivider"></div>
        <div className="profileBody">
          <div className="profileSubscriptions">
            <h2>Your Subscriptions</h2>
            <div className="profileSubscriptionsList">
              <Subscriptions providersList={props.providersList} />
            </div>
          </div>
          <div className="profileActivity">
            <h2>Your Activity</h2>
          </div>
        </div>
        <div className="profileFooter">
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
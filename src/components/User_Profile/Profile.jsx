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
    <div>
      {props.username}
      <div>
        Your Subscriptions
      </div>
      <div>
        <Subscriptions providersList={props.providersList} />
      </div>
      <div>
        <button onClick={() => setModal(true)}>Edit Subscriptions</button>
      </div>
      <div>
        <Update show={modal} hide={hideModal} providersList={props.providersList} updateSubs={props.updateSubscriptions}/>
      </div>
    </div>
  )

}

export default profile;
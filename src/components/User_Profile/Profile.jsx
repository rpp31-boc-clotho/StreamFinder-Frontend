import React, { useState, useEffect } from 'react';
import Subscriptions from './Subscriptions.jsx';
import Update from './Update.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const profile = (props) => {

  // Conditional
  if (!isAuthenticated) {
    <Navigate to="/"/>
  }

  // Auth0
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();

  // States
  const [ modal, setModal ] = useState(false);
  const [ providersList, setProvidersList ] = useState({});
  const [ providers, setProviders ] = useState([]);

  // Variables
  const subs = [];
  let username = user.nickname
  let userId = localStorage.getItem('userId')

  // Functions
  const hideModal = () => {
    setModal(false);
  }

  // API Calls
  const updateSubscriptions = (changes) => {
    axios({
      method: 'post',
      url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/update',
      data: {
        username: user.email,
        subscriptions: changes
      },
    })
    .then((response) => {
      console.log('post response', response.data.subscriptions)
      setProvidersList(response.data.subscriptions)
    })
    .catch((e) => {
      console.log('Error Updating Subs:', e)
    })
  }

  useEffect(() => {

    if (!userId) {
      console.log('no user - going to post')
      axios({
        method: 'post',
        url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/create',
        data: {
          username: user.email
        },
      })
      .then((response) => {
        console.log('post response', response)
        localStorage.setItem('userId', response.data.userProfile.username)
      })
      .catch((e) => {
        console.log('Error Posting User', e)
      })
    } else {
      axios({
        method: 'get',
        url: 'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user',
        data: {
          username: user.email
        },
      })
      .then ((response) => {
        console.log('get reponse', response)
        setProvidersList(response.data.subscriptions);
      })
      .catch((e) => {
        console.log('Error getting user:', e);
      })
    }
  }, [])


  return (
    <div>
      {username}
      <div>
        Your Subscriptions
      </div>
      <div>
        <Subscriptions providersList={providersList} />
      </div>
      <div>
        <button onClick={() => setModal(true)}>Edit Subscriptions</button>
      </div>
      <div>
        <Update show={modal} hide={hideModal} providersList={providersList} updateSubs={updateSubscriptions}/>
      </div>
    </div>
  )

}

export default profile;
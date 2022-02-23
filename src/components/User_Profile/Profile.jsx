import React, { useState, useEffect } from 'react';
import Subscriptions from './Subscriptions.jsx';
import Providers from './Providers.jsx';
import Update from './Update.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const profile = (props) => {
  const [ modal, setModal ] = useState(false);
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    <Navigate to="/"/>
  }

  const hideModal = () => {
    setModal(false);
  }

  const providersList = {
    "Apple iTunes": false,
    "Apple TV Plus": true,
    "Amazon Prime Video": false,
    "Disney Plus": false,
    "Google Play Movies": false,
    "HBO Max": false,
    "Hulu": false,
    "Netflix": false,
    "Paramount Plus": false,
    "Peacock": false,
    "YouTube": false
  }

  const providers = Object.keys(providersList)
  const subs = [];

  for (let i = 0; i < providers.length; i ++) {
    if (providersList[providers[i]]) {
      subs.push(providers[i])
    }
  }

  if (subs.length === 0) {
    subs.push('Click to add subscriptions')
  }

  let username = user.nickname
  let userId = localStorage.getItem('userId')

  useEffect(() => {
    if (!userId) {
      console.log('no user - going to post')
      axios({
        method: 'post',
        url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/create',
        // url:'/database',
        data: {
          username: user.email
        },
      })
      .then((response) => {
        console.log('post response', response)
        localStorage.setItem('userId', response.username)
      })
    } else {
      axios({
        method: 'get',
        url: 'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user',
        // url: '/database',
        data: {
          username: user.email
        },
      })
      .then ((response) => {
        console.log('get reponse', response)
      })
    }
  })


  return (
    <div>
      {username}
      <div>
        Your Subscriptions
      </div>
      <div>
        {subs.map((provider, i) =>
          <Subscriptions key={i} provider={provider}/>
        )}
      </div>
      <div>
        <button onClick={() => setModal(true)}>Edit Subscriptions</button>
      </div>
      <div>
        <Update show={modal} hide={hideModal} provider={providers} providersList={providersList}/>
      </div>

    </div>
  )

}

export default profile;
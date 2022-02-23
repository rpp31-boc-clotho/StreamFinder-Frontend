import React, { useState, useEffect } from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import Subscriptions from './Subscriptions.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const profile = (props) => {
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    <Navigate to="/"/>
  }

  const subscriptions = {
    "Apple iTunes": false,
    "Apple TV Plus": false,
    "Amazon Prime Video": false,
    "Disney Plus": false,
    "Google Play Movies": false,
    "HBO Max": true,
    "Hulu": false,
    "Netflix": false,
    "Paramount Plus": false,
    "Peacock": false,
    "YouTube": false
  }

  const providers = Object.keys(subscriptions)
  console.log('providers', providers);


  let username = user.nickname

  let userId = localStorage.getItem('userId')


  useEffect(() => {
    console.log(user.email)
    if (!userId) {
      console.log('no user - going to post')
      axios({
        method: 'post',
        // url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/create',
        url:'/database',
        data: {
          username: user.email
        },
      })
      .then((response) => {
        console.log('post response', response)
        localStorage.setItem('userId', response._id)
      })
    } else {
      axios({
        method: 'get',
        // url: 'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user',
        url: '/database',
        data: {
          username: user.email
        },
      })
      .then ((response) => {
        console.log('get reponse', response)
      })
    }
  })




  var subs = { "Apple TV Plus": true };

  const updateSub = (e) => {
    let checks = document.getElementsByClassName('provider')
    console.log(checks)

    if (subs[e.target.value]) {
      subs[e.target.value] = false;
    } else {
      subs[e.target.value] = true;
    }
    for (var i = 0; i < checks.length; i ++) {
      console.log(checks[i].textContent)
    }
  }


  return (
    <div>
      {username}
      <div>
        Your Subscriptions
      </div>
      {providers.map((provider, i) =>
        <Subscriptions key={i} provider={provider} status={subscriptions[provider]} />
      )}
    </div>
  )

}

export default profile;
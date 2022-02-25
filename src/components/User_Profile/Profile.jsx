import React, { useState, useEffect } from 'react';
import Subscriptions from './Subscriptions.jsx';
import Update from './Update.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const profile = (props) => {

  console.log('username', props.username)



  // Conditional
  if (!isAuthenticated) {
    <Navigate to="/"/>
  }

  // Auth0
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();

  // States
  const [ modal, setModal ] = useState(false);
  // const [ providersList, setProvidersList ] = useState({});
  // const [ providers, setProviders ] = useState([]);

  // Variables
  // const subs = [];
  let username = user.nickname
  // let userId = localStorage.getItem('userId')

  // console.log('userId', userId, 'user email', typeof(user.email))

  // Functions
  const hideModal = () => {
    setModal(false);
  }

  // const handleUpdate = (update) => {
  //   setProvidersList(update);
  // }

  // API Calls
  // const updateSubscriptions = (changes) => {
  //   axios({
  //     method: 'post',
  //     url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/update',
  //     data: {
  //       username: user.email,
  //       subscriptions: changes
  //     },
  //   })
  //   .then((response) => {
  //     console.log('post response', response.data)
  //     setProvidersList(response.data.subscriptions)
  //   })
  //   .catch((e) => {
  //     console.log('Error Updating Subs:', e)
  //   })
  // }

  // const fetchUserData = () => {
  //   console.log('sending userID', userId)

  //   axios.get('http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user', {
  //     params: {
  //       username: user.email
  //     }
  //   })
  //   .then((res) => {
  //     console.log('get result data', res.data)
  //     setProvidersList(res.data.subscriptions)
  //   })
  // }

  // const createUser = () => {
  //   axios({
  //     method: 'post',
  //     url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/create',
  //     data: {
  //       username: user.email
  //     },
  //   })
  //   .then((res) => {
  //     console.log('post res', res)
  //   })
  // }

  //On Mount

  // useEffect(()=> {
  //   if(!userId) {
  //     createUser()
  //   } else {
  //     fetchUserData();
  //   }
  // }, [])


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
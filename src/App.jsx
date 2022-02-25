// import React from 'react';
import React, { useState, useEffect } from 'react';
import Landing from './components/Landing/Landing.jsx';
import Header from './components/Landing/Header.jsx';
import Authentication from './components/Authentication/Authentication.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './components/User_Profile/Profile.jsx';
import SearchBar from './components/Search/SearchBar.jsx';
import SearchPage from './components/Search/SearchPage.jsx';
import SearchResults from './components/Search/SearchResults.jsx';
import MediaInfoPage from './components/MediaInfo/MediaInfoPage.jsx';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ providersList, setProvidersList] = useState({});
  const [ watchList, setWatchList ] = useState({});
  const [ recentlyWatched, setRecentlyWatched ] = useState({});
  const [ email, setEmail ] = useState(null);
  const [ username, setUsername ] = useState(null);
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  let userId = localStorage.getItem('userId');


  console.log('username in app', username)
  // email asdf@gmail.com
  // username asdf

  // things needed
  // userId => landing, media
  // recently watched => landing
  // watch list => landing
  // providers => media


  // functions needed
  // addtowatchlist => media
  // recentlyWatched =>media

  // watched list
  // recommended



  // API Calls for User Data
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
      console.log('post response', response.data)
      setProvidersList(response.data.subscriptions)
    })
    .catch((e) => {
      console.log('Error Updating Subs:', e)
    })
  }

  const fetchUserData = (email) => {
    console.log('sending userID', userId)

    axios.get('http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user', {
      params: {
        username: email
      }
    })
    .then((res) => {
      console.log('get result data', res.data)
      setProvidersList(res.data.subscriptions)
      //set watch list
      setRecentlyWatched(res.data.watchHistory)
    })
  }

  const createUser = (email) => {
    axios({
      method: 'post',
      url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/create',
      data: {
        username: email
      },
    })
    .then((res) => {
      if (res.status) {
        console.log('post res', res)
        setProvidersList(res.data.userProfile.subscriptions);
        localStorage.setItem('userId', res.data.userProfile.username);
        //set watch list
        setRecentlyWatched(res.data.userProfile.watchHistory);
      } else {
        setProvidersList(res.data.subscriptions);
        localStroage.setItem('userId', res.data.username);
        //set watch list
        setRecentlyWatched(res.data.watchHistory);
      }

    })
  }

  const addToWatchHistory = (changes) => {
    axios({
      method: 'post',
      url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/watched',
      data: changes
    })
    .then((response) => {
      console.log('post response', response.data)
      setRecentlyWatched(response.data.watchHistory)
    })
    .catch((e) => {
      console.log('Error Updating Subs:', e)
    })
  }

  useEffect(() => {

    if (isAuthenticated) {
      console.log('user id', user.sub, user)
      setIsLoggedIn(true)
      setEmail(user.email);
      setUsername(user.nickname);

    } else {
      setIsLoggedIn(false)
    }
  });

  useEffect(() => {
    if (userId) {
      fetchUserData(userId)
    } else {
      createUser(email)
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Header isLoggedIn = {isLoggedIn}/>
        </nav>
        <Routes>
          <Route path="/" element={<Landing isLoggedIn={isLoggedIn} recentlyWatched={recentlyWatched}/>} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/info/*" element={<MediaInfoPage providersList={providersList}/>} />
          <Route path="/settings" element={<Profile isLoggedIn={isLoggedIn} updateSubscriptions={updateSubscriptions} providersList={providersList} username={username}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

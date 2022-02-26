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



  // states needed
  // recommended? => landing

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
      setProvidersList(response.data.subscriptions)
    })
    .catch((e) => {
      console.log('Error Updating Subs:', e)
    })
  }

  // const fetchUserData = (email) => {
  //   axios.get('http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user', {
  //     params: {
  //       username: email
  //     }
  //   })
  //   .then((res) => {
  //     setProvidersList(res.data.subscriptions)
  //     setWatchList(res.data.watchList)
  //     setRecentlyWatched(res.data.watchHistory)
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching user data', e)
  //   })
  // }

  const createUser = (email) => {
    axios({
      method: 'post',
      url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/create',
      data: {
        username: email
      },
    })
    .then((res) => {
      console.log('res', res)
      if (res.data.status) {
        console.log('hitting user exists')
        setProvidersList(res.data.userProfile.subscriptions);
        localStorage.setItem('userId', res.data.userProfile.username);
        setWatchList(res.data.userProfile.watchList);
        setRecentlyWatched(res.data.userProfile.watchHistory);
      } else {
        console.log('hitting new user')
        setProvidersList(res.data.subscriptions);
        localStroage.setItem('userId', res.data.username);
        setWatchList(res.data.watchList);
        setRecentlyWatched(res.data.watchHistory);
      }
    })
    .catch((e) => {
      console.log('Error creating user', e)
    })
  }

  const addToWatchHistory = (changes) => {
    axios({
      method: 'post',
      url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/watched',
      data: changes
    })
    .then((response) => {
      setRecentlyWatched(response.data.watchHistory)
    })
    .catch((e) => {
      console.log('Error Adding to Recently Watched:', e)
    })
  }

  const addWatchList = (changes) => {
    axios({
      method: 'post',
      url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/watchlist',
      data: changes
    })
    .then((response) => {
      setWatchList(response.data.watchList)
    })
    .catch((e) => {
      console.log('Error Adding to Recently Watched:', e)
    })
  }

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedIn(true)
      setEmail(user.email);
      setUsername(user.nickname);
    } else {
      setIsLoggedIn(false)
    }
  });

  useEffect(() => {
    createUser(email)
  }, [email])

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Header isLoggedIn = {isLoggedIn}/>
        </nav>
        <Routes>
          <Route path="/" element={<Landing isLoggedIn={isLoggedIn} recentlyWatched={recentlyWatched} watchList={watchList} username={username} email={email}/>} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/info/*" element={<MediaInfoPage providersList={providersList} addWatchList={addWatchList} addToWatchHistory={addToWatchHistory} username={username} email={email}/>} />
          <Route path="/settings" element={<Profile isLoggedIn={isLoggedIn} updateSubscriptions={updateSubscriptions} providersList={providersList} username={username} email={email}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

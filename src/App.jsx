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
import Error from './components/Landing/Error.jsx';
import axios from 'axios';

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ providersList, setProvidersList] = useState({});
  const [ watchList, setWatchList ] = useState([]);
  const [ recentlyWatched, setRecentlyWatched ] = useState([]);
  const [ email, setEmail ] = useState(null);
  const [ username, setUsername ] = useState(null);
  const [ avatar, setAvatar ] = useState(null);
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [errorMessage, setErrorMessage] = useState('');
  const handleError = (message) => {
    setErrorMessage(message);
  }
  let userId = localStorage.getItem('userId');
  let server = 'https://api.youpostalservice.com';
  // states needed
  // recommended? => landing

  // API Calls for User Data
  const updateSubscriptions = (changes) => {
    axios({
      method: 'post',
      url: server+'/homepage/user/update',
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

  const createUser = (email) => {
    axios({
      method: 'post',
      url:server+'/homepage/user/create',
      data: {
        username: email
      },
    })
    .then((res) => {
      console.log('res', res)
      if (res.data.status) {
        console.log('hitting user exists')
        setProvidersList(res.data.userProfile.subscriptions);
        setWatchList(res.data.userProfile.watchList);
        setRecentlyWatched(res.data.userProfile.watchHistory);
      } else {
        console.log('hitting new user')
        setProvidersList(res.data.subscriptions);
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
      url:server+'/homepage/user/watched',
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
      url:server+'/homepage/user/watchlist',
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
      setAvatar(user.picture);
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
          {/* <Error message={errorMessage} /> */}
        </nav>
        <Routes>
          <Route path="/" element={<Landing isLoggedIn={isLoggedIn} recentlyWatched={recentlyWatched} watchList={watchList} username={username} email={email} handleError={handleError}/>} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/info/*" element={<MediaInfoPage providersList={providersList} addWatchList={addWatchList} addToWatchHistory={addToWatchHistory} username={username} email={email} isLoggedIn = {isLoggedIn}/>} />
          <Route path="/settings" element={<Profile isLoggedIn={isLoggedIn} updateSubscriptions={updateSubscriptions} providersList={providersList} recentlyWatched={recentlyWatched} username={username} email={email} avatar={avatar}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


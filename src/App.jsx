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
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();


  useEffect(() => {
    if (isAuthenticated) {
      console.log('user id', user.sub, user)
      setIsLoggedIn(true)
      console.log('providersList', providersList)
    } else {
      setIsLoggedIn(false)
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Header isLoggedIn = {isLoggedIn}/>
        </nav>
        <Routes>
          <Route path="/" element={<Landing isLoggedIn = {isLoggedIn}/>} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/info/*" element={<MediaInfoPage />} />
          <Route path="/settings" element={<Profile isLoggedIn={isLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

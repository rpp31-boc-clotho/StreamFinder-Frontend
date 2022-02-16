// import React from 'react';
import React, { useState, useEffect } from 'react';
import Landing from './components/Landing/Landing.jsx';
import Header from './components/Landing/Header.jsx';
import Authentication from './components/Authentication/Authentication.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './components/User_Profile/Profile.jsx';
import SearchBar from './components/Search/SearchBar.jsx';
import SearchPage from './components/Search/SearchPage.jsx';

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  });

  return (
    <div>
      <Header isLoggedIn = {isLoggedIn}/>
      <SearchBar />
      <Landing isLoggedIn = {isLoggedIn}/>
    </div>
  );
};

export default App;

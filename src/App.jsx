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

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [errorMessage, setErrorMessage] = useState('');
  const handleError = (message) => {
    setErrorMessage(message);
  }
  useEffect(() => {
    if (isAuthenticated) {
      console.log('user id', user.sub, user)
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  });



  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Header isLoggedIn = {isLoggedIn}/>
          <Error message={errorMessage} />
        </nav>
        <Routes>
          <Route path="/" element={<Landing isLoggedIn = {isLoggedIn} handleError={handleError}/>} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/info/*" element={<MediaInfoPage />} />
          <Route path="/settings" element={<Profile isLoggedIn={isLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
/*
 <div>
      <Header isLoggedIn = {isLoggedIn}/>
      <SearchBar />
      <Landing isLoggedIn = {isLoggedIn} />

    </div>
*/

/*

*/
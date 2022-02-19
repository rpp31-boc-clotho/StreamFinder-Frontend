// import React from 'react';
import React, { useState, useEffect } from 'react';
import Landing from './components/Landing/Landing.jsx';
import Header from './components/Landing/Header.jsx';
import Authentication from './components/Authentication/Authentication.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './components/User_Profile/Profile.jsx';
import SearchBar from './components/Search/SearchBar.jsx';
import SearchPage from './components/Search/SearchPage.jsx';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

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
    <BrowserRouter>
    <Header />
    <Routes>

    <Route path="Search" element={<SearchPage />} />
    <Route path="/" element={<Landing isLoggedIn = {isLoggedIn}/>} />
    </Routes>
    </BrowserRouter>
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
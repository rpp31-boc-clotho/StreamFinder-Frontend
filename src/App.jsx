import React from 'react';
import Landing from './components/Landing/Landing.jsx';
import Header from './components/Landing/Header.jsx';
import Authentication from './components/Authentication/Authentication.jsx';
import Profile from './components/User_Profile/Profile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
      <Header />
      <Landing />
      </div>
    )
  }
}

export default App;

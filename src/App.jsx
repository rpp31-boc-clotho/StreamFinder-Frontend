import React from 'react';
import Authentication from './components/Authentication/Authentication.jsx';
import Profile from './components/User_Profile/Profile.jsx';
import SearchBar from './components/Search/SearchBar.jsx';
import { useAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  LoginButton () {
    const { loginWithRedirect } = useAuth0();
  }

  render () {
    return (
      <div>
        <div>Hello World</div>
      </div>

    )
  }
}

export default App;

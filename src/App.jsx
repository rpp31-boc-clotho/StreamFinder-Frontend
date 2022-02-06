import React from 'react';
import Authentication from './components/authentication/authentication.jsx';
import Profile from './components/user_profile/profile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>Hello World</div>
        <Authentication/>
        <Profile/>

      </div>

    )
  }
}

export default App;
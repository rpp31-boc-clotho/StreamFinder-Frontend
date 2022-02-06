import React from 'react';
import Authentication from './components/authentication/authentication.jsx';
import Login from './components/login/login.jsx';
import Signup from './components/signup/signup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>Hello World</div>
        <Authentication/>

      </div>

    )
  }
}

export default App;
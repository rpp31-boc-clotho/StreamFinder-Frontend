import React from 'react';
import Landing from './components/Landing/Landing.jsx';
import Header from './components/Landing/Header.jsx';
import Authentication from './components/Authentication/Authentication.jsx';
import Profile from './components/User_Profile/Profile.jsx';
import SearchBar from './components/Search/SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn:false
    }
    this.clickOnLoginButton = this.clickOnLoginButton.bind(this);
  }
  clickOnLoginButton(event) {
    this.setState({
      isLoggedIn: true
    })
  }

  render () {
    return (
      <div>
      <Header loginButtonClick = {this.clickOnLoginButton} isLoggedIn = {this.state.isLoggedIn}/>
      <Landing isLoggedIn = {this.state.isLoggedIn}/>
      </div>
    )
  }
}

export default App;

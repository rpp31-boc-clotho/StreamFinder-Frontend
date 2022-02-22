import React from 'react';
import Header from './Header.jsx';
import Horizontal from './Horizontal.jsx';
import exampleData from '../../../exampleData.js';
import SearchBar from '../Search/SearchBar.jsx';


class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popularMovies: exampleData.movies,
      popularTV: exampleData.tv,
      isLoggedIn: false,
      recommended:exampleData.movies,
      watched:exampleData.movies
    }
  }
  componentDidUpdate(prevProps){
    if(this.props.isLoggedIn !== prevProps.isLoggedIn) {
      this.setState({
        isLoggedIn:true
      })
    }
  }
  componentDidMount(){
    if(this.props.isLoggedIn) {
      this.setState({
        isLoggedIn:true
      })
    }
  }
  render(){
    return(
      <div className="landingPage">
        <SearchBar />
        {this.state.isLoggedIn
        ?<div>
          <Horizontal popularMovies = {this.state.popularMovies} />
          <Horizontal popularTV = {this.state.popularTV} />
          <Horizontal recommended = {this.state.recommended} />
          <Horizontal watched = {this.state.watched} />
         </div>
        :<div>
          <Horizontal popularMovies = {this.state.popularMovies} />
          <Horizontal popularTV = {this.state.popularTV} />
        </div>
        }


      </div>
    )
  }
}
export default Landing;
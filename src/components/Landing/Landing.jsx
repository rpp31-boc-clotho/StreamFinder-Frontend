import React from 'react';
import Header from './Header.jsx';
import Horizontal from './Horizontal.jsx';
import exampleData from '../../../exampleData.js';
import SearchBar from '../Search/SearchBar.jsx';
import axios from 'axios';

const server = 'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com';
class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popularMovies: exampleData.movies,
      popularTV: [],
      isLoggedIn: false,
      recommended:[],
      watched: []

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
    axios.get(server+'/homepage')
    .then((response) => {
      console.log('axios response:', response);
      this.setState({
        popularMovies:response.data.movies,

      })
      this.props.handleError("An error occurred while fetching data for popular movies");
    })
    .catch((error) => {
      console.log(error);
      this.props.handleError(error);
    })
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
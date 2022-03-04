import React from 'react';
import Header from './Header.jsx';
import Horizontal from './Horizontal.jsx';
import exampleData from '../../../exampleData.js';
import SearchBar from '../Search/SearchBar.jsx';
import axios from 'axios';

const server = 'https://api.youpostalservice.com';
class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popularMovies: exampleData.movies,
      popularTV: exampleData.tv,
      isLoggedIn: false,
      recommended:[],
      recentlyWatched: [],
      watchList:[]
    }
  }
  fetchUserDetails(){
    let email = this.props.email;
    //let email = "chris.lazzarini+5@gmail.com";
    axios.get(server+'/homepage/user?username='+email)
      .then((response) => {
        console.log("RESPONSE DATA FROM USER ", response.data);
        this.setState({
          watchList:response.data.watchList.movies.concat(response.data.watchList.shows),
          recentlyWatched:response.data.watchHistory.movies.concat(response.data.watchHistory.shows),
          recommended:response.data.recommendations.movies.concat(response.data.recommendations.shows)
        })
      })
      .catch((error) => {
        //console.log(error);
        this.props.handleError(error);
      });
  }

  componentDidUpdate(prevProps){
    if(this.props.isLoggedIn !== prevProps.isLoggedIn) {
      this.setState({
        isLoggedIn:this.props.isLoggedIn
      })
    }
    if((JSON.stringify(prevProps.recentlyWatched) !== JSON.stringify(this.props.recentlyWatched)) || (JSON.stringify(prevProps.watchList) !== JSON.stringify(this.props.watchList))) {
      this.fetchUserDetails();
    }

  }



  componentDidMount(){

    axios.get(server+'/homepage')
    .then((response) => {
      console.log('axios response:', response);
      this.setState({
        popularMovies:response.data.movies,
        popularTV: response.data.shows

      })

    })
    .catch((error) => {
      console.log(error);
      this.props.handleError(error);
    })
    if(this.props.isLoggedIn) {
      this.fetchUserDetails();
      this.setState({
        isLoggedIn:true,

      })

    }
    /*this.setState({
      recentlyWatched:this.props.recentlyWatched,
      watchList:this.props.watchList
    })*/
    /*this.setState({
      recentlyWatched:exampleData.movies,
      watchList:exampleData.movies
    })*/
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
          <Horizontal recentlyWatched = {this.state.recentlyWatched} />
          <Horizontal watchList = {this.state.watchList} />

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
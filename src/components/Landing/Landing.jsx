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
      recommended:exampleData.movies,
      recentlyWatched: [],
      watchList:[]
    }
  }
  componentDidUpdate(prevProps){
    if(this.props.isLoggedIn !== prevProps.isLoggedIn) {
      this.setState({
        isLoggedIn:true
      })
    }
    if( prevProps.recentlyWatched !== this.props.recentlyWatched) {
      if(this.props.recentlyWatched.length > 0) {
        this.setState({
          recentlyWatched:this.props.recentlyWatched
        })
      }else {
        this.setState({
          recentlyWatched:exampleData.movies
        })
      }

    }
    if( prevProps.watchList !== this.props.watchList) {
     if(this.props.watchList.length > 0) {
      this.setState({
        watchList:this.props.watchList
      })
     }else {
      this.setState({
        watchList:exampleData.movies
      })
     }

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
      //this.props.handleError("An error occurred while fetching data for popular movies");
    })
    .catch((error) => {
      console.log(error);
      this.props.handleError(error);
    })
    if(this.props.isLoggedIn) {
      this.setState({
        isLoggedIn:true,

      })
    }
    /*this.setState({
      recentlyWatched:this.props.recentlyWatched,
      watchList:this.props.watchList
    })*/
    this.setState({
      recentlyWatched:exampleData.movies,
      watchList:exampleData.movies
    })
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



import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Horizontal from './Horizontal.jsx';
import exampleData from '../../exampleData.js';


class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popularMovies: exampleData.movies,
      popularTV: exampleData.tv,
      isLoggedIn:false,
      recommended:[],
      watched:[]
    }
  }

  render(){
    return(
      <div className="landingPage">
        <Header />
        <Search />
        {this.state.isLoggedIn
        ?<div>
          <Horizontal popularMovies = {this.state.popularMovies} />
          <Horizontal popularTV = {this.state.popularTV} />
          <Horizontal recommended = {this.state.recommended} />
          <Horizontal watched = {this.state.watchlist} />
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



import React from 'react';
import Horizontal from './Horizontal.jsx';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      popularMovies: [],
      popularTV: [],
      isLoggedIn:true,
      recommended:[],
      watched:[]
    }
  }

  render(){
    return(
      <div className="landingPage">
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
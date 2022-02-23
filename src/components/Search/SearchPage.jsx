import React from 'react';
import SearchBar from './SearchBar.jsx';
import SearchResults from'./SearchResults.jsx';
import exampleData from '../../../exampleData.js';
import {searchFunction} from './SearchFunction.js';
//import search results list

//just createing a place holder for the page sepreate from the search component, still debating the design.

//so if we create a search bar, we need to decide what it is going to search by. so the basic search bar searches by...nothing. so we need to fix that.

class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mediaType: {
        movies: true,
        TVShows: true
      },
      baseData: exampleData.movies,
      results: exampleData.movies
    }
    this.filterSearch = this.filterSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClickMovie = this.handleClickMovie.bind(this);
    this.handleClickTVShow = this.handleClickTVShow.bind(this);
    }

  async handleSearch(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    let searched = await searchFunction('movie', event.target[0].value)
    this.setState (prevState => ({
      results: searched
      //this.filterSearch(this.state.baseData, event.target[0].value)
    }));
  }

  //maybe we could do an if statement here. lets build a handle click function.

  handleClickMovie(){
    this.setState (prevState => ({
      ...prevState,
      mediaType : {
        ...prevState.mediaType,
        movies: (!prevState.movies)
      }
    }))
  }

  handleClickTVShow(){
    this.setState (prevState => ({
      ...prevState,
      mediaType : {
        ...prevState.mediaType,
        TVShows: (!prevState.TVShows)
      }
    }))
  }

  filterSearch (films, query) {
    if(!query) {
      return films;
    }
    return films.filter((film) => {
      const filmName = film.title.toLowerCase();
      return filmName.includes(query.toLowerCase());
    })
  }



  render() {
    return (
      //gonna have to send the data through here, I think? need to decide where we are searching through the data.
      <div>
        <SearchBar filterSearch={this.filterSearch} handleSearch={this.handleSearch}/>
        <button onClick={this.handleClickMovie}>Filter movies</button>
        <SearchResults results={this.state.results} />
      </div>
    )
  }

}

export default SearchPage;
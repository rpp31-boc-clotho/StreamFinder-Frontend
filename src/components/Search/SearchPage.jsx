import React from 'react';
import SearchBar from './SearchBar.jsx';
import SearchResults from'./SearchResults.jsx';
import {searchFunction} from './SearchFunction.js';

class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mediaType: {
        movie: false,
        tv: false,
        both: true,
      },
      results: []
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearch2 = this.handleSearch2.bind(this);
    this.handleArrayMerge = this.handleArrayMerge.bind(this);
    this.handleClickMovie = this.handleClickMovie.bind(this);
    this.handleClickTv = this.handleClickTv.bind(this);
    this.handleClickBoth = this.handleClickBoth.bind(this);
  }

  handleArrayMerge(array1, array2) {
    let results = [...array1, ...array2];
    results.sort((obj1, obj2) => obj2.rating-obj1.rating);
    return results;
  }


  async handleSearch2(term) {
    let mediaObj = await searchFunction('both', term)
    let mergedResults = this.handleArrayMerge(mediaObj.movies, mediaObj.shows, [], mediaObj.movies.length, mediaObj.shows.length)
    this.setState (prevState => ({
      results: mergedResults
    }));
  }

  async handleSearch(term) {
    event.preventDefault();
    let searched;
    if (this.state.mediaType.movie === true){
      searched = await searchFunction('movie', term.target.value)
      searched.sort((obj1, obj2) => obj2.rating-obj1.rating);
    } else if (this.state.mediaType.tv === true) {
      searched = await searchFunction('tv', term.target.value)
      searched.sort((obj1, obj2) => obj2.rating-obj1.rating);
    } else if (this.state.mediaType.both === true) {
      let mediaObj = await searchFunction('both', term.target.value);
      searched = this.handleArrayMerge(mediaObj.movies, mediaObj.shows, [], mediaObj.movies.length, mediaObj.shows.length);
    }
    this.setState (prevState => ({
      results: searched
    }));
  }

  handleClickMovie(){
    this.setState (prevState => ({
      ...prevState,
      mediaType : {
        movie: true,
        tv: false,
        both: false
      }
    }))
  }

  handleClickTv(){
    this.setState (prevState => ({
      ...prevState,
      mediaType : {
        movie: false,
        tv: true,
        both: false
      }
    }))
  }

  handleClickBoth(){
    this.setState (prevState => ({
      ...prevState,
      mediaType : {
        movie: false,
        tv: false,
        both: true
      }
    }))
  }

  componentDidMount(){
    let splitPath = window.location.pathname.split('/')
    if (window.location.href.split('=').length > 1) {
      this.handleSearch2(window.location.href.split('=')[1]);
    }
  }


  render() {
    return (
      <div className="search-page">
        <SearchBar filterSearch={this.filterSearch} handleSearch={this.handleSearch}/>
        <div className="results-display">
          <div className="search-filters">
            {this.state.mediaType.movie ? <button onClick={this.handleClickMovie}>Only Searching Movies!</button>:<button onClick={this.handleClickMovie}>Search Movies!</button>}
            {this.state.mediaType.tv ? <button onClick={this.handleClickTv}>Only Searching TV Shows!</button>:<button onClick={this.handleClickTv}> Search TV Shows</button>}
            {this.state.mediaType.both ? <button onClick={this.handleClickBoth}>Searching Both Moives and TV shows!</button>:<button onClick={this.handleClickBoth}>Look for both!</button>}
          </div>
          <SearchResults results={this.state.results} />
        </div>
      </div>
    )
  }

}

export default SearchPage;
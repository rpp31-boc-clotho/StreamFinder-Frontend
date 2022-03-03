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
        movie: false,
        tv: false,
        both: true,
      },
      results: []
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearch2 = this.handleSearch2.bind(this);
    //this.filterSearch = this.filterSearch.bind(this);
    this.handleClickMovie = this.handleClickMovie.bind(this);
    this.handleClickTv = this.handleClickTv.bind(this);
    this.handleClickBoth = this.handleClickBoth.bind(this);
    this.handleArrayMerge = this.handleArrayMerge.bind(this);

  }

  handleArrayMerge(array1, array2, res, array1Length, array2Length) {
    array1.sort((obj1, obj2)=> obj2.rating-obj1.rating)
    array2.sort((obj1, obj2)=> obj2.rating-obj1.rating)

    let i=0, j=0, k=0;
    while (i < array1Length && j < array2Length) {
      if (array2[j] <= array1[i]) {
          res[k] = array1[i];
          i += 1;
          k += 1;
      } else {
          res[k] = array2[j];
          j += 1;
          k += 1;
      }
  }
  while (i < array1Length) {
      res[k] = array1[i];
      i += 1;
      k += 1;
  }
  while (j < array2Length) {
      res[k] = array2[j];
      j += 1;
      k += 1;
  }
    res.sort((obj1, obj2) => obj2.rating-obj1.rating);
    return res;
  }


  async handleSearch2(term) {
    console.log(term);
    //for searched we can have a second value that will be dependent on the state of true false toggles. nothing crazy.
    let mediaObj = await searchFunction('both', term)
    let mergedResults = this.handleArrayMerge(mediaObj.movies, mediaObj.shows, [], mediaObj.movies.length, mediaObj.shows.length)
    this.setState (prevState => ({
      results: mergedResults
      //this.filterSearch(this.state.baseData, event.target[0].value)
    }));
  }

  async handleSearch(term) {
    event.preventDefault();
    console.log(term.target.value);
    //for searched we can have a second value that will be dependent on the state of true false toggles. nothing crazy.
    let searched = await searchFunction('movie', term.target.value)
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
        movie: true,
        tv: false,
        both: false
      }
    }))
    console.log(this.state.mediaType);
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
    console.log(this.state.mediaType);
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
    console.log(this.state.mediaType);
  }

  // filterSearch (films, query) {
  //   if(!query) {
  //     return films;
  //   }
  //   return films.filter((film) => {
  //     const filmName = film.title.toLowerCase();
  //     return filmName.includes(query.toLowerCase());
  //   })
  // }

  componentDidMount(){
    let splitPath = window.location.pathname.split('/')
    // console.log("splitpath: "+ splitPath);
    // console.log("window loc: "+ window.location);
    // console.log("window loc: "+ JSON.stringify(window.location));
    // console.log("window loc: "+ window.location.href.split('=')[1]);
    if (window.location.href.split('=').length > 1) {
      this.handleSearch2(window.location.href.split('=')[1]);
    }
  }


  render() {
    return (
      //gonna have to send the data through here, I think? need to decide where we are searching through the data.
      <div>
        <SearchBar filterSearch={this.filterSearch} handleSearch={this.handleSearch}/>
        <button onClick={this.handleClickMovie}>Filter Movies</button>
        <button onClick={this.handleClickTv}> Filter TV Shows</button>
        <button onClick={this.handleClickBoth}>Look for both!</button>
        <SearchResults results={this.state.results} />
      </div>
    )
  }

}

export default SearchPage;
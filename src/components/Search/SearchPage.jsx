import React from 'react';
import SearchBar from './SearchBar.jsx';
import SearchResults from'./SearchResults.jsx';
import exampleData from '../../../exampleData.js';
//import search results list

//just createing a place holder for the page sepreate from the search component, still debating the design.

//so if we create a search bar, we need to decide what it is going to search by. so the basic search bar searches by...nothing. so we need to fix that.

class SearchPage extends React.component {
  constructor(props){
    super(props);
    this.state = {
      //this will be an opt out process rather then opt in
      media_type = {
        movies: true,
        TV_shows: true
      }
      results = exampleData
    }
  }


  render() {
    return (
      //gonna have to send the data through here, I think? need to decide where we are searching through the data.
      <SearchBar/>
      <SearchResults results={this.props.results}/>
    )
  }

}
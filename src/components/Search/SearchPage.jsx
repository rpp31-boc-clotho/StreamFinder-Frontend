import React from 'react';
import SearchBar from './SearchBar.jsx';
//import search results list

//just createing a place holder for the page sepreate from the search component, still debating the design.

//so if we create a search bar, we need to decide what it is going to search by. so the basic search bar searches by...nothing. so we need to fix that.

class SearchPage extends React.component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <SearchBar/>

    )
  }



}
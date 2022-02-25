import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


function search({handleSearch, filterSearch}) {

  const [searchTerm, changeTerm] = useState('');
  const onSearch = () => {
    if (!window.location.href.includes("/search")) {
      <Link to={{
        pathname: "/search",
        state: searchTerm
      }}/>
     }
     debugger
     console.log("this is searchTerm: " + searchTerm)
     //debugger
    // console.log("href: " + JSON.stringify(window.location.href))
    console.log('onSearch reached!')
    handleSearch(searchTerm)
  }

  return (
    <div>
      <form action="/search" onSubmit={onSearch} onChange={changeTerm}>
        <label htmlFor="Search_Bar">
          <span className="Search_Bar_Title">Search for Movies or Shows!</span>
        </label>
        <input
          type="text"
          id="Search_Bar"
          placeholder="Search for Movies or Shows!"
          name="SB"
        />
        <button type="submit" >Search</button>
      </form>
    </div>
  )

}

export default search;

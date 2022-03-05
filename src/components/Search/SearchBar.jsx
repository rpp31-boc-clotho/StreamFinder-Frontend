import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function searchBar({handleSearch}) {

  const [searchTerm, changeTerm] = useState('');
  const onSearch = () => {
    handleSearch(searchTerm)
  }
 return (
    <div className="searchDiv">
      <form action="/search" onSubmit={onSearch} onChange={changeTerm}>
        <label htmlFor="Search_Bar">
            <span className="Search_Bar_Title">What do you want to watch?</span>
        </label>
        <div className="search-container">
          <input
            type="text"
            id="Search_Bar"
            placeholder="Search for movies or shows!"
            name="SB"
          />
          <button type="submit" id="searchSubmit">
            <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="11" r="8.5" stroke="#353531" stroke-width="5"/>
              <line x1="10.3383" y1="16.1907" x2="4.19072" y2="20.6617" stroke="#353531" stroke-width="6" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default searchBar;
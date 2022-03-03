import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function searchBar({handleSearch}) {

  const [searchTerm, changeTerm] = useState('');
  const onSearch = () => {
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

export default searchBar;
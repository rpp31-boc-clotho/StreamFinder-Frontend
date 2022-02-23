import React from 'react';
import axios from 'axios';

//so if search this, it should send the props (term) through the looping portion of the search results

//title, maybe original_title (do research on partial searches)

//media type (TV vs Movie) toggle box, series of booleans creating switch statments dependent on wether the toggle is on or off


const search = (props) => {

  return (
    <div>
      <form action="/search" onSubmit={props.handleSearch}>
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
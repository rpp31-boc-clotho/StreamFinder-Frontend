import React from 'react';
import axios from 'axios';

const search = (props) => {

  return (
    <div>
      <form action="/" method="get">
        <label htmlFor="Search_Bar">
          <span className="Search_Bar_Title">Search for Movies or Shows!</span>
        </label>
        <input
          type="text"
          id="Search_Bar"
          placeholder="Search for Movies or Shows!"
          name="SB"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )

}

export default search;
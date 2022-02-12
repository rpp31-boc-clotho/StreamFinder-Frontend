import React, {useRef, useState, useEffect} from 'react';
import exampleData from '../../../exampleData.js';
import MovieCard from '../Landing/MovieCard.jsx';

//wouldnt we need to create way to pass along the info from the search bar? probably add it to the local state then display there

//create a loop that goes over the props, we can matcch what we think the name will be to the title

const searchResults = (props) => {

  return (
    <div className="searchResults">
      <div className="searchResultsHeader">
      Search Results
      </div>
      {props.results.map((film, i) => {
        //is the logic right? check inputs before finishing
        return (
          <MovieCard film={film} key={i} />
        )
      })}
    </div>

  )
}

export default searchResults;
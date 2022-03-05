import React, {useRef, useState, useEffect} from 'react';
import MovieCard from '../Landing/MovieCard.jsx';

const searchResults = (props) => {

  return (
    <div className="searchResults" data-testid="searchResults-test">
      <div className="searchResultsHeader">
        Search Results
      </div>
      <div className="result-cards">
        {props.results.map((film, i) => {
          return (
            <MovieCard film={film} key={i} />
          )
        })}
      </div>
    </div>
  )
}

export default searchResults;


import React from 'react';
import MovieCard from './MovieCard.jsx';
import AddToWatch from './AddToWatch.jsx';

var Display = (props) => {
  // console.log('list',props.list);
  return(
    <div className="movieDisplay">

       {props.list.map((film, i) => {

        return (

          <MovieCard film={film} key={i} />
        )
      })}
      {props.isWatchList ? <AddToWatch/> : <div className="hidden"></div>}
    </div>
  );
}

export default Display;
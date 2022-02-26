

import React from 'react';
import MovieCard from './MovieCard.jsx';


var Display = (props) => {
  console.log('list',props.list);
  return(
    <div className="movieDisplay">

       {props.list.map((film, i) => {

        return (

          <MovieCard film={film} key={i} />
        )
      })}
    </div>
  );
}

export default Display;
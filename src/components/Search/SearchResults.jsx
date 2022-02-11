import React {useRef, useState, useEffect} from 'react';
import exampleData from '../../../exampleData.js';
import MovieCard from '../Landing/MovieCard.js';

//wouldnt we need to create way to pass along the info from the search bar? probably add it to the local state then display there

//create a loop that goes over the props, we can matcch what we think the name will be to the title

const searchResults = (props) => {
  const [exampleData, sortExampleData] = useState([])

  useEffect(() => {
    sortExampleData(props.results)
  })

  //create a maping process that goes over the example data

  return (
    <div className="searchResults">
      <div className="searchResultsHeader">
      Search Results
      </div>
      {exampleData.map((film, i) => {
        //is the logic right? check inputs before finishing
        return (
          <MovieCard film={film} key={i} />
        )
      })}
    </div>

  )
}
import React from 'react';
import { useEffect, useState } from "react";
import AddToWatchlist from './addToWatchlist.jsx';
import Services from './Services.jsx';
import axios from 'axios';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import exampleData from '../../../exampleData.js';

class MediaInfoPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allData: exampleData
    }
  }

  render() {
    let testData = this.state.allData.movies[0];
    console.log('dummy data:', testData);

    let url = window.location.pathname;
    console.log('path:', url)

    // condition => path is to a movie
    // condition => path is to a tv show
    // condition => path is to any other subdirectory in '/info' => show search page

    // let testQuery = 'nothing yet';
    // axios.get( 'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/movie/' + url )
    //   .then(data => {
    //     console.log('fetched data!', data);
    //     testQuery = data;
    //   })
    //   .catch(err => {
    //     console.log('error fetching data:', err);
    //   })
    // console.log('query result:', testQuery);

    return (
      <div className="mediaInfoPage">
        <div className="mediaHeader" style={{ backgroundImage: `url(${"https://image.tmdb.org/t/p/w185" + testData['poster_path']})` }}>
          <div className="posterImage">
            <img src={"https://image.tmdb.org/t/p/w185" + testData['poster_path']}></img>
          </div>
          <div className="mediaDetails">
            <h1>{testData['original_title']}</h1>
            <h2>{testData['release_date']}</h2>
            <AddToWatchlist />
            <p>{testData['overview']}</p>
            <div className="ratingDot">{testData['vote_average']}</div>
          </div>
        </div>
        <Services />
        {/* <Reviews /> */}
      </div>
    )
  }
}

export default MediaInfoPage;
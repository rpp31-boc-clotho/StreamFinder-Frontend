import React from 'react';
import { useEffect, useState } from "react";
import AddToWatchlist from './AddToWatchlist.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import Services from './Services.jsx';
import MediaDetails from './MediaDetails.jsx';

import axios from 'axios';
// const https = require('https');
// import https from 'express';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import exampleData from '../../../exampleData.js';

class MediaInfoPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allData: exampleData,
      type: null,
      title: '',
      release: '',
      description: '',
      rating: '',
      img: '',
      id: ''
    }

    this.getMediaInfo = this.getMediaInfo.bind(this);
  }

  getMediaInfo() {
    let url = window.location.pathname.split('/');
    console.log('requesting https:', url);

    let mediaInfo = null;
    let availability = {};

    // const agent = new https.Agent({
    //   rejectUnauthorized: false
    // });
    // axios.get('https://something.com/foo', { httpsAgent: agent });
    axios.get( 'https://api.youpostalservice.com/homepage/media/' + url[2] + '/' + url[3] )
      .then(data => {
        mediaInfo = data.data.mediaDetails;
        availability = data.data.providers;
        console.log(mediaInfo);

        this.setState({
          title: mediaInfo['title'],
          release: mediaInfo['release_date'],
          description: mediaInfo['summary'],
          rating: mediaInfo['rating'],
          img: mediaInfo['imgUrl'],
          type: url[2],
          id: url[3]
        });

        // TODO: condition => path is to any other subdirectory in '/info' => redirect to search page

      })
      .catch(err => {
        console.log('error fetching data:', err);
      })
  }

  render() {
    let testData = this.state.allData.movies[0];
    // console.log('dummy data:', testData);
    let posterUrl = 'https://image.tmdb.org/t/p/w185' + this.state['img'];

    return (
      <div className="mediaInfoPage">
        <div className="mediaHeader">
          <div className="posterImage">
            <img src={posterUrl}></img>
          </div>
          {/* <p onClick={this.props.getInfo}>Loading Media Info...</p> */}
          <div className="mediaDetails" style={{ backgroundImage: `url(${posterUrl})` }}>
            <h1>{this.state['title']}</h1>
            <h2>{this.state['release']}</h2>
            <AddToWatchlist />
            <p>{this.state['description']}</p>
            <div className="ratingDot">{this.state['rating']}</div>
          </div>
        </div>
        <Services />
        <Reviews  id={this.state.id} type={this.state.type} email={this.props.email} avatar={this.props.avatar} />
      </div>
    )
  }

  componentDidMount() {
    this.getMediaInfo();
  }
}

export default MediaInfoPage;
import React from 'react';
import { useEffect, useState } from "react";
import AddToWatchlist from './AddToWatchlist.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import Services from './Services.jsx';
import MediaDetails from './MediaDetails.jsx';
import Service from './Service.jsx';
import SearchBar from '../Search/SearchBar.jsx';

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
      id: '',
      availability: {}
    }

    this.getMediaInfo = this.getMediaInfo.bind(this);
    this.renderWatchListBtn = this.renderWatchListBtn.bind(this);
    this.renderServices = this.renderServices.bind(this);
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
        // console.log('availability:', availability);

        this.setState({
          title: mediaInfo['title'],
          release: mediaInfo['release_date'],
          description: mediaInfo['summary'],
          rating: mediaInfo['rating'],
          img: mediaInfo['imgUrl'],
          type: url[2],
          id: url[3],
          availability: availability
        });

        // TODO: condition => path is to any other subdirectory in '/info' => redirect to search page

      })
      .catch(err => {
        console.log('error fetching data:', err);
      })
  }

  renderWatchListBtn() {
    if (this.props.isLoggedIn) {
      return (
        <AddToWatchlist addWatchList={this.props.addWatchList} email={this.props.email} type={this.state.type} id={this.state.id} watchList={this.props.watchList} />
      )
    }
    return(<div className="addToWatchlist"></div>)
  }

  renderServices(providerNames, serviceLinks, availableServices) {
    // console.log('attempting to render services:', providerNames, serviceLinks, availableServices);

    if (providerNames.length === 0) {
      return (<p classList="no-service">this title is not currently available to stream 😞</p>);
    }

    return (
      <div className="services">
        { providerNames.map(service => {
          // console.log('Service:', availableServices[service].plan);
          if (this.props.isLoggedIn && this.props.providersList[service]) {
            return ( <Service email={this.props.email} type={this.state.type} id={this.state.id} name={service} link={serviceLinks[service]} addToWatchHistory={this.props.addToWatchHistory} subscribed="true" cost={availableServices[service].plan} /> )
          }
          return ( <Service email={this.props.email} type={this.state.type} id={this.state.id} name={service} link={serviceLinks[service]} subscribed="false" cost={availableServices[service].plan} /> )
          }) }
      </div>
    )
  }

  render() {
    let testData = this.state.allData.movies[0];
    // console.log('dummy data:', testData);
    let posterUrl = 'https://image.tmdb.org/t/p/w185' + this.state['img'];

    let ratingPercent = Math.round(this.state['rating'] * 10) + '%';
    console.log('Rated:', ratingPercent);

    return (
      <div className="info-page">
        <SearchBar />
        <div className="mediaInfoPage">
          <div className="mediaHeader">
            <div className="posterImage">
              <img src={posterUrl}></img>
            </div>
            {/* <p onClick={this.props.getInfo}>Loading Media Info...</p> */}
            <div className="mediaDetails" style={{ backgroundImage: `url(${posterUrl})` }}>
              <h1>{this.state['title']}</h1>
              <h2>{this.state['release']}</h2>
              {this.renderWatchListBtn()}
              <p>{this.state['description']}</p>
              <div className="ratingDot">{ratingPercent}</div>
            </div>
          </div>
          <Services availability={this.state.availability} renderServices={this.renderServices} />
          <Reviews id={this.state.id} type={this.state.type} email={this.props.email} avatar={this.props.avatar} />
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.getMediaInfo();
  }
}

export default MediaInfoPage;
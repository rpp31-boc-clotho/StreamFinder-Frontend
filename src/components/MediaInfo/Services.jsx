import React from 'react';
import Service from './Service.jsx';

const Services = function(props) {
  let availableServices = [];
  // console.log('providers:', props.providersList);

  let serviceLinks = {
    "Apple iTunes": 'https://itunes.apple.com/us/genre/movies/id33',
    "Apple TV Plus": 'https://www.apple.com/apple-tv-plus/',
    "Amazon Prime Video": 'https://www.amazon.com/Prime-Video/b?node=2676882011',
    "Disney Plus": 'https://www.disneyplus.com/',
    "Google Play Movies": 'https://play.google.com/store/movies',
    "HBO Max": 'https://www.hbomax.com/',
    "Hulu": 'https://www.hulu.com/welcome',
    "Netflix": 'https://www.netflix.com/browse',
    "Paramount Plus": 'https://www.paramountplus.com/',
    "Peacock": 'https://www.peacocktv.com/',
    "YouTube": 'https://tv.youtube.com/'
  }

  for (let service of Object.keys(props.providersList)) {
    if (props.providersList[service]) {
      availableServices.push(service);
    }
  }

  // console.log('==========services:', availableServices);

  return (
    <div>
      <h3>Available on...</h3>
      <div className="services">
        {availableServices.map((service) => ( <Service name={service} link={serviceLinks[service]} /> ))}
      </div>
    </div>
  )
}

export default Services;
import React from 'react';
import Service from './Service.jsx';

const Services = function(props) {
  let providerNames = [];
  let availableServices = {};
  // console.log('subscribed services:', props.availability);

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

  for (let plan of Object.keys(props.availability)) {
    for (let service of props.availability[plan]) {
      if (Object.keys(serviceLinks).includes(service.provider_name) && !providerNames.includes(service.provider_name)) {
        let serviceMod = {
          provider_name: service.provider_name,

        }
        providerNames.push(service.provider_name)
        availableServices[service.provider_name] = {
          plan,
          logo_path: service.logo_path,
          url: serviceLinks[service.provider_name]
        }
      }
    }
  }

  return (
    <div>
      <h3>Available on...</h3>
      {props.renderServices(providerNames, serviceLinks, availableServices)}
    </div>
  )
}

export default Services;
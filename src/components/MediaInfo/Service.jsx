import React from 'react';

const Service = function(props) {
  // console.log('service available!', props.name);
  return ( <a href={props.link} target="_blank"><h3>{props.name}</h3></a> )
}

export default Service;
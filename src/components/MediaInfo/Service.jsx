import React from 'react';

const Service = function(props) {
  if (props.subscribed === 'true') {
    return ( <a class="subscribed" href={props.link} target="_blank"><h3>{props.name}</h3></a> )
  }
  return ( <a href={props.link} target="_blank"><h3>{props.name}</h3></a> )
}

export default Service;
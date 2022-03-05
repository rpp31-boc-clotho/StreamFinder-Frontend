import React from 'react';

const Service = function(props) {
  let pluralType = props.type + 's';

  if (pluralType === 'tvs') {
    pluralType = 'shows';
  }

  let data = {
    username: props.email,
    watchedType: pluralType,
    watchedId: parseInt(props.id)
  };

  if (props.subscribed === 'true') {
    return (
      <a onClick={function() {
          props.addToWatchHistory(data)
        }} class="subscribed" href={props.link} target="_blank">
        <h3>{props.name}</h3>
        <h4>{props.cost}</h4>
      </a>
    )
  }
  return (
    <a onClick={function() {
        props.addToWatchHistory(data)
      }} href={props.link} target="_blank">
      <h3>{props.name}</h3>
      <h4>{props.cost}</h4>
    </a>
    )

}

export default Service;
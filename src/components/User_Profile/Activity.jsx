import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Activity = (props) => {

  const navigate = useNavigate();

  console.log('prop title', props.title)
  if (!props.title) {
    return (
      <div>
        Nothing watched
      </div>
    )
  }

    return (
      <div className="profileWatchHistory">
        <Link className="profileWatchHistoryPoster" to={`/info/${props.type}/${props.id}`}>
          <img className="profileWatchHistoryPoster" src={props.image} />
        </Link>
        <div className="profileWatchHistoryTitle" onClick={() => navigate(`/info/${props.type}/${props.id}`)}>{props.title}</div>
      </div>
    )

}

export default Activity;
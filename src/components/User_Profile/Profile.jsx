import React, { useState, useEffect } from 'react';
import Subscriptions from './Subscriptions.jsx';
import Update from './Update.jsx';
import Activity from './Activity.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const profile = (props) => {

  const [ watchHistory, setWatchHistory ] = useState([]);

  let navigate = useNavigate();
  const isAuthenticated = useAuth0();
  const movies = [];
  const shows = [];

  useEffect(() => {
    if (!isAuthenticated.isLoading && !isAuthenticated.isAuthenticated) {
      navigate('/')
    }
  })

  useEffect(() => {
    if (props.email) {
      axios({
        method: 'get',
        url: 'https://api.youpostalservice.com/homepage/user',
        params: {
          username: props.email
        }
      })
      .then((response) => {
        console.log(response);
        setWatchHistory(response.data.watchHistory)
      })
      .catch((e) => {
        console.log('Error Adding to Recently Watched:', e)
      })
    }
  }, [])

  console.log('watch history', watchHistory)

  // States
  const [ modal, setModal ] = useState(false);

  // Functions
  const hideModal = () => {
    setModal(false);
  }

  if (watchHistory.movies) {
    for (let i = 0; i < 5; i ++) {
      if (!watchHistory.movies[i]) {
        return;
      } else {
        movies.push(watchHistory.movies[i])
      }
    }
  } else {
    movies.push('No movies watched')
  }

  if (watchHistory.shows) {
    for (let i = 0; i < 5; i ++) {
      if (!watchHistory.shows[i]) {
        return;
      } else {
        shows.push(watchHistory.shows[i])
      }
    }
  } else {
    shows.push('No shows watched')
  }


  //Render
  return (
    <div data-testid="profile-test" className="profileLayer">
      <div className="profile">
        <div className="profileUserInfo">
          <img className="profileAvatar" src={props.avatar}></img>
          <h1 className="profileUsername">{props.username}</h1>
        </div>
        <div className="profileDivider"></div>
        <div className="profileBody">
          <div className="profileSubscriptions">
            <h2>Your Subscriptions</h2>
            <div className="profileSubscriptionsList">
              <Subscriptions providersList={props.providersList} />
              <div className="profileEditSubsButton">
                <button className="editSubs" onClick={() => setModal(true)}>Edit Subscriptions</button>
              </div>
            </div>
          </div>
          <div className="profileActivity">
            <h2>Your Activity</h2>
            <h4>Recently Watched Movies</h4>
            { movies.map(({title, imgUrl, id, i}) =>
              <Activity title={title} key={i} image={imgUrl} id={id} type="movie"/>
            )}
            <h4>Recently Watched Shows</h4>
            { shows.map(({title, imgUrl, id, i}) =>
              <Activity title={title} key={i} image={imgUrl} id={id} type="tv"/>
            )}
          </div>
        </div>
        <div className="profileFooter">
          <div>
            <Update show={modal} hide={hideModal} providersList={props.providersList} updateSubs={props.updateSubscriptions}/>
          </div>
        </div>
      </div>
    </div>

  )

}

export default profile;